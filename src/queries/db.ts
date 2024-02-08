import { supabaseServerActions } from "@/lib/supabaseServerAction";
export async function getProfileById(id: string) {
  try {
    const { data: profile } = await supabaseServerActions
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
export async function getPaymentByProfileId(id: string) {
  try {
    const { data: profile } = await supabaseServerActions
      .from("payments")
      .select("*")
      .eq("profile_id", id)
      .select("*");
    return profile;
  } catch (error) {
    console.error("Error getting profile: ", error);
    throw error;
  }
}
export async function getRunnersByProfileId(id: string) {
  try {
    const { data: runners } = await supabaseServerActions
      .from("runners")
      .select("*")
      .eq("profile_id", id);
    return runners;
  } catch (error) {
    console.error("Error getting runners: ", error);
    throw error;
  }
}
