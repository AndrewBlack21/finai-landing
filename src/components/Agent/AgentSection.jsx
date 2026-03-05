import {
  Sparkles,
  Shield,
  MessageCircle,
  Target,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";

export default function AgentSection() {
  return (
    <section
      id="ai-agent"
      style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, #f0f8f3 0%, #e8f5ed 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Visual lado direito */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              order: 2,
            }}
          >
            <div style={{ position: "relative" }}>
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-40px",
                  background:
                    "radial-gradient(circle, rgba(42,214,106,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }}
              />

              {/* Card mockup do assistente */}
              <div
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(135deg, #0d4a23 0%, #136c34 100%)",
                  borderRadius: "28px",
                  padding: "32px",
                  width: "300px",
                  boxShadow:
                    "0 24px 80px rgba(13,74,35,0.35), 0 0 0 1px rgba(42,214,106,0.2)",
                }}
              >
                {/* Header do chat */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(42,214,106,0.4)",
                    }}
                  >
                    <Zap size={20} color="#fff" />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      FinAI Assistente
                    </p>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "#2ad66a",
                          boxShadow: "0 0 6px #2ad66a",
                        }}
                      />
                      <span
                        style={{
                          color: "#6dffaa",
                          fontSize: "0.72rem",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        Online agora
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mensagens */}
                {[
                  {
                    user: true,
                    text: "Posso fazer uma viagem esse mês?",
                  },
                  {
                    user: false,
                    text: "Você tem R$ 620 disponíveis. Recomendo um orçamento de até R$ 500 para manter sua reserva.",
                  },
                ].map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: msg.user ? "flex-end" : "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "10px 14px",
                        borderRadius: msg.user
                          ? "16px 16px 4px 16px"
                          : "16px 16px 16px 4px",
                        background: msg.user
                          ? "linear-gradient(135deg, #1ea360, #2ad66a)"
                          : "rgba(255,255,255,0.1)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.5,
                        border: msg.user
                          ? "none"
                          : "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "rgba(42,214,106,0.5)",
                        animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Texto lado esquerdo */}
          <div style={{ order: 1 }}>
            {/* Eyebrow */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1ea360",
                backgroundColor: "rgba(30,163,96,0.1)",
                padding: "6px 16px",
                borderRadius: "100px",
                marginBottom: "20px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Sparkles size={12} />
              Assistente com IA
            </span>

            <h2
              style={{
                fontFamily: "'Syne', 'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                letterSpacing: "-0.03em",
                color: "#1a2e22",
                margin: "0 0 16px",
                lineHeight: 1.15,
              }}
            >
              Seu consultor financeiro
              <br />
              <span style={{ color: "#1ea360" }}>no WhatsApp</span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "#4a6358",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}
            >
              Pergunte qualquer coisa sobre seu dinheiro — gastos, metas,
              parcelas, reserva de emergência. O FinAI responde em segundos, com
              base nos seus dados reais, sem julgamento e sem enrolação.
            </p>

            {/* Features list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "36px",
              }}
            >
              {[
                {
                  icon: MessageCircle,
                  title: "Linguagem natural",
                  desc: 'Fale como você fala. "Quanto gastei em Uber esse mês?" funciona perfeitamente.',
                },
                {
                  icon: Target,
                  title: "Baseado nos seus dados",
                  desc: "As respostas são personalizadas para sua situação — não conselhos genéricos da internet.",
                },
                {
                  icon: Shield,
                  title: "100% seguro",
                  desc: "Criptografia bancária protege todos os seus dados. Sempre.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(30,163,96,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#1ea360" />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#1a2e22",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#4a6358",
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(42,214,106,0.35)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(42,214,106,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(42,214,106,0.35)";
              }}
            >
              Cadastre-se no Beta
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
