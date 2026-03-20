import { Leaf, PiggyBank, ShieldCheck, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    headline: "Menos Descarte, Mais Planeta",
    desc: "Um filtro HARCAP substitui 6 filtros de papel. Isso significa 80% menos resíduo industrial no meio ambiente e uma operação mais limpa e responsável.",
  },
  {
    icon: PiggyBank,
    title: "Economia",
    headline: "Seu Dinheiro Trabalhando Melhor",
    desc: "Com durabilidade de 60.000 km, você elimina trocas frequentes, reduz paradas e economiza até R$ 11.000/ano em manutenção evitável por veículo.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção",
    headline: "Blindagem Total para seu Motor",
    desc: "Filtragem de 0,5 micras no ar e 99,9% de separação de água no diesel. Seus bicos injetores, turbo e câmara de combustão protegidos como nunca.",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    headline: "HARCAP: Engenharia de Ponta",
    desc: "Desenvolvida para superar os limites dos filtros convencionais de papel. 5 micras no diesel, 0,5 micras no ar — precisão que faz diferença real.",
  },
];

const PillarsSection = () => (
  // Adicionei bg-[#1b4332] para o verde escuro
  <section className="py-20 bg-[#1b4332]">
    <div className="container">
      {/* Ajustei o texto de por que para text-emerald-200 */}
      <span className="mb-4 block text-center font-heading text-xs font-semibold tracking-[0.2em] text-emerald-200">
        POR QUE ECOFILTROS SERIOTEX
      </span>
      {/* Mudei o título para text-white */}
      <h2 className="mb-3 text-center font-heading text-3xl font-bold text-white md:text-4xl">
        4 Pilares de uma <span className="text-gradient-emerald">Nova Era</span> em Filtragem
      </h2>
      {/* Mudei a descrição para text-emerald-50 */}
      <p className="mx-auto mb-14 max-w-2xl text-center font-body text-emerald-50">
        Não somos apenas um filtro. Somos uma mudança de mentalidade — onde performance, economia e responsabilidade ambiental andam juntas.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <div
            key={i}
            // Mantive bg-card para o card continuar claro e contrastar no verde escuro
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative gradient corner - ajuste para suavizar no card claro */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mb-1 block font-heading text-xs font-semibold tracking-wider text-primary">
                {p.title.toUpperCase()}
              </span>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{p.headline}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stat bar - escureci o fundo para bg-[#0c1f17] */}
      <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl bg-[#0c1f17] p-6 sm:grid-cols-4">
        {[
          { value: "0,5μm", label: "Filtragem de Ar" },
          { value: "99,9%", label: "Separação de Água" },
          { value: "60.000km", label: "Durabilidade" },
          { value: "80%", label: "Menos Resíduo" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <span className="block font-heading text-2xl font-bold text-primary md:text-3xl">{s.value}</span>
            <span className="font-body text-xs text-silver">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;