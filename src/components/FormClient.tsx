"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

function FormClient({ children, action, className }) {
  const [state, Action] = useFormState(action, null);
  console.log({ state, Action });
  useEffect(() => {
    if (state === null) return;
    if (state?.error) {
      toast.error(state.error);
      console.log({ state });
    }
    if (state?.success || state.status === 200) {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <form className={className} action={Action}>
      {children}
    </form>
  );
}

export default FormClient;
