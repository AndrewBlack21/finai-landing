import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    name: "Carla Mendes",
    role: "Designer Freelancer, 26 anos",
    comment:
      "Finalmente entendi para onde ia minha grana todo mês. O chatbot é incrível — pergunto tudo pelo WhatsApp mesmo.",
    rating: 5,
    initial: "C",
  },
  {
    name: "Rafael Souza",
    role: "Desenvolvedor, 28 anos",
    comment:
      "Comecei a usar achando que era mais um app. Errei. Em 2 meses já tinha juntado a reserva de emergência que nunca consegui fazer.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Letícia Faria",
    role: "Estudante de medicina, 23 anos",
    comment:
      "Nunca tive paciência pra planilha. O FinAI categoriza tudo sozinho e me manda alerta quando tô gastando demais em delivery.",
    rating: 5,
    initial: "L",
  },
  {
    name: "Bruno Castilho",
    role: "Analista de marketing, 31 anos",
    comment:
      "O diferencial é a IA mesmo. Ela me avisou que eu poderia ter pago menos juros no cartão e me mostrou como. Salvou R$ 400.",
    rating: 5,
    initial: "B",
  },
];

export default function Comentarios() {
  return (
    <section
      id="depoimentos"
      style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, #0d4a23 0%, #1a3a28 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(42,214,106,0.06)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6dffaa",
              backgroundColor: "rgba(42,214,106,0.12)",
              border: "1px solid rgba(42,214,106,0.25)",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "16px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Depoimentos reais
          </span>
          <h2
            style={{
              fontFamily: "'Syne', 'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            O que dizem quem já usa
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            +50.000 pessoas já organizaram suas finanças com o FinAI
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              style={{
                padding: "28px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(42,214,106,0.08)";
                e.currentTarget.style.borderColor = "rgba(42,214,106,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Quote icon */}
              <Quote
                size={20}
                color="rgba(42,214,106,0.5)"
                style={{ marginBottom: "16px" }}
              />

              {/* Stars - FILLED */}
              <div
                style={{ display: "flex", gap: "4px", marginBottom: "16px" }}
              >
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#2ad66a" color="#2ad66a" />
                ))}
              </div>

              {/* Comment */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                  fontStyle: "italic",
                }}
              >
                "{dep.comment}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {dep.initial}
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#fff",
                    }}
                  >
                    {dep.name}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {dep.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
