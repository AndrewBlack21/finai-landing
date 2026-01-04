import path from "path";
import { fileURLToPath } from "url"; // <--- Importação nova necessária
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Criando as variáveis que faltam no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/finai-landing/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
