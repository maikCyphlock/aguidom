import { Button } from "@/components/ui/button";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import { getProfileById, getRunnersByProfileId } from "@/queries/db";

export default async function Account({ id }: { id: string }) {
  const profiles = await getProfileById(id);

  const runners = await getRunnersByProfileId(id);

  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">
            Configuración de perfil
          </h1>
        </div>
        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <CardTitle className="basis-full">Mi perfil</CardTitle>
            <Button asChild size="sm" className=" self-end">
              <a href="/profile/edit">Editar</a>
            </Button>
            <Button asChild size="sm" className=" self-end">
              <a href="/subscribe">Pagar la membresía</a>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4">
              <img
                src={profiles?.avatar_url}
                className="h-24 w-24 rounded-full"
                alt=""
              />
              <div className="flex flex-col gap-4">
                <span>{profiles?.full_name}</span>
                <span className="w-1/3 text-pretty">{profiles?.bio}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage your notification preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Atletas registrado</CardTitle>
            <CardDescription>
              lista de atletas registrado a tu perfil
            </CardDescription>
            <Button asChild size="sm" className=" self-end">
              <a href="/profile/runner">Agregar</a>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                {runners &&
                  runners?.map((runner) => (
                    <div
                      key={runner.id}
                      className="flex gap-4 border rounded-sm p-4"
                    >
                      <img
                        src={runner?.avatar_url}
                        className="h-24 w-24 rounded-full object-cover border"
                        alt=""
                      />
                      <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                          {" "}
                          <span>{runner?.full_name}</span>
                          <span>
                            Edad: {calculateAge(runner?.date_of_birth)}
                          </span>
                          <span>condición medica:</span>
                          {runner?.medical_conditions}
                        </div>
                        <div className="flex flex-col gap-2">
                          {" "}
                          <span>fecha de inscripción:</span>
                          {new Date(runner?.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
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

const calculateAge = (birthdateTimestamp: number): number => {
  const birthdate = new Date(birthdateTimestamp);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
};
