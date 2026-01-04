const publico = [
  {
    name: "Carla Silva",
    role: "Representante",
    comment:
      "Finalmente Consegui organizar minhas finanças! O chatbot é incrivel",
    ratting: 5,
  },
  {
    name: "Rogerio Ferreira",
    role: "Aposentando",
    comment:
      "Aplicativo muito bom para quem nao entende muito disso, intuitivo e pratico",
    ratting: 5,
  },
  {
    name: "Lucas Marques",
    role: "Contador",
    comment: "Claro, Intuitivo e pratico no uso, automatico do jeito certo",
    ratting: 5,
  },
  {
    name: "Danilo Costa ",
    role: "Gerente Varejo",
    comment:
      "Aplicativo muito bom para todo tipo de publico, principalmente para quem deseja organizar suas finanças",
    ratting: 5,
  },
];

import { Card } from "@mui/material";
import { Star } from "lucide-react";

export default function Comentarios() {
  return (
    <>
      <section
        id="publico"
        className="py-20 px-4 bg-gradient-to-b from-[#2bd66b] to-white from-accent/5 to-accent/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">
              O Que Dizem Nossos Usuarios
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais de 50.000 pessoas ja organizam suas finanças com FinAI
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 from-[#2bd66b] to-white from-accent/5 to-accent/10">
            {publico.map((publico, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-x1 transition-all duration-300 hover:scale-105 animate-scale-in border-border "
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(publico.ratting)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{publico.comment}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{publico.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {publico.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
