import { Download, ArrowRight, Sparkles } from "lucide-react";

export default function Cta() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(135deg, #0d4a23 0%, #1ea360 50%, #2ad66a 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "24px",
          }}
        >
          <Sparkles size={14} color="#fff" />
          <span
            style={{
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Acesso gratuito · Sem cartão de crédito
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Syne', 'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 20px",
          }}
        >
          Pronto para parar de perder
          <br />
          dinheiro sem saber por quê?
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.82)",
            margin: "0 0 40px",
            lineHeight: 1.65,
          }}
        >
          Junte-se a mais de 50.000 pessoas que já usam IA para tomar decisões
          financeiras mais inteligentes todo dia.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              borderRadius: "14px",
              background: "#fff",
              color: "#1a2e22",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
            }}
          >
            <Download size={18} color="#1ea360" />
            Entrar na lista de espera
          </button>

          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 32px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              border: "1.5px solid rgba(255,255,255,0.4)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.22)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
          >
            Ver funcionalidades
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {["✓ Gratuito para sempre", "✓ Sem spam", "✓ Dados protegidos"].map(
            (item, i) => (
              <span
                key={i}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.85rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
