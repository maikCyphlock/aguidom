/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cRiFRj3XPa2
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CheckCircle from "./icons/CheckCircle";
export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Inscribete a nuestro club
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Únete a nuestro club de atletismo aguidom.
          </p>
        </div>
        <div className="grid place-items-center gap-6 mt-12 md:gap-12 ">
          <Card className="flex group  transition-all  ease-in duration-200 hover:scale-105 hover:border-green-300  flex-col justify-start items-center p-12 space-y-4  dark:bg-zinc-900">
            <h3 className="text-2xl font-bold">VIP</h3>
            <p className="text-xl font-semibold text-zinc-500">
              <span className="text-4xl text-zinc-200">$10</span>/ mes
            </p>
            <ul className="text-sm text-zinc-500 group-hover:text-green-200 space-y-2">
              <li className="flex gap-2 items-center">
                <CheckCircle /> Entrenamientos en el estadio
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle /> Participaciones en eventos
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle /> Chequeo de fisioterapeuta
              </li>
            </ul>
            <Button className="mt-auto rounded-xl hover:bg-green-300 active:bg-green-400">
              Inscribirse
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
