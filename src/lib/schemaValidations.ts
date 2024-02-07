import * as z from "zod";

export const PaymentFirstSubscriptionSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "El número de celular es requerido" })
    .max(11, {
      message: "El número de celular no es valido",
    }),
  dni: z.string().min(7, { message: "La cédula es requerida" }).max(8, {
    message: "La cédula no es valida",
  }),
});

export const PaymentSchema = z.object({
  reference: z
    .string()
    .min(4, { message: "El número de referencia es requerido" }),
});
export const RunnerEditSchema = z.object({
  id: z.string().min(1, { message: "El id es requerido" }),
  full_name: z
    .string()
    .min(2, { message: "El nombre es requerido" })
    .optional(),
  date_of_birth: z
    .string()
    .min(10, { message: "La fecha es requerida" })
    .max(10, {
      message: "La fecha no es valida",
    })
    .optional(),
  contact_number: z
    .string()
    .min(9, { message: "El  numero no es valido, faltan caracteres" })
    .max(15, { message: "El numero no es valido, sobran caracteres" })
    .regex(/^\d+$/, {
      message: "El numero no es valido,tiene letras o caracteres especiales",
    })
    .optional(),
  medical_conditions: z
    .string()
    .max(400, { message: "Maximo 400 caracteres" })
    .optional(),
});

export const RemoveRunnerSchema = z.object({
  id: z.string().min(1, { message: "El id es requerido" }),
  remove: z.literal("eliminar", {
    errorMap: () => ({ message: "haz escrito mal la palabra 'eliminar'" }),
  }),
});

export type ApiRequestPayment = z.infer<typeof PaymentFirstSubscriptionSchema>;
export type ApiRequestRunnerEdit = z.infer<typeof RunnerEditSchema>;
