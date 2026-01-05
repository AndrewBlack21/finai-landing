import { Box, Typography, Button } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import herophone from "../../assets/imagens/hero-phone.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 🔥 chave
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 6 }, // padding responsivo
        py: { xs: 6, md: 10 },
        background: "linear-gradient(to bottom, #136c34, #c8ddd0)",
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* TEXTO E BOTÕES */}
      <Box sx={{ flex: "1 1 50%", color: "#fff", maxWidth: "600px" }}>
        <Typography variant="h3" fontWeight="bold">
          Controle Financeiro
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#6cd974", fontWeight: "bold", mb: 2 }}
        >
          Inteligente
        </Typography>

        <Typography sx={{ mb: 3 }}>
          O app que usa IA para organizar suas finanças, enviar alertas e
          responder dúvidas via WhatsApp. Simples, rápido e sempre ao seu lado.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<AndroidIcon />}
            sx={{ bgcolor: "#2ad66a", "&:hover": { bgcolor: "#388e3c" } }}
          >
            Baixar no Android
          </Button>

          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { bgcolor: "#fff", color: "#395242" },
            }}
          >
            Baixar no iOS
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Gratuito • Disponível em português
        </Typography>
      </Box>

      {/* IMAGEM */}
      <Box
        component="img"
        src={herophone}
        alt="App Preview"
        sx={{
          flex: "1 1 40%",
          maxWidth: "330px",
          borderRadius: "20px",
          marginTop: { xs: "40px", md: "0" },
        }}
      />
    </Box>
  );
}
