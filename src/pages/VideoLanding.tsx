import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const VideoLanding = () => {
  const [showButton, setShowButton] = useState(false);

  // ⏱️ CONFIGURE AQUI: Em qual segundo do vídeo o botão deve surgir?
  // Vou deixar 10 segundos para você testar aí. Mude para o tempo da sua oferta!
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
    metaDesc.setAttribute('content', 'Como frotistas estão reduzindo até R$ 11.000/ano em manutenção por veículo.');

    let metaImage = document.querySelector('meta[property="og:image"]');
    if (!metaImage) {
      metaImage = document.createElement('meta');
      metaImage.setAttribute('property', 'og:image');
      document.head.appendChild(metaImage);
    }
    // Imagem do frame/player de vídeo para o card do WhatsApp
    metaImage.setAttribute('content', 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80');

    // Timer para exibição do botão retido
    const timer = setTimeout(() => {
      setShowButton(true);
    }, tempoAparecerSegundos * 1000);

    return () => clearTimeout(timer);
  }, []);

  // Link oficial do seu vídeo hospedado no Wistia
  const wistiaEmbedUrl = "https://fast.wistia.net/embed/iframe/sv7ycah0yz?videoFoam=true";

  return (
    <div className="min-h-screen bg-[#081c15] text-white flex flex-col justify-between">
      {/* Topo Discreto */}
      <header className="py-6 border-b border-white/10 bg-black/20">
        <div className="container max-w-4xl flex justify-between items-center">
          <span className="font-heading font-bold text-xl tracking-wider text-emerald-400">
            ECOFILTROS <span className="text-white">SERIOTEX</span>
          </span>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-body border border-emerald-500/30">
            Apresentação Exclusiva
          </span>
        </div>
      </header>

      {/* Conteúdo Central */}
      <main className="container max-w-4xl py-12 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="mb-4 font-heading text-3xl font-bold md:text-4xl max-w-2xl leading-tight">
          Como frotistas estão reduzindo até <span className="text-emerald-400">R$ 11.000/ano</span> em manutenção por veículo
        </h1>
        <p className="mb-8 font-body text-silver max-w-xl text-sm md:text-base">
          Assista à apresentação abaixo para entender a tecnologia HARCAP.
        </p>

        {/* Container do Wistia */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black mb-10 relative">
          <iframe
            src={wistiaEmbedUrl}
            title="Vídeo de Apresentação Seriotex"
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* 🎯 BOTÃO SOLICITADO: Azul Escuro com Bordas Laranjas levando ao site principal */}
        <div className="w-full max-w-md min-h-[80px]">
          {showButton ? (
            <div className="flex flex-col items-center gap-3 transition-all duration-500 ease-out">
              <a
                href="https://ecofiltros.netlify.app/" // 👈 Ajustado para o seu link atual
                className="group flex w-full items-center justify-center gap-3 rounded-xl !bg-[#0b2240] border-4 border-[#f97316] px-8 py-4 font-heading text-xl font-black text-white shadow-2xl transition-all hover:scale-[1.03] hover:bg-[#122e54] active:scale-95"
              >
                <Play className="h-5 w-5 text-[#f97316] fill-[#f97316]" />
                CLIQUE AQUI
                <ArrowRight className="h-5 w-5 text-[#f97316] transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs font-body text-silver/60">
                Clique acima para acessar nossa linha completa de produtos
              </p>
            </div>
          ) : (
            <p className="text-xs font-body text-silver/40 italic animate-pulse">
              Aguarde o momento da oferta para liberar o seu acesso...
            </p>
          )}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-6 border-t border-white/5 bg-black/40 text-center text-xs text-silver">
        <p>© 2026 Ecofiltros Seriotex · Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default VideoLanding;