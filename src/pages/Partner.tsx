import { Gift, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const PartnerPage = () => {
  const [copied, setCopied] = useState(false);
  const refCode = "0001"; // Já deixei no padrão que você quer
  const refLink = `https://ecofiltros.seriotex.com.br?ref=${refCode}`;
  const salesCount = 4; // placeholder
  const goalSales = 10;

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Envolvendo tudo no verde pastel para eliminar o branco
    <div className="min-h-screen bg-[#a6e8aa]">
      <main className="py-16">
        <div className="container max-w-3xl">
          <h1 className="mb-2 font-heading text-4xl font-bold text-foreground">
            Área do <span className="text-gradient-emerald">Parceiro</span>
          </h1>
          <p className="mb-10 font-body text-muted-foreground">
            Acompanhe suas indicações e ganhe filtros grátis!
          </p>

          {/* Ref Link - O card branco (bg-card) agora destaca no fundo verde */}
          <div className="mb-8 rounded-xl border border-white/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Seu Link de Indicação</h3>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={refLink}
                className="flex-1 rounded-lg border border-emerald-100 bg-emerald-50/50 px-3 py-2 font-body text-sm text-foreground"
              />
              <button 
                onClick={handleCopy} 
                className="rounded-lg bg-primary p-2 text-primary-foreground transition-colors hover:bg-emerald-600"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="mb-8 rounded-xl border border-white/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-foreground">Progresso para Filtro Grátis</h3>
              <span className="font-heading text-2xl font-bold text-primary">{salesCount}/{goalSales}</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-emerald-100">
              <div
                className="h-full rounded-full bg-primary transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                style={{ width: `${(salesCount / goalSales) * 100}%` }}
              />
            </div>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Faltam <span className="font-semibold text-primary">{goalSales - salesCount}</span> vendas para ganhar 1 filtro grátis!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/50 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
              <span className="block font-heading text-2xl font-bold text-foreground">{salesCount}</span>
              <span className="font-body text-sm text-muted-foreground">Vendas Indicadas</span>
            </div>
            <div className="rounded-xl border border-white/50 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
              <Gift className="mx-auto mb-2 h-8 w-8 text-primary" />
              <span className="block font-heading text-2xl font-bold text-foreground">0</span>
              <span className="font-body text-sm text-muted-foreground">Filtros Ganhos</span>
            </div>
            <div className="rounded-xl border border-white/50 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm">
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
              <span className="block font-heading text-2xl font-bold text-foreground">R$ 0,00</span>
              <span className="font-body text-sm text-muted-foreground">Cashback Acumulado</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerPage;