import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

const VideoLanding = () => {
  const [showButton, setShowButton] = useState(false);

  // ⏱️ CONFIGURE AQUI: Em qual segundo do vídeo o botão "CLIQUE AQUI" deve surgir?
  // Exemplo: Se você faz a oferta aos 2 minutos de vídeo, coloque 120 (2 * 60).
  // Vou deixar 10 segundos para você testar aí. Mude para o tempo que quiser!
  const tempoAparecerSegundos = 10; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, tempoAparecerSegundos * 1000);

    return () => clearTimeout(timer);
  }, []);

  // Código de incorporação oficial do seu vídeo do Wistia
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

        {/* Container do Wistia (16:9 Automático) */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black mb-10 relative">
          <iframe
            src={wistiaEmbedUrl}
            title="Vídeo de Apresentação Seriotex"
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* 🎯 O BOTÃO SOLICITADO: Azul Escuro com Bordas Laranjas Bem Fechadas */}
        <div className="w-full max-w-md min-h-[80px]">
          {showButton ? (
            <div className="flex flex-col items-center gap-3 transition-all duration-500 ease-out transform translate-y-0 opacity-100">
              <a
                href="https://wa.me/55XXXXXXXXXXX?text=Olá!%20Assisti%20a%20apresentação%20e%20quero%20saber%20mais%20sobre%20os%20filtros."
                target="_blank"
                rel="noopener noreferrer"
                // !bg-[#0b2240] (Azul Escuro) | border-4 border-[#f97316] (Bordas Laranjas) | rounded-xl (Fechado)
                className="group flex w-full items-center justify-center gap-2 rounded-xl !bg-[#0b2240] border-4 border-[#f97316] px-8 py-4 font-heading text-xl font-black text-white shadow-2xl transition-all hover:scale-[1.03] hover:bg-[#122e54] active:scale-95"
              >
                <MessageSquare className="h-5 w-5 text-[#f97316]" />
                CLIQUE AQUI
                <ArrowRight className="h-5 w-5 text-[#f97316] transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="/"
                className="text-sm font-body text-emerald-400/80 hover:text-emerald-400 underline transition-colors"
              >
                Conhecer todos os produtos no site
              </a>
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