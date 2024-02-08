import { Button } from "@/components/ui/button";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import { getProfileById, getRunnersByProfileId, getPaymentByProfileId } from "@/queries/db";
import { EditServerAction, RemoveServerAction } from "./actions";
import { FormSubmitBtn } from "../../../components/FormSubmitBtn";
import FormClient from "../../../components/FormClient";

export default async function Account({ id }: { id: string }) {
  const profiles = await getProfileById(id);

  const runners = await getRunnersByProfileId(id);
  const payments = await getPaymentByProfileId(id);
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <Button
            className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-800  font-medium text-zinc-100 hover:text-zinc-800 transition-all fill-zinc-100 hover:fill-zinc-800 [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none"
            size="icon"
          >
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
            <Button
              asChild
              size="sm"
              className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-800 px-6 font-medium text-zinc-100 hover:text-zinc-800 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none self-end"
            >
              <a href="/profile/edit">Editar</a>
            </Button>
            <Button
              asChild
              size="sm"
              className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md border border-zinc-200 bg-zinc-500 px-6 font-medium text-zinc-100 hover:text-zinc-800 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none"
            >
              <a href="/subscribe">Pagar la membresía</a>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4">
              <img
                src={profiles?.avatar_url}
                className="object-cover h-24 w-24 rounded-full"
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
            <CardTitle>Pagos</CardTitle>
            <CardDescription>
              lista de pagos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {payments &&
              payments?.map((payment) => (
                <div
                  key={payment?.id}
                  className="flex gap-4 border rounded-sm p-4 w-1/2"
                >

                  <div className="flex  gap-4 basis-full justify-between">
                    <span>nro de referencia: {payment?.reference}</span>

                    <span className=" text-pretty">fecha de pago: {new Intl.DateTimeFormat('es-ES').format(new Date(payment?.created_at))}</span>

                    <span className=" text-pretty">{
                      payment?.payment_is_verified === 'verified' ? <div className="flex gap-2 items-center text-green-500"><small>verificado</small><CheckCircleIcon className=" fill-green-500" /></div> : payment?.payment_is_verified === 'pending' ? <div className="flex gap-2 items-center text-orange-500"><small>pendiente</small><ClockCountdownIcon className=" fill-orange-500" /> </div> : <div className="flex text-red-500 gap-2 items-center"> <small>Error al verificar</small><WarningCircle className=" fill-red-500" /> </div>
                    }</span>
                  </div>
                </div>
              ))
            }
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Atletas registrado</CardTitle>
            <CardDescription>
              lista de atletas registrado a tu perfil
            </CardDescription>
            <Button
              asChild
              size="sm"
              className="cursor-pointer transition-all bg-zinc-500 text-white  rounded-lgborder-zinc-600 border-b-[2px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px] hover:text-zinc-900 active:border-b-[2px] active:brightness-90 active:translate-y-[2px] self-end"
            >
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
                        <div className="flex gap-2">
                          <EditDialog id={runner.id} />
                          <RemoveDialog id={runner.id} />
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

export function EditDialog({ id }) {
  const EditServerActionWithId = EditServerAction.bind(null, id);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <PecilSimpleIcon className="h-4 w-4 fill-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={EditServerActionWithId}>
          <DialogHeader>
            <DialogTitle>Editar datos del corredor</DialogTitle>
            <DialogDescription>
              Modifica los datos de tu corredor a continuación
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="full_name" className="text-right">
                Nombre
              </Label>

              <Input
                name="full_name"
                placeholder="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="medical_conditions" className="text-right">
                Condición medica
              </Label>
              <Input
                name="medical_conditions"
                placeholder="diabetes"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export function RemoveDialog({ id }) {
  const RemoveServerActionWithId = RemoveServerAction.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" color="red" variant="outline">
          <TrashIcon className="h-4 w-4 fill-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormClient action={RemoveServerActionWithId}>
          <DialogHeader>
            <DialogTitle>Remover atleta</DialogTitle>
            <DialogDescription>
              Atención usted esta a punto de eliminar un atleta. <br />
              <span className="text-red-500">
                escribe "eliminar" para confirmar
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                name="remove"
                id="remove"
                required
                placeholder="eliminar"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>
            <FormSubmitBtn />
          </DialogFooter>
        </FormClient>
      </DialogContent>
    </Dialog>
  );
}

export function PecilSimpleIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 256 256">
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
    </svg>
  );
}
export function TrashIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
    </svg>
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

function CheckCircleIcon(props) {
  return (
    <svg  {...props} xmlns="http://www.w3.org/2000/svg" width="24"
      height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>

  );

}

function ClockCountdownIcon(props) {
  return (
    <svg {...props} width="24"
      height="24" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256"><path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"></path></svg>

  );

}
function WarningCircle(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path></svg>

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
