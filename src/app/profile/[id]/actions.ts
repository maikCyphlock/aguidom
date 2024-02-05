"use server";
import { supabaseServerActions } from "@/lib/supabaseServerAction";
import { RunnerEditSchema, RemoveRunnerSchema } from "@/lib/schemaValidations";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";

export const EditServerAction = async (id, props: FormData) => {
  try {
    // const runner = RunnerEditSchema.parse(props);
    const runner = {
      full_name: props.get("full_name")?.toString(),
      medical_conditions: props.get("medical_conditions")?.toString(),
    };

    const { data, error } = await supabaseServerActions
      .from("runners")
      .update({
        medical_conditions: runner.medical_conditions,
        full_name: runner.full_name,
      })
      .eq("id", id)
      .select("*");

    if (error) {
      console.log(error);
      return {
        error: error.message,
        status: 400,
      };
    }
    return revalidatePath("/profile/[id]");
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
      status: 400,
    };
  }
};

export const RemoveServerAction = async (id, props, formData) => {
  try {
    const form = {
      id: id,
      remove: formData.get("remove")?.toString(),
    };
    const deleteLiteral = RemoveRunnerSchema.parse(form);

    const { data, error } = await supabaseServerActions
      .from("runners")
      .delete()
      .eq("id", deleteLiteral.id)

      .throwOnError();

    if (error) {
      console.log(error);
      return {
        error: error.message,
        status: 400,
      };
    }
    return revalidatePath("/profile/[id]");
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return {
        error: error.issues[0].message,
        status: 400,
      };
    }
    return {
      error: error.message,
      status: 400,
    };
  }
};
