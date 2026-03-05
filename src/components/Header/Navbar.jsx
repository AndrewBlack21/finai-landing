import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { TrendingUp } from "lucide-react";

const pages = ["Recursos", "Agente IA", "Depoimentos"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(240, 248, 243, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(42, 214, 106, 0.15)",
        color: "#1a2e22",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: "60px", md: "68px" } }}>
          {/* Logo desktop */}
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              mr: 4,
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(42,214,106,0.35)",
              }}
            >
              <TrendingUp size={18} color="#fff" strokeWidth={2.5} />
            </Box>
            <Typography
              sx={{
                fontFamily: "'Syne', 'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "#1a2e22",
                letterSpacing: "-0.02em",
              }}
            >
              Fin<span style={{ color: "#1ea360" }}>AI</span>
            </Typography>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#1a2e22" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo mobile */}
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TrendingUp size={15} color="#fff" strokeWidth={2.5} />
            </Box>
            <Typography
              sx={{
                fontFamily: "'Syne', 'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#1a2e22",
              }}
            >
              Fin<span style={{ color: "#1ea360" }}>AI</span>
            </Typography>
          </Box>

          {/* Nav links + CTA */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#395242",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  px: 2,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#1ea360",
                    backgroundColor: "rgba(42,214,106,0.08)",
                  },
                  transition: "all 0.2s",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                ml: 2,
                background: "linear-gradient(135deg, #1ea360, #2ad66a)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.875rem",
                borderRadius: "10px",
                px: 3,
                py: 1,
                boxShadow: "0 2px 10px rgba(42,214,106,0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg, #178550, #1ea360)",
                  boxShadow: "0 4px 16px rgba(42,214,106,0.45)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              Entrar na Lista
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
