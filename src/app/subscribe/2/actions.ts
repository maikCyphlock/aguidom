"use server";

import { PaymentSchema } from "@/lib/schemaValidations";

import { supabaseServerActions } from "@/lib/supabaseServerAction";
import { ZodError } from "zod";

export async function sendReferenceOfPayment(_, values: FormData) {
  console.log(values);
  try {
    // using object instead of string to make more extensible
    const reference = {
      reference: values.get("reference")?.toString(),
    };
    const userData = PaymentSchema.parse(reference);

    const { data, error } = await supabaseServerActions
      .from("payments")
      .update({
        reference: userData.reference,
      })
      .eq(
        "profile_id",
        (
          await supabaseServerActions.auth.getUser()
        ).data.user?.id
      )
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
    };
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      return {
        error: error.issues[0].message,
        status: 400,
      };
    }
    console.error(error);
    return {
      error: error.message,
      status: 400,
    };
  }
}
