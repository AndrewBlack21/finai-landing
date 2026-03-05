import {
  TrendingUp,
  PieChart,
  Bell,
  Sparkles,
  MessageCircle,
  Mail,
} from "lucide-react";
import { Card } from "@mui/material";

const features = [
  {
    icon: PieChart,
    title: "Categorização automática",
    description:
      "A IA identifica e organiza cada gasto sozinha. Você não precisa fazer nada — só acompanhar.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Gráficos em tempo real",
    description:
      "Dashboards visuais que mostram exatamente onde seu dinheiro vai, na hora que você precisa ver.",
    highlight: false,
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description:
      "Receba avisos antes de estourar o orçamento — não depois. Sem surpresas no fim do mês.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Dicas personalizadas",
    description:
      "A IA aprende com seus hábitos e sugere onde você pode economizar de forma prática e realista.",
    highlight: true,
  },
  {
    icon: MessageCircle,
    title: "ChatBot no WhatsApp",
    description:
      "Pergunte tudo sobre suas finanças direto pelo WhatsApp. 24h por dia, sem precisar abrir o app.",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Relatórios mensais",
    description:
      "Resumo completo do mês direto no seu e-mail — automático, detalhado e fácil de entender.",
    highlight: false,
  },
];

export default function Function() {
  return (
    <section id="features" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1ea360",
              backgroundColor: "rgba(30,163,96,0.1)",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "16px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Funcionalidades
          </span>
          <h2
            style={{
              fontFamily: "'Syne', 'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              color: "#1a2e22",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Tudo que você precisa para{" "}
            <span style={{ color: "#1ea360" }}>dominar suas finanças</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "#4a6358",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Ferramentas pensadas para quem tem vida ocupada e quer resultado de
            verdade.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  border: feature.highlight
                    ? "1.5px solid rgba(30,163,96,0.3)"
                    : "1.5px solid #eef2f0",
                  background: feature.highlight
                    ? "linear-gradient(135deg, rgba(30,163,96,0.06), rgba(42,214,106,0.03))"
                    : "#fff",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(30,163,96,0.12)";
                  e.currentTarget.style.borderColor = "rgba(30,163,96,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = feature.highlight
                    ? "rgba(30,163,96,0.3)"
                    : "#eef2f0";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 4px 12px rgba(42,214,106,0.3)",
                  }}
                >
                  <Icon size={24} color="#fff" strokeWidth={2} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne', 'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1a2e22",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.925rem",
                    color: "#4a6358",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
