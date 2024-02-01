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
  date_of_birth: z.string().refine((date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
      return false;
    }

    const birthYear = parseInt(date.split("-")[0]);
    const currentYear = new Date().getFullYear();

    return birthYear >= 1910 && currentYear - birthYear >= 3;
  }, "La fecha de nacimiento no es valida"),
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
export function page() {
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
    console.log({ data });
    registerRunner(data, imgUrl);
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
              Agrega otro atleta
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
                    <Input className="fill-white" type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    la fecha de nacimiento no puede ser mayor a 100 años y
                    tampoco puede ser menor de 4 años
                  </FormDescription>
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
              options={{ sources: ["local", "url", "unsplash"], maxFiles: 1 }}
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
              className="h-20 w-20 object-cover"
            />
          </div>
          <Button>Registrar</Button>
        </div>
      </form>
    </Form>
  );
}

export default page;
async function registerRunner(data, imgUrl) {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  const runnerData = {
    profile_id: userId,
    full_name: data.full_name,
    date_of_birth: data.date_of_birth,
    phone_contact: data.contact_number,
    medical_conditions: data.medical_conditions,
    avatar_url: imgUrl,
  };

  const { data: runners, error } = await supabase
    .from("runners")
    .insert([runnerData])
    .select("*");

  if (error) {
    console.log(error);
    toast.error("Hubo un error al registrar el atleta");
  } else if (runners) {
    await updateProfile(userId);
    toast.success("Información del atleta registrada correctamente");
  }
}

async function updateProfile(userId) {
  const { error } = await supabase
    .from("profiles")
    .update({
      is_onboarded: true,
    })
    .eq("id", userId)
    .single();

  if (error) {
    console.log(error);
    toast.error("Hubo un error al actualizar el perfil");
  }
}
