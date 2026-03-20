import { Gift, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const PartnerPage = () => {
  const [copied, setCopied] = useState(false);
  const refCode = "ECO-PARCEIRO-001";
  const refLink = `https://ecotech.com.br?ref=${refCode}`;
  const salesCount = 4; // placeholder
  const goalSales = 10;

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="py-16">
      <div className="container max-w-3xl">
        <h1 className="mb-2 font-heading text-4xl font-bold text-foreground">
          Área do <span className="text-gradient-emerald">Parceiro</span>
        </h1>
        <p className="mb-10 font-body text-muted-foreground">
          Acompanhe suas indicações e ganhe filtros grátis!
        </p>

        {/* Ref Link */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Seu Link de Indicação</h3>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={refLink}
              className="flex-1 rounded-lg border border-input bg-muted px-3 py-2 font-body text-sm text-foreground"
            />
            <button onClick={handleCopy} className="rounded-lg bg-primary p-2 text-primary-foreground hover:bg-accent">
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-foreground">Progresso para Filtro Grátis</h3>
            <span className="font-heading text-2xl font-bold text-primary">{salesCount}/{goalSales}</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-emerald-gradient transition-all"
              style={{ width: `${(salesCount / goalSales) * 100}%` }}
            />
          </div>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Faltam <span className="font-semibold text-primary">{goalSales - salesCount}</span> vendas para ganhar 1 filtro grátis!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
            <span className="block font-heading text-2xl font-bold text-foreground">{salesCount}</span>
            <span className="font-body text-sm text-muted-foreground">Vendas Indicadas</span>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <Gift className="mx-auto mb-2 h-8 w-8 text-primary" />
            <span className="block font-heading text-2xl font-bold text-foreground">0</span>
            <span className="font-body text-sm text-muted-foreground">Filtros Ganhos</span>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
            <span className="block font-heading text-2xl font-bold text-foreground">R$ 0,00</span>
            <span className="font-body text-sm text-muted-foreground">Cashback Acumulado</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PartnerPage;
