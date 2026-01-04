// Importações Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function Sobre() {
  return (
    <Box component="section" sx={{ background: "#f3f6f44d", p: 2 }}>
      <container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          padding={"5rem"}
          flexDirection={"column"}
        >
          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            sx={{ color: "#388e3c", fontWeight: "bold", mb: 2 }}
          >
            Suas Finanças, Sob Controle Total
          </Typography>
          <Typography
            variant="body1"
            // fontWeight={"bold"}
            sx={{
              color: "#388e3c",
              // fontWeight: "bold",
              mb: 2,
              maxWidth: "63rem",
            }}
          >
            O FinAI é mais que um app de controle financeiro. É seu assistente
            pessoal alimentado por inteligência artificial que aprende seus
            hábitos, categoriza gastos automaticamente e te ajuda a economizar
            sem complicação. Tudo com a segurança e praticidade que você merece.
          </Typography>
        </Grid>
      </container>
    </Box>
  );
}
