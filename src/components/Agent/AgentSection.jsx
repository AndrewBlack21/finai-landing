import {
  Sparkles,
  Shield,
  MessageCircle,
  Target,
  ChevronRight,
} from "lucide-react";
// import { Button } from "@mui/material";
import { Button } from "../ui/button";

import FinAI from "../../assets/imagens/FinAI.png";

export default function AgentSection() {
  return (
    <>
      <section
        id="ai-agent"
        className="py-20 px-4 bg-gradient-to-b from-[#edfbf2] to-white from-accent/5 to-accent/10"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2 animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                <img
                  src={FinAI}
                  alt="FinAi Assistente"
                  className="relative w-80 h-80 rounded-full shadow-2xl"
                />
              </div>
            </div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4">
                  <span className="text-sm font-semibold">Powered by Ai</span>
                </Sparkles>
              </div>
              <h2 className="text-4xl font-bold text-primaray mb-6">
                Conheça Seu Assistente Financeiro Pessoal
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O{" "}
                <span className="font-semibold text-primary">
                  FinAI Assistente
                </span>
                está disponivel em breve via WhatsApp para responder suas
                duvidas. mostrar suas duvidas, mostrar seus gastos e dar dicas
                personalizadas de economia. É como ter um consultor financeiro
                no bolso.
              </p>
              {/*  */}
              <div className="space-y-4 mb-8">
                {/*  */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  {/*  */}
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Conversas Naturais
                    </h4>
                    <p className="text-muted-foreground">
                      Pergunte em linguagem natural, sem comandos complicados
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 roundend-lg mt-1">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  {/*  */}
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Dicas Inteligentes
                    </h4>
                    <p className="text-muted-foreground">
                      Receba sugestões baseadas no seu historico e objetivos
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      100% Seguro
                    </h4>
                    <p className="text-muted-foreground">
                      Dados criptografados e protegidos por segurança bancaria
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="cta" size="lg" className="gap-2">
                Cadastra-se no Beta
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
