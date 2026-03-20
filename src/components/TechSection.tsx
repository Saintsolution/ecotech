import { Shield, Zap, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "99,9%", label: "Separação de água" },
  { icon: Zap, value: "0,5μm", label: "Filtragem de ar" },
  { icon: Clock, value: "60.000km", label: "Durabilidade" },
  { icon: Award, value: "6x", label: "Maior que filtros comuns" },
];

const TechSection = () => (
  <section className="bg-surface-dark py-20">
    <div className="container">
      <h2 className="mb-2 text-center font-heading text-3xl font-bold text-surface-dark-foreground md:text-4xl">
        Tecnologia <span className="text-gradient-emerald">HARCAP</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-silver">
        Enquanto filtros convencionais de papel (1mm) duram apenas 10.000 km, nossos filtros com tecnologia HARCAP oferecem filtragem superior com durabilidade 6x maior.
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-xl border border-emerald-glow/20 bg-surface-dark p-6 text-center transition-all hover:glow-emerald"
          >
            <s.icon className="mb-3 h-8 w-8 text-primary" />
            <span className="font-heading text-3xl font-bold text-primary">{s.value}</span>
            <span className="mt-1 font-body text-sm text-silver">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;
