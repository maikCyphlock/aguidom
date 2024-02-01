import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();

  const user = await supabase.auth.getUser();
  //check if current route is  "/onboarding"

  if (user.data.user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.data.user?.id)
      .single();
    if (
      data?.is_onboarded === false &&
      req.nextUrl.pathname !== "/onboarding"
    ) {
      return NextResponse.redirect(new URL("/onboarding", req.url));
    }
    // Check if the current URL path is '/onboarding' and if the user is already onboarded
    if (req.nextUrl.pathname === "/onboarding" && data?.is_onboarded === true) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
