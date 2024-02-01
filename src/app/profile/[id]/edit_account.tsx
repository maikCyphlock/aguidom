"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
const MIN_CARACTER = 7;

const formSchema = z.object({
  username: z.string().min(MIN_CARACTER, {
    message: `El nombre de usuario debe tener al menos ${MIN_CARACTER} caracteres.`,
  }),
  full_name: z.string(),
  bio: z.string().max(250, { message: "Maximo 250 caracteres" }),
});

export function ProfileForm() {
  const supabase = createClientComponentClient();
  // 1. Define your form.
  const [user, setUser] = useState(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  useEffect(() => {
    supabase
      .from("profiles")
      .select("avatar_url")
      .single()
      .then(({ data, error }) => {
        if (error) {
          throw error;
        }
        setUser(data);
      });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      full_name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    supabase.auth.getUser().then(async (user) => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .update({
            ...values,
            avatar_url: imgUrl || user.data.user?.user_metadata.avatar_url,
          })
          .eq("id", user.data.user?.id)
          .select();

        toast.success("Información actualizada correctamente");
      } catch (error) {
        toast.error("Hubo un error al actualizar la información", {
          description: error.message,
        });
        return console.log(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 my-16 w-1/2"
      >
        <h1 className="text-3xl font-bold">
          Cambia la información de tu perfil
        </h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Nombre de usuario</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>El nombre de usuario</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="miguel hernandez" {...field} />
              </FormControl>
              <FormDescription>
                introduce tu nombre completo (nombre y apellido)
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biografía</FormLabel>
              <FormControl>
                <Textarea placeholder="miguel hernandez" {...field} />
              </FormControl>
              <FormDescription>introduce tu Biografía</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className=" flex gap-2">
          <div>
            <span>foto actual</span>
            {imgUrl ? (
              <img
                src={imgUrl}
                className="rounded-full w-24 h-24 object-cover"
                hidden={user == null}
                alt=""
              />
            ) : (
              <img
                src={user?.avatar_url}
                className="rounded-full w-24 h-24 object-cover"
                hidden={user == null}
                alt=""
              />
            )}
          </div>

          <CldUploadWidget
            options={{ sources: ["local", "url", "unsplash"] }}
            uploadPreset="kzfx7bpb"
            onSuccess={(e) => setImgUrl(e.info.url)}
          >
            {({ open, results, show }) => {
              return (
                <div>
                  <Button
                    onClick={() => open()}
                    type="button"
                    variant="outline"
                  >
                    {" "}
                    Cambiar foto de perfil
                  </Button>
                </div>
              );
            }}
          </CldUploadWidget>
        </div>
        <Button type="submit">Guardar cambios</Button>
      </form>
    </Form>
  );
}
