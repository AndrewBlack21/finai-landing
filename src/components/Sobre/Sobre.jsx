import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const stats = [
  { value: "50k+", label: "usuários ativos" },
  { value: "R$2M+", label: "economizados" },
  { value: "4.9★", label: "avaliação média" },
];

export default function Sobre() {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #f0f8f3 0%, #ffffff 100%)",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
      }}
    >
      <Box maxWidth="900px" mx="auto" textAlign="center">
        {/* Eyebrow */}
        <Typography
          sx={{
            display: "inline-block",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#1ea360",
            backgroundColor: "rgba(30,163,96,0.1)",
            px: 2,
            py: 0.75,
            borderRadius: "100px",
            mb: 3,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Por que o FinAI é diferente
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontFamily: "'Syne', 'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.75rem" },
            letterSpacing: "-0.03em",
            color: "#1a2e22",
            mb: 2.5,
            lineHeight: 1.15,
          }}
        >
          Não é só um app. É seu{" "}
          <Box component="span" sx={{ color: "#1ea360" }}>
            copiloto financeiro.
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "#4a6358",
            lineHeight: 1.75,
            mb: 6,
            maxWidth: "680px",
            mx: "auto",
          }}
        >
          Enquanto outros apps só mostram gráficos que você ignora, o FinAI age.
          Ele aprende seus hábitos, categoriza cada gasto em tempo real e te
          alerta antes que o problema apareça. Como ter um contador no bolso —
          sem pagar por consulta.
        </Typography>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, i) => (
            <Box
              key={i}
              sx={{
                textAlign: "center",
                px: { xs: 2, md: 3 },
                py: 2,
                borderRadius: "16px",
                backgroundColor: "rgba(30,163,96,0.06)",
                border: "1px solid rgba(30,163,96,0.12)",
                minWidth: "120px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  color: "#1ea360",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#4a6358",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
