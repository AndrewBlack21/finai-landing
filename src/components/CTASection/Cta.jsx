import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function Cta() {
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-green-500">
        <div className="container mx-auto max-w-4xl text-[#fff] text-center animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Comece Hoje Sua Jornada Financeira
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Junte-se a milhares de pessoas que já transformaram suas finanças
            com IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="lg"
              className="text-lg gap-2 bg-background text-primary hover:bg-background/90"
            >
              <Download className="w-5 h-5" />
              Download em Breve
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Conhecer Recursos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
