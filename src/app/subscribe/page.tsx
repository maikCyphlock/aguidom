"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { payment } from "./actions";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiRequestPayment, PaymentFirstSubscriptionSchema } from "@/lib/schemaValidations";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ApiRequestPayment>({
    resolver: zodResolver(PaymentFirstSubscriptionSchema),
    defaultValues: {
      phone: "",
      dni: "",
    },
  });

  function onSubmit(values: ApiRequestPayment) {
    setIsSubmitting(true);
    console.log(values);
    payment(values)
      .then((e) => {
        if (e.status === 400)
          return toast.error("Hubo un error al registrar la información", {
            description: e.error,
          });
        form.reset();
        toast.success("Informacion agregada exitosamente");
        router.push("/subscribe/2")
      })
      .catch((error) => {
        toast.error("Hubo un error al registrar la información", {
          description: error.message,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
  return (
    <section className="container flex justify-center items-center mx-auto">
      <div className=" w-full max-w-2xl  m-4 flex flex-col gap-4">
        <div className="flex justify-between p-3">
          <span className="text-3xl  flex justify-center items-center bg-[#FCA311] w-10 h-10 rounded-full text-zinc-900">
            1
          </span>
          <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
            2
          </span>
          <span className="text-3xl  flex justify-center items-center bg-[#14213D] w-10 h-10 rounded-full text-zinc-100">
            3
          </span>
        </div>

        <h1 className="text-3xl uppercase tracking-wider text-center font-bold">
          suscribete al club aguidom con nuestra membresía
        </h1>

        <p className="text-lg  font-thin mb-4">
          Únete a la comunidad de Aguidom y mejora tu rendimiento con nuestra
          membresía exclusiva.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Numero de telefono</FormLabel>
                  <FormControl>
                    <Input placeholder="04269421032" {...field} />
                  </FormControl>
                  <FormDescription>
                    introduzca el nombre de usuario
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dni"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Cédula de Identidad</FormLabel>
                  <FormControl>
                    <Input placeholder="300521234" {...field} />
                  </FormControl>
                  <FormDescription>
                    introduzca el nombre de usuario
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button disabled={isSubmitting} type="submit">
              {" "}
              Guardar
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default page;
