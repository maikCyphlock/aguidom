"use client";
import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
function UserLogoutBtn() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    router.refresh();
  };
  return (
    <DropdownMenuItem onClick={handleLogOut} className="text-red-300">
      cerrar sesión
    </DropdownMenuItem>
  );
}

export default UserLogoutBtn;
