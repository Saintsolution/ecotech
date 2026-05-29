import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

const VideoLanding = () => {
  const [showButton, setShowButton] = useState(false);

  // ⏱️ CONFIGURE AQUI: Em qual segundo do vídeo o botão deve surgir?
  const tempoAparecerSegundos = 10; 

  useEffect(() => {
    // 🕶️ OCULTAR COMPONENTES GLOBAIS (WhatsApp e Chatbot de IA)
    // Procuramos os elementos na tela pelas tags ou classes e aplicamos display: none
    const botaoWhatsGlobal = document.querySelector('.whatsapp-button, [href*="wa.me"]');
    const chatbotGlobal = document.querySelector('.chatbot-section, #chatbot-container, iframe[title*="chat"]');
    
    // Força o sumiço deles enquanto estiver na página de apresentação
    if (botaoWhatsGlobal) (botaoWhatsGlobal as HTMLElement).style.display = 'none';
    if (chatbotGlobal) (chatbotGlobal as HTMLElement).style.display = 'none';

    // Configurações de Meta Tags para o Preview do WhatsApp
    document.title = "Apresentação Exclusiva - Ecofiltros Seriotex";

    const timer = setTimeout(() => {
      setShowButton(true);
    }, tempoAparecerSegundos * 1000);

    // 🔄 LIMPEZA: Se o cliente sair dessa página e for para a Home, os botões globais voltam a aparecer normalmente
    return () => {
      clearTimeout(timer);
      if (botaoWhatsGlobal) (botaoWhatsGlobal as HTMLElement).style.display = '';
      if (chatbotGlobal) (chatbotGlobal as HTMLElement).style.display = '';
    };
  }, []);

  const wistiaEmbedUrl = "https://fast.wistia.net/embed/iframe/sv7ycah0yz?videoFoam=true";

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Container do Vídeo em formato Vertical (9:16) */}
      <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 relative">
        
        {/* O Player do Vídeo */}
        <iframe
          src={wistiaEmbedUrl}
          title="Vídeo de Apresentação Seriotex"
          allow="autoplay; fullscreen"
          frameBorder="0"
          className="w-full h-full absolute inset-0 z-10"
        ></iframe>

        {/* 🎯 BOTÃO AO CENTRO DA IMAGEM: Só aparece por cima do vídeo no tempo configurado */}
        {showButton && (
          <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center p-4 animate-fade-in backdrop-blur-[2px]">
            <a
              href="https://wa.me/5521966879813?text=Olá!%20Assisti%20a%20sua%20apresentação%20em%20vídeo%20e%20gostaria%20de%20receber%20a%20análise%20de%20economia%20por%20placa%20para%20minha%20frota."
              target="_blank"
              rel="noopener noreferrer"
              // !bg-[#0b2240] (Azul Escuro) | border-4 border-[#f97316] (Borda Laranja) | Texto gigante e centralizado
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
  );
};

export default VideoLanding;