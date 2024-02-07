"use server";

import { PaymentFirstSubscriptionSchema } from "@/lib/schemaValidations";

import { supabaseServerActions } from "@/lib/supabaseServerAction";
import { ZodError } from "zod";

export async function payment(values) {
  try {
    const userData = PaymentFirstSubscriptionSchema.parse(values);

    const { data, error } = await supabaseServerActions
      .from("payments")
      .insert([
        {
          phone_number: userData.phone,
          dni: userData.dni,
        },
      ])
      .select("*")
      .single()
      .throwOnError();
    console.log(data);
    if (error) {
      return {
        error: error.message,
        status: 400,
      };
    }
    return {
      status: 200,
      message: "Se ha registrado exitosamente",
      id: data.id,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        error: error.issues[0].message,
        status: 400,
      };
    }
    console.log(error);
    return {
      error: error.message,
      status: 400,
    };
  }
}
