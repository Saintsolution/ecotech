import ProductCard from "@/components/ProductCard";
import filterDiesel from "@/assets/filter-diesel.png";
import { Droplets, Shield, Gauge, AlertTriangle, CheckCircle, ArrowDown, Wrench } from "lucide-react";

const dieselProducts = [
  {
    name: "HARCAP Diesel Pro",
    image: filterDiesel,
    specs: [
      "99,9% de separação de água",
      "Filtragem de 5 micras no diesel",
      "Durabilidade: 60.000 km ou 600 horas",
      "Tecnologia HARCAP integrada",
      "Protege sistema de injeção common rail",
    ],
    price: "R$ 459,90",
  },
  {
    name: "Vello Clean — Diálise de Diesel",
    image: filterDiesel,
    specs: [
      "Máquina de diálise para diesel",
      "Remove 100% de água e impurezas",
      "Processo contínuo de purificação",
      "Ideal para tanques de armazenamento",
      "Aumenta vida útil do motor em até 3x",
    ],
    price: "R$ 2.890,00",
  },
];

const ProductsDieselPage = () => (
  <main>
    {/* Hero Banner */}
    <section className="bg-surface-dark py-20">
      <div className="container max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-heading text-xs font-semibold tracking-wider text-primary">
          SEPARAÇÃO DE ÁGUA 99,9%
        </span>
        <h1 className="mb-4 font-heading text-4xl font-bold text-surface-dark-foreground md:text-5xl">
          Diesel Limpo é <span className="text-gradient-emerald">Motor Saudável</span>
        </h1>
        <p className="mx-auto max-w-2xl font-body text-lg text-silver">
          No Brasil, até <strong className="text-surface-dark-foreground">30% do diesel vendido contém excesso de água e impurezas</strong>. 
          Isso destrói bicos injetores, bombas e turbocompressores. A pergunta não é "se" vai dar problema — é "quando".
        </p>
      </div>
    </section>

    {/* Problem / Pain Point */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h2 className="font-heading text-2xl font-bold text-foreground">O Problema é Silencioso</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 font-body text-foreground leading-relaxed">
                Água no diesel é o <strong>inimigo número 1</strong> dos motores modernos com sistema common rail. Os bicos injetores trabalham com pressões de até 2.000 bar — qualquer gota de água causa:
              </p>
              <ul className="space-y-2">
                {[
                  "Corrosão interna dos bicos injetores (reparo: R$ 3.000+)",
                  "Falha da bomba de alta pressão (reparo: R$ 8.000+)",
                  "Perda de potência e aumento de fumaça",
                  "Paradas não programadas e lucro cessante",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-card p-6 text-center">
              <Wrench className="mx-auto mb-2 h-8 w-8 text-destructive" />
              <span className="font-heading text-4xl font-bold text-destructive">R$ 11.000+</span>
              <span className="mt-1 font-body text-sm text-muted-foreground">custo médio de reparo por água no diesel</span>
              <div className="my-3 border-t border-border" />
              <span className="font-heading text-3xl font-bold text-destructive">72h+</span>
              <span className="mt-1 font-body text-sm text-muted-foreground">de veículo parado na oficina</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Solution */}
    <section className="bg-muted py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-2 text-center font-heading text-3xl font-bold text-foreground">
          A Blindagem que seu Diesel <span className="text-gradient-emerald">Precisa</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center font-body text-muted-foreground">
          Tecnologia HARCAP: 99,9% da água é separada antes de chegar ao motor.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Droplets, title: "99,9% Separação", desc: "A água é removida com eficiência quase total, protegendo bicos injetores e bomba de alta pressão de corrosão e cavitação." },
            { icon: Shield, title: "5 Micras de Filtragem", desc: "Partículas microscópicas de sujeira são retidas, garantindo que apenas diesel ultra-limpo alimente o sistema common rail." },
            { icon: Gauge, title: "60.000 km de Proteção", desc: "Um único filtro HARCAP substitui 6 trocas de filtros convencionais. Menos paradas, menos custos, mais produtividade." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 text-center">
              <item.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Calculator */}
    <section className="py-16">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-foreground">
          Faça as Contas: <span className="text-gradient-emerald">Quanto Você Economiza?</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-heading text-lg font-bold text-muted-foreground">❌ Sem HARCAP (por ano)</h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>6 trocas de filtro × R$ 120 = <strong className="text-foreground">R$ 720</strong></li>
              <li>Risco de reparo de injetores = <strong className="text-foreground">R$ 3.000+</strong></li>
              <li>Risco de bomba de alta = <strong className="text-foreground">R$ 8.000+</strong></li>
              <li>Paradas não programadas = <strong className="text-foreground">Lucro cessante</strong></li>
            </ul>
            <div className="mt-4 border-t border-border pt-3">
              <span className="font-heading text-xl font-bold text-destructive">Risco: R$ 11.720+/ano</span>
            </div>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 glow-emerald">
            <h3 className="mb-4 font-heading text-lg font-bold text-primary">✅ Com HARCAP (por ano)</h3>
            <ul className="space-y-2 font-body text-sm text-foreground">
              <li>1 filtro HARCAP = <strong>R$ 459,90</strong></li>
              <li>Proteção total de injetores = <strong className="text-primary">R$ 0 em reparos</strong></li>
              <li>Proteção total da bomba = <strong className="text-primary">R$ 0 em reparos</strong></li>
              <li>Zero paradas por diesel contaminado</li>
            </ul>
            <div className="mt-4 border-t border-primary/20 pt-3">
              <span className="font-heading text-xl font-bold text-primary">Investimento: R$ 459,90/ano</span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center font-heading text-lg font-bold text-foreground">
          Economia potencial: <span className="text-gradient-emerald text-2xl">R$ 11.260+ por veículo/ano</span>
        </p>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="bg-muted py-16">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-foreground">
          Comparativo Técnico
        </h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-primary">
              <tr>
                <th className="px-4 py-3 text-left font-heading text-sm font-bold text-primary-foreground">Característica</th>
                <th className="px-4 py-3 text-center font-heading text-sm font-bold text-primary-foreground">HARCAP</th>
                <th className="px-4 py-3 text-center font-heading text-sm font-bold text-muted">Convencional</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Separação de água", "99,9%", "60-70%"],
                ["Filtragem", "5 micras", "20-30 micras"],
                ["Durabilidade", "60.000 km", "10.000 km"],
                ["Proteção common rail", "Total", "Parcial"],
                ["Custo por km rodado", "R$ 0,007", "R$ 0,072"],
              ].map(([feat, harcap, conv], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-4 py-3 font-body text-sm font-medium text-foreground">{feat}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                      <CheckCircle className="h-4 w-4" /> {harcap}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center font-body text-sm text-muted-foreground">{conv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* CTA to Products */}
    <section className="py-10">
      <div className="container flex flex-col items-center text-center">
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Proteja seu Investimento Agora</h2>
        <p className="mb-4 font-body text-muted-foreground">Escolha a solução ideal para sua operação.</p>
        <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
      </div>
    </section>

    {/* Products */}
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground">
          Soluções para <span className="text-gradient-emerald">Diesel</span>
        </h2>
        <p className="mb-10 max-w-xl font-body text-muted-foreground">
          Do filtro individual à máquina de diálise para tanques — temos a solução certa para cada operação.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {dieselProducts.map((p) => (
            <ProductCard key={p.name} {...p} category="diesel" />
          ))}
        </div>
      </div>
    </section>

    {/* Guarantee */}
    <section className="border-t border-border bg-surface-dark py-16">
      <div className="container max-w-3xl text-center">
        <h2 className="mb-4 font-heading text-2xl font-bold text-surface-dark-foreground">
          Garantia de Performance
        </h2>
        <p className="mx-auto max-w-xl font-body text-silver leading-relaxed">
          Se nosso filtro não atingir os <strong className="text-primary">99,9% de separação de água</strong> prometidos, 
          a substituição é imediata e por nossa conta. Confiamos na tecnologia HARCAP porque ela <strong className="text-surface-dark-foreground">simplesmente funciona</strong>.
        </p>
      </div>
    </section>
  </main>
);

export default ProductsDieselPage;
