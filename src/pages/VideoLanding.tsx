import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const VideoLanding = () => {
  const [showButton, setShowButton] = useState(false);

  // ⏱️ CONFIGURE AQUI: Em qual segundo do vídeo o botão deve surgir?
  const tempoAparecerSegundos = 10; 

  useEffect(() => {
    // Configurações de Meta Tags para o Preview do WhatsApp
    document.title = "Apresentação Exclusiva - Ecofiltros Seriotex";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Como frotistas estão reduzindo custos na operação.');

    let metaImage = document.querySelector('meta[property="og:image"]');
    if (!metaImage) {
      metaImage = document.createElement('meta');
      metaImage.setAttribute('property', 'og:image');
      document.head.appendChild(metaImage);
    }
    metaImage.setAttribute('content', 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80');

    const timer = setTimeout(() => {
      setShowButton(true);
    }, tempoAparecerSegundos * 1000);

    return () => clearTimeout(timer);
  }, []);

  // Link oficial do seu vídeo hospedado no Wistia
  const wistiaEmbedUrl = "https://fast.wistia.net/embed/iframe/sv7ycah0yz?videoFoam=true";

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 overflow-y-auto">
      
      {/* Container do Vídeo em formato Vertical (Estilo Insta/Reels - Proporção 9:16) */}
      <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 relative">
        <iframe
          src={wistiaEmbedUrl}
          title="Vídeo de Apresentação Seriotex"
          allow="autoplay; fullscreen"
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* 🎯 Espaço do Botão Retido: Surge logo abaixo do vídeo vertical */}
      <div className="w-full max-w-[360px] min-h-[80px] mt-4 flex items-center justify-center">
        {showButton ? (
          <div className="w-full animate-fade-in px-2">
            <a
              href="https://ecofiltros.netlify.app/"
              className="group flex w-full items-center justify-center gap-3 rounded-xl !bg-[#0b2240] border-4 border-[#f97316] px-6 py-4 font-heading text-lg font-black text-white shadow-2xl transition-all hover:scale-[1.03] hover:bg-[#122e54] active:scale-95"
            >
              <Play className="h-5 w-5 text-[#f97316] fill-[#f97316]" />
              CLIQUE AQUI
              <ArrowRight className="h-5 w-5 text-[#f97316] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ) : (
          <p className="text-xs font-body text-zinc-500 italic animate-pulse">
            Aguarde a liberação do acesso...
          </p>
        )}
      </div>

    </div>
  );
};

export default VideoLanding;