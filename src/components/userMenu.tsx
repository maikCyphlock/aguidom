import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
const supabase = createServerComponentClient({
  cookies,
});
import UserLogoutBtn from "./userLogoutBtn";
async function UserMenu() {
  const CurrentUser = await supabase.auth.getUser();

  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", CurrentUser.data.user?.id)
    .single();

  if (!profiles || error) {
    return (
      <Button
        className="overflow-hidden rounded-3xl relative w-32 p-2 h-10 bg-black text-white border-none  text-lg font-bold cursor-pointer  z-10 group"
        asChild
      >
        <a href="/login" className="text-center   ">
          Inicia sesión
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1.5 left-4 z-10">
            bienvenido
          </span>
        </a>
      </Button>
    );
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src={profiles?.avatar_url}
            alt="Avatar"
            className="rounded-full object-cover w-6 h-6 lg:w-11 lg:h-11 border border-white "
            referrerPolicy="no-referrer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{profiles?.full_name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href={`/profile/${profiles.id}`}>perfíl</a>
          </DropdownMenuItem>
          <DropdownMenuItem>Membresía</DropdownMenuItem>

          <UserLogoutBtn />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
