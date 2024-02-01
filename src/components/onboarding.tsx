"use client";
import { CldUploadWidget } from "next-cloudinary";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { Database } from "@/lib/database.types";
import { Textarea } from "@/components/ui/textarea";
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
    .min(10, { message: "La fecha es requerida" })
    .max(10, {
      message: "La fecha no es valida",
    }),
  contact_number: z
    .string()
    .min(9, { message: "El  numero no es valido, faltan caracteres" })
    .max(15, { message: "El numero no es valido, sobran caracteres" })
    .regex(/^\d+$/, {
      message: "El numero no es valido,tiene letras o caracteres especiales",
    }),
  medical_conditions: z.string().max(400, { message: "Maximo 400 caracteres" }),
});

const supabase = createClientComponentClient<Database>();
export function Onboarding() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      date_of_birth: "",
      contact_number: "",
      medical_conditions: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { data: runners, error } = await supabase
      .from("runners")
      .insert([
        {
          profile_id: (await supabase.auth.getUser()).data.user?.id,
          full_name: data.full_name,
          date_of_birth: data.date_of_birth,
          phone_contact: data.contact_number,
          medical_conditions: data.medical_conditions,
          avatar_url: imgUrl,
        },
      ])
      .select("*");

    if (error) {
      console.log(error);
      toast.error("Hubo un error al registrar el atleta");
    }
    if (runners) {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .update({
          is_onboarded: true,
        })
        .eq("id", (await supabase.auth.getUser()).data.user?.id)
        .single();
      toast.success("Información del atleta registrada correctamente");
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
            <h1 className="text-3xl font-bold">Registro del atleta </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Por favor complete la siguiente información para finalizar su
              registro.
            </p>
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Nombre del atleta</FormLabel>
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
              name="contact_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Numero de contacto</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormDescription>
                    El numero de telefono para contactarte
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="medical_conditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Condiciones medicas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Introduce si posees una condición medica a tener en cuenta"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    El numero de telefono para contactarte
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Imagen del participante</span>

            <CldUploadWidget
              options={{ sources: ["local", "url", "unsplash"] }}
              uploadPreset="kzfx7bpb"
              onSuccess={(e) => setImgUrl(e.info.url)}
            >
              {({ open, results, show }) => {
                return (
                  <div>
                    <Button onClick={() => open()}>subir imagen</Button>
                  </div>
                );
              }}
            </CldUploadWidget>
            <img
              src={imgUrl ?? ""}
              hidden={imgUrl === null}
              className="h-20 w-20"
            />
          </div>
          <Button>Registrar</Button>
        </div>
      </form>
    </Form>
  );
}
