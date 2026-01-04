import { Smartphone, Download } from "lucide-react";
import { Button } from "../ui/button";

const appMockup = "./src/assets/app-mockup.jpg";

export default function MobileSection() {
  return (
    <>
      {/* Container da pagina principal */}
      <seaction className="py-20 px-4">
        {/* Container onde fica todo o componente para responsividade mobile*/}
        <div className="container mx-auto">
          {/* definindo o grid e gap e todos componentes ficaram no center */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Todo o conteudo que ficara escrito a imagem nao fica aqui pois ela ira para a direita */}
            <div className="animate-fade-in">
              {/* Cada texto ira ser divido por DIV esse conteudo fica fora da area principal*/}
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-semibold">Multiplataforma</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Disponivel para iOs, Android e Web
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Leve o FinAi no bolso para onde voce for. Interface intuitiva,
                sincronização em tempo real e acesso offline aos seus dados mais
                importante
              </p>
              {/* Criamos um mini container onde colocaremos em colum cada texto */}
              <div className="space-y-4 mb-8">
                {/* Divido por DIV 1*/}
                <div className="flex items-center gap-3">
                  <div className="bg-accent w-2 h-2 rounded-full"></div>
                  <span className="text-foreground">
                    Sincronização automatica na nuvem
                  </span>
                </div>
                {/* DIV 2 */}
                <div className="flex items-center gap-3">
                  <div className="bg-accent w-2 h-2 rounded-full"></div>
                  <span className="text-foreground">
                    Modo offline funcional
                  </span>
                </div>
                {/* DIV 3 */}
                <div className="flex items-center gap-3">
                  <div className="bg-accent w-2 h-2 rounded-full"></div>
                  <span className="text-foreground">
                    Notificações push inteligentes
                  </span>
                </div>
                {/* DIV 4 */}
                <div className="flex items-center gap-3">
                  <div className="bg-accent w-2 h-2 rounded-full"></div>
                  <span className="text-foreground">Leve e rapido</span>
                </div>
              </div>
              {/* Conteudo fora do conteudo do texto para alocar o botão de download */}
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Em breve
                </Button>
              </div>
            </div>
            {/* DIV fora do conteudo para estar colocando a imagem a esquerda */}
            <div className="flex justify-center animate-scale-in">
              <img
                src={appMockup}
                alt="FinAI Mobile Screen"
                className="w-full max-w-2xl"
              />
            </div>
          </div>
        </div>
      </seaction>
    </>
  );
}
