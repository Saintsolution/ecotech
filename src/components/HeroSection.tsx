import { Link } from "react-router-dom";
import { Wind, Droplets } from "lucide-react";
import heroEngineBg from "@/assets/hero-engine-bg.jpg";
import filterAir from "@/assets/filter-air.png";
import filterDiesel from "@/assets/filter-diesel.png";

const HeroSection = () => (
  <section className="relative min-h-[90vh] overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroEngineBg} alt="" className="h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    <div className="container relative z-10 grid min-h-[90vh] grid-cols-1 gap-8 py-20 lg:grid-cols-2">
      {/* Left: Air Filters */}
      <Link
        to="/produtos/ar"
        className="group flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/60 p-10 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
      >
        <Wind className="mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Filtros de <span className="text-gradient-emerald">Ar</span>
        </h2>
        <p className="mb-6 text-center font-body text-muted-foreground">
          Tecnologia HARCAP · Filtragem de 0,5 micras
        </p>
        <img
          src={filterAir}
          alt="Filtro de Ar EcoTech"
          className="h-56 w-auto object-contain transition-transform group-hover:scale-105 animate-float"
        />
        <span className="mt-6 rounded-full bg-primary px-6 py-2 font-heading text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-accent">
          Ver Produtos →
        </span>
      </Link>

      {/* Right: Diesel Filters */}
      <Link
        to="/produtos/diesel"
        className="group flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/60 p-10 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
      >
        <Droplets className="mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Filtros de <span className="text-gradient-emerald">Diesel</span>
        </h2>
        <p className="mb-6 text-center font-body text-muted-foreground">
          99,9% separação de água · 5 micras de filtragem
        </p>
        <img
          src={filterDiesel}
          alt="Filtro de Diesel EcoTech"
          className="h-56 w-auto object-contain transition-transform group-hover:scale-105 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <span className="mt-6 rounded-full bg-primary px-6 py-2 font-heading text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-accent">
          Ver Produtos →
        </span>
      </Link>
    </div>
  </section>
);

export default HeroSection;
