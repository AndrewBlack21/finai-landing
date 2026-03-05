import { Box, Typography, Button } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { useEffect, useState } from "react";

/* ─── Dados do mockup ─────────────────────────────── */
const transactions = [
  {
    emoji: "🛒",
    label: "Mercado Extra",
    val: "-R$ 127,50",
    color: "#f87171",
    cat: "Alimentação",
  },
  {
    emoji: "💼",
    label: "Salário",
    val: "+R$ 4.200",
    color: "#4ade80",
    cat: "Renda",
  },
  {
    emoji: "🎬",
    label: "Netflix",
    val: "-R$ 39,90",
    color: "#f87171",
    cat: "Lazer",
  },
  {
    emoji: "⛽",
    label: "Posto Shell",
    val: "-R$ 95,00",
    color: "#f87171",
    cat: "Transporte",
  },
  {
    emoji: "📚",
    label: "Udemy",
    val: "-R$ 27,90",
    color: "#f87171",
    cat: "Educação",
  },
];

const bars = [30, 55, 40, 72, 48, 88, 60];

/* ─── Componente do celular ───────────────────────── */
function HeroPhone() {
  const [activeBar, setActiveBar] = useState(5);
  const [visible, setVisible] = useState(0);

  // anima as barras em loop
  useEffect(() => {
    const id = setInterval(
      () => setActiveBar((p) => (p + 1) % bars.length),
      1400,
    );
    return () => clearInterval(id);
  }, []);

  // anima as transações aparecendo
  useEffect(() => {
    const id = setInterval(
      () => setVisible((p) => Math.min(p + 1, transactions.length)),
      320,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glow de fundo */}
      <Box
        sx={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,214,106,0.30) 0%, transparent 68%)",
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
      />

      {/* Anel decorativo */}
      <Box
        sx={{
          position: "absolute",
          width: 310,
          height: 530,
          borderRadius: "44px",
          border: "1px solid rgba(42,214,106,0.20)",
          transform: "rotate(-4deg) translateX(-10px)",
          pointerEvents: "none",
        }}
      />

      {/* Corpo do celular */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: 275,
          borderRadius: "42px",
          background: "linear-gradient(160deg, #0f2118 0%, #0a1a10 100%)",
          border: "2px solid rgba(42,214,106,0.28)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(42,214,106,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          overflow: "hidden",
          pb: 2,
        }}
      >
        {/* Status bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2.5,
            pt: 1.5,
            pb: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "monospace",
            }}
          >
            9:41
          </Typography>
          <Box
            sx={{
              width: 70,
              height: 5,
              borderRadius: 99,
              background: "#111d15",
            }}
          />
          <Typography
            sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}
          >
            ●●●
          </Typography>
        </Box>

        {/* Área de conteúdo */}
        <Box sx={{ px: 2, pt: 0.5 }}>
          {/* Header saldo */}
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(42,214,106,0.12), rgba(42,214,106,0.04))",
              border: "1px solid rgba(42,214,106,0.15)",
              borderRadius: "20px",
              p: 2,
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'DM Sans',sans-serif",
                    mb: 0.25,
                  }}
                >
                  Saldo disponível
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "'Syne',sans-serif",
                    lineHeight: 1,
                  }}
                >
                  R$ 3.857
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 400,
                    }}
                  >
                    ,40
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                A
              </Box>
            </Box>

            {/* Mini gráfico */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "3px",
                height: 36,
                mt: 1.5,
              }}
            >
              {bars.map((h, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: "3px",
                    background:
                      i === activeBar
                        ? "linear-gradient(180deg, #4ade80, #1ea360)"
                        : "rgba(42,214,106,0.22)",
                    transition: "background 0.4s, height 0.3s",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* IA badge */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "rgba(42,214,106,0.08)",
              border: "1px solid rgba(42,214,106,0.18)",
              borderRadius: "12px",
              px: 1.5,
              py: 0.75,
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "6px",
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.6rem",
              }}
            >
              ✦
            </Box>
            <Typography
              sx={{
                fontSize: "0.65rem",
                color: "#6dffaa",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 600,
              }}
            >
              IA detectou: gastos 12% acima do normal
            </Typography>
          </Box>

          {/* Transações */}
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'DM Sans',sans-serif",
              mb: 0.75,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Recentes
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {transactions.slice(0, visible).map((t, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "7px 10px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  animation: "fadeSlideIn 0.3s ease both",
                  "@keyframes fadeSlideIn": {
                    from: { opacity: 0, transform: "translateY(6px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "9px",
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                    }}
                  >
                    {t.emoji}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: "#e5e7eb",
                        fontFamily: "'DM Sans',sans-serif",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {t.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.55rem",
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      {t.cat}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: t.color,
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {t.val}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom nav */}
        <Box
          sx={{ display: "flex", justifyContent: "space-around", pt: 2, px: 2 }}
        >
          {[
            { icon: "🏠", active: true },
            { icon: "📊", active: false },
            { icon: "💬", active: false },
            { icon: "👤", active: false },
          ].map(({ icon, active }, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                opacity: active ? 1 : 0.3,
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>{icon}</Typography>
              {active && (
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#2ad66a",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Floating card — alerta da IA */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: -20, md: -60 },
          top: "28%",
          background: "rgba(13,26,19,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(42,214,106,0.3)",
          borderRadius: "16px",
          px: 1.75,
          py: 1.25,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          maxWidth: 170,
          animation: "floatCard 3s ease-in-out infinite",
          "@keyframes floatCard": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-8px)" },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
          <Typography sx={{ fontSize: "0.9rem" }}>💡</Typography>
          <Typography
            sx={{
              fontSize: "0.6rem",
              fontWeight: 700,
              color: "#6dffaa",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Dica do FinAI
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'DM Sans',sans-serif",
            lineHeight: 1.5,
          }}
        >
          Você pode economizar R$ 287 cortando assinaturas duplicadas
        </Typography>
      </Box>

      {/* Floating badge — score */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: -15, md: -55 },
          bottom: "22%",
          background: "linear-gradient(135deg, #1ea360, #0d4a23)",
          border: "1px solid rgba(42,214,106,0.4)",
          borderRadius: "16px",
          px: 1.5,
          py: 1,
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          animation: "floatCard2 3.5s ease-in-out infinite",
          "@keyframes floatCard2": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(6px)" },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "0.55rem",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Score financeiro
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "#fff",
            fontFamily: "'Syne',sans-serif",
            lineHeight: 1,
          }}
        >
          847{" "}
          <Typography
            component="span"
            sx={{ fontSize: "0.6rem", color: "#4ade80" }}
          >
            ▲ +12
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

/* ─── Hero principal ──────────────────────────────── */
export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 5, md: 8, lg: 12 },
        py: { xs: 10, md: 12 },
        background:
          "linear-gradient(135deg, #0d4a23 0%, #136c34 45%, #1a8a42 70%, #b8d9c4 100%)",
        gap: { xs: 10, md: 6 },
        position: "relative",
        overflow: "hidden",
        minHeight: { md: "580px" },
      }}
    >
      {/* Blobs decorativos */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          right: "30%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(42,214,106,0.08)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          left: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Texto ── */}
      <Box
        sx={{
          flex: "1 1 50%",
          color: "#fff",
          maxWidth: "600px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(42,214,106,0.15)",
            border: "1px solid rgba(42,214,106,0.35)",
            borderRadius: "100px",
            px: 2,
            py: 0.75,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#2ad66a",
              boxShadow: "0 0 8px #2ad66a",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#6dffaa",
              letterSpacing: "0.05em",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            ✦ Gratuito · Em português · Com IA
          </Typography>
        </Box>

        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Syne','DM Sans',sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "3.25rem", lg: "3.75rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            mb: 1,
            color: "#fff",
          }}
        >
          Seu dinheiro,
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Syne','DM Sans',sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "3.25rem", lg: "3.75rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            mb: 3,
            background: "linear-gradient(90deg, #6dffaa, #2ad66a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          finalmente inteligente.
        </Typography>

        {/* Subheadline */}
        <Typography
          sx={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "rgba(255,255,255,0.78)",
            mb: 4,
            lineHeight: 1.65,
            maxWidth: "480px",
          }}
        >
          Pare de perder dinheiro sem saber para onde ele foi. O FinAI organiza
          seus gastos automaticamente, te avisa antes de estourar o limite e
          responde suas dúvidas financeiras no WhatsApp — 24h por dia.
        </Typography>

        {/* CTAs */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            startIcon={<AndroidIcon />}
            sx={{
              background: "linear-gradient(135deg, #1ea360, #2ad66a)",
              color: "#fff",
              fontWeight: 700,
              borderRadius: "12px",
              px: 3,
              py: 1.25,
              fontSize: "0.9rem",
              boxShadow: "0 4px 20px rgba(42,214,106,0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #178550, #1ea360)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 24px rgba(42,214,106,0.5)",
              },
              transition: "all 0.2s",
            }}
          >
            Baixar no Android
          </Button>
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.45)",
              fontWeight: 700,
              borderRadius: "12px",
              px: 3,
              py: 1.25,
              fontSize: "0.9rem",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(255,255,255,0.07)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.7)",
              },
              transition: "all 0.2s",
            }}
          >
            Baixar no iOS
          </Button>
        </Box>

        {/* Social proof */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {["#a8e6c0", "#7dd4a8", "#52c285"].map((bg, i) => (
              <Box
                key={i}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: bg,
                  border: "2px solid #136c34",
                  marginLeft: i === 0 ? 0 : "-8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#0d4a23",
                }}
              >
                {["C", "R", "L"][i]}
              </Box>
            ))}
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            +50.000 pessoas já organizam suas finanças com o FinAI
          </Typography>
        </Box>
      </Box>

      {/* ── Mockup ── */}
      <Box
        sx={{
          flex: "1 1 40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          mt: { xs: 4, md: 0 },
          pr: { md: 6 },
        }}
      >
        <HeroPhone />
      </Box>
    </Box>
  );
}
