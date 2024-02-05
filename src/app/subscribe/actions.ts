"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ApiRequestPayment, PaymentSchema } from "@/lib/schemaValidations";
import { revalidatePath } from "next/cache";
import { supabaseServerActions } from "@/lib/supabaseServerAction";

export async function payment(values) {
  try {
    const userData = PaymentSchema.parse(values);

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

    return revalidatePath("/");
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
      status: 400,
    };
  }
}
