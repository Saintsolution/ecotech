import { Link } from "react-router-dom";
import { Gift, Users, TrendingUp } from "lucide-react";

const AffiliateSection = () => (
  // Verde "Petróleo" profundo para fechar a página com chave de ouro
  <section className="py-20 bg-[#114230]">
    <div className="container">
      {/* O card continua claro (bg-card) para saltar do fundo escuro */}
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card p-10 text-center shadow-2xl">
        <Gift className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Indique e <span className="text-gradient-emerald">Ganhe</span>
        </h2>
        <p className="mb-8 font-body text-muted-foreground">
          A cada 10 vendas indicadas, você ganha 1 filtro grátis! Compartilhe seu link exclusivo e acompanhe suas comissões em tempo real.
        </p>
        
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Ajustei o bg-muted para destacar os ícones dentro do card */}
          <div className="rounded-lg bg-emerald-50/50 p-4 border border-emerald-100/20">
            <Users className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Indique Amigos</p>
          </div>
          <div className="rounded-lg bg-emerald-50/50 p-4 border border-emerald-100/20">
            <TrendingUp className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Acumule Vendas</p>
          </div>
          <div className="rounded-lg bg-emerald-50/50 p-4 border border-emerald-100/20">
            <Gift className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Ganhe Filtros</p>
          </div>
        </div>

        <Link
          to="/parceiro"
          className="inline-block rounded-full bg-primary px-8 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors shadow-lg hover:bg-emerald-600 hover:shadow-emerald-500/20"
        >
          Quero Ser Parceiro →
        </Link>
      </div>
    </div>
  </section>
);

export default AffiliateSection;