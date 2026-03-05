import { TrendingUp } from "lucide-react";

export default function Footer() {
  const links = {
    Produto: ["Recursos", "Preços", "FAQ", "Changelog"],
    Empresa: ["Sobre", "Blog", "Carreiras", "Imprensa"],
    Legal: ["Termos de Uso", "Privacidade", "Cookies", "Segurança"],
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a3318 0%, #061a0e 100%)",
        color: "#fff",
        padding: "64px 24px 32px",
        borderTop: "1px solid rgba(42,214,106,0.1)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(42,214,106,0.35)",
                }}
              >
                <TrendingUp size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                Fin<span style={{ color: "#2ad66a" }}>AI</span>
              </span>
            </a>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                maxWidth: "240px",
                margin: 0,
              }}
            >
              Seu assistente financeiro com IA. Simples, inteligente e feito
              para quem quer resultados de verdade.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#fff",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: "10px" }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#2ad66a")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.5)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
            }}
          >
            © 2025 FinAI. Todos os direitos reservados. Andrew Silva Ferreira
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
              margin: 0,
            }}
          >
            Feito com 💚 no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
