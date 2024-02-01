import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";
const supabase = createServerComponentClient<Database>({ cookies });
export async function getProfileById(id: string) {
  try {
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    return profile;
  } catch (error) {
    console.error("Error getting profile: ", error);
    throw error;
  }
}

export async function getRunnersByProfileId(id: string) {
  try {
    const { data: runners } = await supabase
      .from("runners")
      .select("*")
      .eq("profile_id", id);
    return runners;
  } catch (error) {
    console.error("Error getting runners: ", error);
    throw error;
  }
}
