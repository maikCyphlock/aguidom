"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ApiRequestPayment, PaymentSchema } from "@/lib/schemaValidations";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const supabase = createServerComponentClient({
  cookies,
});

export async function payment(values) {
  try {
    const userData = PaymentSchema.parse(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { data, error } = await supabase
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
