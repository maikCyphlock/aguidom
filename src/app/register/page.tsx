"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { registerUser } from "./actions";
import * as z from "zod";
import { ZodError } from "zod";
import FormClient from "../profile/[id]/FormClient";
import { FormSubmitBtn } from "../profile/[id]/FormSubmitBtn";
import { toast } from "sonner";

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

export default function Component() {
  const [email, setEmail] = useState("maik");
  const [password, setPassword] = useState("maik");
  const [show, setShow] = useState(false);

  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleGoogleSubmit = async () => {
    await supabase.auth.signUp({
      email: email,
    });
    router.refresh();
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const registerDate = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };
    try {
      const valitadedData = registerSchema.parse(registerDate);

      const { error } = await supabase.auth.signUp({
        email: valitadedData.email,
        password: valitadedData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      router.refresh();

      if (error) {
        return {
          error: error.message,
          status: 400,
        };
      }

      return toast.success("Registro exitoso, por favor revise su correo");
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return toast.error(error.issues[0].message);
      }
      return toast.error(error.message);
    }
  };
  return (
    <div className="w-full p-2  flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-12 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            alt="Athletics Club Logo"
            className="h-24 w-24 object-cover rounded-full mb-4"
            height="100"
            src="https://file.rendit.io/n/TAQzv7NaT36JAEeJkmLy.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            Club Aguidom
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            ¡Bienvenido ! Por favor, ingresa tus datos para ser registrado.
          </p>
        </div>
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Correo Electronico</Label>
            <Input
              className="border  border-zinc-500"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@doe.com"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <Link
                className="text-sm underline text-gray-500 dark:text-gray-400"
                href="#"
              >
                Olvidó su contraseña?
              </Link>
            </div>
            <div className="flex gap-1 relative ">
              <Input
                className="border border-zinc-500"
                id="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                {...(show ? { type: "text" } : { type: "password" })}
              ></Input>
              <button
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute right-2 top-1.5 "
              >
                {show ? <EyeOffIcon /> : <EyeOpen />}
              </button>
            </div>
          </div>
          <FormSubmitBtn
            title="Registrar"
            className="bg-green-500 text-green-100 w-full hover:bg-green-800"
          />
          <Button
            className="w-full flex gap-1 bg-zinc-900 text-white hover:text-zinc-800"
            type="button"
            onClick={handleGoogleSubmit}
          >
            <Google />
            inicia con google
          </Button>
        </form>
        <div className="mt-4 grid place-items-center gap-1  text-sm">
          ya estás registrado?
          <Link className="underline text-green-500" href="login">
            inicia sesion
          </Link>
        </div>
      </div>
    </div>
  );
}

const Google = () => {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 256 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
};
export const EyeOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);
