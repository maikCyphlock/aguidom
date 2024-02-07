"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
export const FormSubmitBtn = ({ className, title = "Eliminar" }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={cn(
        "text-red-200  active:scale-95 transition-all duration-100 hover:bg-red-950 bg-red-800",
        className,
      )}
    >
      {title}
    </Button>
  );
};
