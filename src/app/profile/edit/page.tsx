"use client";
import { ProfileForm } from "../[id]/edit_account";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  return (
    <section className="container mx-auto p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-xl">
          Configuración de perfil
        </h1>
      </div>
      <div className="grid place-items-center">
        <ProfileForm />
      </div>
    </section>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export default page;
