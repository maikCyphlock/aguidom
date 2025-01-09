import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="lg:pt-24 pb-16 ">
     
      <div className="container  mx-auto px-4">
        
   
        <div className="text-center mb-8">
          <p className="text-sm  uppercase tracking-wider mb-4">LOGRA TUS OBJETIVOS</p>
          <h1 className="text-6xl md:text-8xl  font-bold mb-8">
            AGUIDOM
          </h1>
        </div>

        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img 
            src="/aguidom.jpg"
            alt="Fitness training"
            className="w-full  h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20">
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-4xl font-bold mb-4">
                DENTRO<br />Y FUERA.
              </h2>
              <p className="max-w-md text-white/90 mb-4">
              Estamos dedicados a ayudarte a alcanzar tus metas de fitness y vivir tu mejor vida
              </p>
              <div className="flex items-center justify-between">
                <Button variant="outline" className="bg-primary hover:bg-background">
                ÚNETE YA
                </Button>
            
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="mb-8 text-primary">
            <svg className="w-8 h-8 mx-auto " viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-balance mb-4">
          EL FITNESS DE CALIDAD PARA TODOS.
          </h3>
          <p className="text-zinc-500 mb-8">
          Tanto si eres un atleta experimentado como si acabas de empezar, tenemos una gran variedad de equipos y clases que se adaptan a tus necesidades. Nuestros profesionales están aquí para guiarte en cada paso del camino y ofrecerte una experiencia de entrenamiento completa.
          </p>
          <Button className="bg-primary hover:bg-background">
          ÚNETE YA
          </Button>
        </div>
      </div>
    </section>
  );
};