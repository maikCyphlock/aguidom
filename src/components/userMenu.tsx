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
        className="  group transition-all duration-200 ease-in-out lg:flex border-[#1c1c1c] bg-[#151515]  justify-center  gap-2 cursor-pointer  items-center p-3 px-2 border rounded-2xl hover:bg-[#1c1c1c] hover:border-[#1c1c1c] tracking-[-0.24] text-[#c6c6c6] "
        asChild
      >
        <a href="/login" className="text-center   ">
          Inicia Sesion
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
