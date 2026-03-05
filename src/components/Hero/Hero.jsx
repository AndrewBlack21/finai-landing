import { Box, Typography, Button, Chip } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import herophone from "../../assets/imagens/hero-phone.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 5, md: 8, lg: 12 },
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #0d4a23 0%, #136c34 45%, #1a8a42 70%, #b8d9c4 100%)",
        gap: { xs: 6, md: 4 },
        position: "relative",
        overflow: "hidden",
        minHeight: { md: "560px" },
      }}
    >
      {/* Decorative blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          right: "30%",
          width: "300px",
          height: "300px",
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
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Texto e botões */}
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
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ✦ Gratuito · Em português · Com IA
          </Typography>
        </Box>

        {/* Headline principal */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Syne', 'DM Sans', sans-serif",
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
            fontFamily: "'Syne', 'DM Sans', sans-serif",
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
            fontFamily: "'DM Sans', sans-serif",
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

        {/* Social proof inline */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          {/* Avatars stack */}
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
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            +50.000 pessoas já organizam suas finanças com o FinAI
          </Typography>
        </Box>
      </Box>

      {/* Imagem */}
      <Box
        sx={{
          flex: "1 1 40%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Glow atrás da imagem */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle, rgba(42,214,106,0.25) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <Box
          component="img"
          src={herophone}
          alt="App FinAI Preview"
          sx={{
            position: "relative",
            maxWidth: { xs: "280px", md: "320px", lg: "360px" },
            width: "100%",
            borderRadius: "24px",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(42,214,106,0.2)",
            marginTop: { xs: "0", md: "0" },
          }}
        />
      </Box>
    </Box>
  );
}
