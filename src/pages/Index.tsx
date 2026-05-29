import { Helmet, HelmetProvider } from "react-helmet-async";
import PillarsSection from "@/components/PillarsSection";
import HeroSection from "@/components/HeroSection";
import TechSection from "@/components/TechSection";
import AffiliateSection from "@/components/AffiliateSection";

const Index = () => (
  <HelmetProvider>
    <main>
      {/* 🎯 O Helmet injeta dinamicamente o banner quando a Home é compartilhada no WhatsApp */}
      <Helmet>
        <title>Ecofiltros Seriotex - Blindagem de Frotas</title>
        <meta property="og:title" content="Ecofiltros Seriotex - Blindagem de Frotas" />
        <meta property="og:description" content="Reduza em até 3% o gasto de diesel e 12% em manutenção com a tecnologia HARCAP." />
        <meta property="og:url" content="https://ecofiltros.netlify.app/" />
        
        {/* 🖼️ LINK DO SEU BANNER DE 500x600 EM PUBLIC */}
        <meta property="og:image" content="https://ecofiltros.netlify.app/logotipo_seriotex.png" />
        <meta property="og:image:secure_url" content="https://ecofiltros.netlify.app/logotipo_seriotex.png" />
        <meta property="og:image:type" content="image/png" />
        
        {/* 📏 METADADOS EXATOS PARA O WHATSAPP NÃO DISTORCER O BANNER */}
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="600" />
      </Helmet>

      {/* Seus blocos visuais originais continuam aqui, intocados */}
      <PillarsSection />
      <HeroSection />
      <TechSection />
      <AffiliateSection />
    </main>
  </HelmetProvider>
);

export default Index;