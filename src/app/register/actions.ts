"use server";
import { supabaseServerActions } from "@/lib/supabaseServerAction";
import * as z from "zod";
import { ZodError } from "zod";
const URL_TO_REDIRRECT = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return process.env.NEXT_PUBLIC_DOMAIN;
};

const registerSchema = z.object({
  email: z.string().email({ message: "Ingresa un correo valido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe contener al menos 8 caracteres" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "La contraseña debe contener al menos una letra mayúscula",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "La contraseña debe contener al menos una letra minúscula",
    })
    .refine((password) => /\d/.test(password), {
      message: "La contraseña debe contener al menos un número",
    }),
});

export const registerUser = async (_, props: FormData) => {
  console.log({ URL_TO_REDIRRECT });
  try {
    const registerDate = {
      email: props.get("email")?.toString(),
      password: props.get("password")?.toString(),
    };
    const valitadedData = registerSchema.parse(registerDate);

    const { error } = await supabaseServerActions.auth.signUp({
      email: valitadedData.email,
      password: valitadedData.password,
      options: {
        emailRedirectTo: `${URL_TO_REDIRRECT()}/auth/callback`,
      },
    });

    if (error) {
      return {
        error: error.message,
        status: 400,
      };
    }

    return {
      status: 200,
      error: null,
      message: "Se ha registrado exitosamente, por favor revise su correo",
    };
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return {
        error: error.issues[0].message,
        status: 400,
      };
    }
    return {
      error: error.message,
      status: 400,
    };
  }
};
