import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const VideoLanding = () => {
  const [showButton, setShowButton] = useState(false);
  const tempoAparecerSegundos = 27;

  useEffect(() => {
    // Esconde botões globais da home
    const botaoWhatsGlobal = document.querySelector('.whatsapp-button, [href*="wa.me"]');
    const chatbotGlobal = document.querySelector('.chatbot-section, #chatbot-container, iframe[title*="chat"]');
    
    if (botaoWhatsGlobal) (botaoWhatsGlobal as HTMLElement).style.display = 'none';
    if (chatbotGlobal) (chatbotGlobal as HTMLElement).style.display = 'none';

    // Cronômetro limpo e direto de 27 segundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, tempoAparecerSegundos * 1000);

    return () => {
      clearTimeout(timer);
      if (botaoWhatsGlobal) (botaoWhatsGlobal as HTMLElement).style.display = '';
      if (chatbotGlobal) (chatbotGlobal as HTMLElement).style.display = '';
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    const chatbotGlobal = document.querySelector('.chatbot-section, #chatbot-container') as HTMLElement;
    if (chatbotGlobal) {
      chatbotGlobal.style.display = '';
      const botClicker = chatbotGlobal.querySelector('button');
      if (botClicker) botClicker.click();
    }
  };

  const wistiaEmbedUrl = "https://fast.wistia.net/embed/iframe/sv7ycah0yz?videoFoam=true";

  return (
    <HelmetProvider>
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
        
        <Helmet>
          <title>Apresentação Exclusiva - Ecofiltros Seriotex</title>
          <meta property="og:title" content="Apresentação Exclusiva - Ecofiltros Seriotex" />
          <meta property="og:description" content="Como frotistas estão reduzindo custos na operação." />
          <meta property="og:type" content="video.other" />
          <meta property="og:url" content="https://ecofiltros.netlify.app/apresentacao" />
          
          {/* 🎯 LINK DO SEU BANNER DE 500x600 EM PUBLIC */}
          <meta property="og:image" content="https://ecofiltros.netlify.app/logotipo_seriotex.png" />
          <meta property="og:image:secure_url" content="https://ecofiltros.netlify.app/logotipo_seriotex.png" />
          <meta property="og:image:type" content="image/png" />
          
          {/* 📏 METADADOS EXATOS PARA O WHATSAPP NÃO DISTORCER O BANNER */}
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="600" />
        </Helmet>

        <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 relative">
          <iframe
            src={wistiaEmbedUrl}
            title="Vídeo de Apresentação Seriotex"
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="w-full h-full absolute inset-0 z-10"
          ></iframe>

          {showButton && (
            <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center p-4 animate-fade-in backdrop-blur-[5px]">
              <a
                href="https://ecofiltros.netlify.app/?openChat=true"
                onClick={handleButtonClick}
                className="group flex flex-col sm:flex-row items-center justify-center gap-3 rounded-xl !bg-[#0b2240] border-4 border-[#f97316] px-6 py-4 font-heading text-xl font-black text-white shadow-2xl transition-all hover:scale-[1.05] hover:bg-[#122e54] active:scale-95 text-center max-w-[90%]"
              >
                <MessageSquare className="h-6 w-6 text-[#f97316] shrink-0" />
                <span>CLIQUE AQUI</span>
                <ArrowRight className="h-5 w-5 text-[#f97316] transition-transform group-hover:translate-x-1 hidden sm:inline" />
              </a>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default VideoLanding;