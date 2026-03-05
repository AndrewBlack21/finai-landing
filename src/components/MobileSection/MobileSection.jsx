import { Smartphone, Cloud, WifiOff, Bell, Zap } from "lucide-react";

const features = [
  { icon: Cloud, text: "Sincronização automática na nuvem" },
  { icon: WifiOff, text: "Modo offline funcional" },
  { icon: Bell, text: "Notificações push inteligentes" },
  { icon: Zap, text: "Leve e rápido" },
];

// Mock visual do celular — substitui a imagem quebrada
function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Brilho ao fundo */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,214,106,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Corpo do celular */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: 260,
          borderRadius: 40,
          background: "#0d1a13",
          border: "2px solid rgba(45,214,106,0.25)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(45,214,106,0.1)",
          overflow: "hidden",
          padding: "12px 12px 24px",
        }}
      >
        {/* Notch */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 80,
              height: 6,
              borderRadius: 99,
              background: "#1a2e20",
            }}
          />
        </div>

        {/* Tela do app */}
        <div style={{ background: "#111d15", borderRadius: 28, padding: 20 }}>
          {/* Header do app */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>
                Saldo total
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>
                R$ 4.832,90
              </div>
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              A
            </div>
          </div>

          {/* Gráfico simulado */}
          <div
            style={{
              background: "rgba(45,214,106,0.07)",
              borderRadius: 16,
              padding: "12px 14px",
              marginBottom: 16,
              border: "1px solid rgba(45,214,106,0.12)",
            }}
          >
            <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 10 }}>
              Gastos este mês
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 6,
                height: 50,
              }}
            >
              {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: 4,
                    background:
                      i === 5
                        ? "linear-gradient(180deg, #2ad66a, #1ea360)"
                        : "rgba(45,214,106,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Transações recentes */}
          {[
            {
              emoji: "🛒",
              label: "Mercado",
              val: "-R$ 127,50",
              color: "#ef4444",
            },
            {
              emoji: "💼",
              label: "Salário",
              val: "+R$ 3.200",
              color: "#2ad66a",
            },
            {
              emoji: "🎬",
              label: "Netflix",
              val: "-R$ 39,90",
              color: "#ef4444",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom:
                  i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  {t.emoji}
                </div>
                <span style={{ fontSize: 12, color: "#d1d5db" }}>
                  {t.label}
                </span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: t.color }}>
                {t.val}
              </span>
            </div>
          ))}
        </div>

        {/* Nav bar inferior */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: 16,
            paddingBottom: 4,
          }}
        >
          {["🏠", "📊", "💬", "👤"].map((icon, i) => (
            <div key={i} style={{ fontSize: 18, opacity: i === 0 ? 1 : 0.35 }}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MobileSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #fff 0%, #f0faf4 100%)",
        padding: "96px 16px",
      }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(30,163,96,0.1)",
                color: "#1ea360",
                padding: "6px 16px",
                borderRadius: 99,
                marginBottom: 24,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Smartphone size={15} />
              Multiplataforma
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#0d4a23",
                lineHeight: 1.15,
                marginBottom: 20,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Disponível para{" "}
              <span style={{ color: "#1ea360" }}>iOS, Android</span> e Web
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "#4b5563",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Leve o FinAI no bolso para onde você for. Interface intuitiva,
              sincronização em tempo real e acesso offline aos seus dados mais
              importantes.
            </p>

            {/* Lista de features */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 40,
              }}
            >
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      flexShrink: 0,
                      background: "rgba(30,163,96,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#1ea360" />
                  </div>
                  <span
                    style={{ fontSize: 15, color: "#374151", fontWeight: 500 }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href="#waitlist"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(30,163,96,0.35)",
                }}
              >
                <Smartphone size={18} />
                Entrar na lista de espera
              </a>
              <a
                href="#features"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "2px solid rgba(30,163,96,0.3)",
                  color: "#1ea360",
                  padding: "14px 28px",
                  borderRadius: 14,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Ver funcionalidades
              </a>
            </div>
          </div>

          {/* Mockup do celular */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
