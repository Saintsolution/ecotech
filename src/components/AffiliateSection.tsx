import { Link } from "react-router-dom";
import { Gift, Users, TrendingUp } from "lucide-react";

const AffiliateSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center shadow-lg">
        <Gift className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Indique e <span className="text-gradient-emerald">Ganhe</span>
        </h2>
        <p className="mb-8 font-body text-muted-foreground">
          A cada 10 vendas indicadas, você ganha 1 filtro grátis! Compartilhe seu link exclusivo e acompanhe suas comissões em tempo real.
        </p>
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-muted p-4">
            <Users className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Indique Amigos</p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <TrendingUp className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Acumule Vendas</p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <Gift className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="font-heading text-sm font-semibold text-foreground">Ganhe Filtros</p>
          </div>
        </div>
        <Link
          to="/parceiro"
          className="inline-block rounded-full bg-primary px-8 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
        >
          Quero Ser Parceiro →
        </Link>
      </div>
    </div>
  </section>
);

export default AffiliateSection;
