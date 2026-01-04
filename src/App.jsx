import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import FunctionSection from "./components/Funcionalidade/Function";
import AgenteAI from "./components/Agent/AgentSection";
import Mobile from "./components/MobileSection/MobileSection";
import Comentarios from "./components/Coments/Comentarios";
import Chat from "./components/MobileChat/Chat";
import Cta from "./components/CTASection/Cta";
import UltimaPage from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <FunctionSection />
      <Chat />
      <AgenteAI />
      <Mobile />
      <Comentarios />
      <Cta />
      <UltimaPage />
    </>
  );
}

export default App;
