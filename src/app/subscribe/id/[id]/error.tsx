"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center min-h-screen text-white font-bold rounded-t px-4 py-2">
      <Card>
        <CardHeader>
          <CardTitle>Ups algo salio mal</CardTitle>
          <CardDescription>
            tranquilo no es tu culpa, el mensaje del error es:{" "}
            <span className="text-red-300">{error.message}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={reset}>Intenta de nuevo</Button>
        </CardContent>
      </Card>
    </div>
  );
}
