import {
  TrendingUp,
  PieChart,
  Bell,
  Sparkles,
  MessageCircle,
  Mail,
  Smartphone,
  BarChart3,
  Target,
  Shield,
  Star,
  Download,
  ChevronRight,
} from "lucide-react";
import { Card } from "@mui/material";

const features = [
  {
    icon: PieChart,
    title: "Categorização Inteligente",
    description:
      "Gastos organizados automaticamente com IA para você ver onde seu dinheiro realmente vai.",
  },
  {
    icon: TrendingUp,
    title: "Gráficos em Tempo Real",
    description:
      "Acompanhe sua economia com dashboards interativos e insights instantâneos.",
  },
  {
    icon: Bell,
    title: "Alertas de Metas",
    description:
      "Receba notificações quando estiver perto de atingir ou ultrapassar seu orçamento.",
  },
  {
    icon: Sparkles,
    title: "Dicas Personalizadas",
    description:
      "IA aprende seus hábitos e sugere formas inteligentes de economizar mais.",
  },
  {
    icon: MessageCircle,
    title: "ChatBot WhatsApp",
    description:
      "Consulte saldo, gastos e tire dúvidas direto pelo WhatsApp, 24/7.",
  },
  {
    icon: Mail,
    title: "Relatórios Automáticos",
    description: "Receba resumos mensais detalhados no seu e-mail sem esforço.",
  },
];

export default function Function() {
  return (
    <>
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-[#388e3c] mb-4">
              Funcionalidades Poderosas
            </h2>
            <p className="text-lg text-muted-foreground text-[#388e3c]">
              Tudo que você precisa para dominar suas finanças em um só lugar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#388e3c]">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-[#388e3c] hover:shadow-x1 transition-all duration-300 hover:scale-105 animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-accent text-[#2bd66b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#388e3c] mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-[#388e3c] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
