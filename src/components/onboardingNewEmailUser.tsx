"use client";
import { CldUploadWidget } from "next-cloudinary";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { Database } from "@/lib/database.types";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z.string().min(2, { message: "El nombre es requerido" }),
  date_of_birth: z
    .string()
    .refine(
      (date) => {
        const minBirthYear = new Date().getFullYear() - 5;

        // Verifica que la fecha sea válida y esté dentro del rango deseado

        const birthDate = new Date(date);

        return birthDate.getFullYear() <= minBirthYear;
      },
      {
        message: "La fecha de nacimiento debe ser al menos hace 5 años ",
      },
    )
    .refine(
      (date) => {
        const maxBirthYear = 1930;
        // Verifica que la fecha sea válida y esté dentro del rango deseado

        const birthDate = new Date(date);

        return birthDate.getFullYear() >= maxBirthYear;
      },
      {
        message: "La fecha de nacimiento no puede ser muy antigua",
      },
    ),

  username: z.string().max(100, { message: "Maximo 100 caracteres" }),
  email: z.string().email({ message: "El correo es invalido" }),
});

export function OnboardingNewEmailUser() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      date_of_birth: "",

      username: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!imgUrl) return toast.error("Debe subir una imagen");
    const { data: profile, error } = await supabase
      .from("profiles")
      .update({
        full_name: data.full_name,
        date_of_birth: data.date_of_birth,
        username: data.username,
        avatar_url: imgUrl,
        email: (await supabase.auth.getUser()).data.user?.email,
        is_onboarded: false,
      })
      .eq("id", (await supabase.auth.getUser()).data.user?.id)

      .select("*");
    if (error) {
      console.log(error);
      if (error.code === "23505") {
        return toast.error("El nombre de usuario ya existe, intenta con otro");
      }
      toast.error("Hubo un error al registrar el atleta", {
        description: error.message,
      });
    }
    if (profile) {
      toast.success("Registro exitoso");
      form.reset();
      router.push("/onboarding");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex justify-center py-4 "
      >
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold">1. Registro personal </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Por favor complete la siguiente información para crear su registro
              de su cuenta personal.
            </p>
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Nombre completo</FormLabel>
                  <FormControl>
                    <Input placeholder="john doe sanchez bolivar" {...field} />
                  </FormControl>
                  <FormDescription>
                    introduzca el nombre de usuario
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Fecha de nacimiento</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>Fecha de nacimiento</FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">nombre de usuario</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="dj_sanchez" {...field} />
                  </FormControl>
                  <FormDescription>
                    nombre de usuario tiene que ser unico
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Correo electronico</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="joelPerez@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>tu correo electronico</FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Imagen de perfil</span>

            <CldUploadWidget
              options={{
                sources: ["local", "url", "unsplash"],
                showUploadMoreButton: false,
                maxFiles: 1,
                maxFileSize: 5242880,
              }}
              uploadPreset="kzfx7bpb"
              onSuccess={(e) => setImgUrl(e.info.url)}
            >
              {({ open, results, show }) => {
                return (
                  <div>
                    <Button type="button" onClick={() => open()}>
                      subir imagen
                    </Button>
                  </div>
                );
              }}
            </CldUploadWidget>
            <img
              src={imgUrl ?? ""}
              hidden={imgUrl === null}
              className="object-cover h-20 w-20"
            />
          </div>
          <Button>Registrar</Button>
        </div>
      </form>
    </Form>
  );
}
