import ProductCard from "@/components/ProductCard";
import filterAir from "@/assets/filter-air.png";
import { Shield, Zap, Clock, AlertTriangle, CheckCircle, ArrowDown } from "lucide-react";

const airProducts = [
  {
    name: "Rubbi Air 5",
    image: filterAir,
    specs: [
      "Filtragem de 0,5 micras",
      "Durabilidade: 60.000 km or 600 horas",
      "Tecnologia HARCAP integrada",
      "Compatível com motores pesados",
      "6x mais durável que filtros de papel",
    ],
    price: "R$ 389,90",
  },
  {
    name: "Rubbi Air 10",
    image: filterAir,
    specs: [
      "Filtragem de 0,5 micras — versão estendida",
      "Durabilidade: 60.000 km or 600 horas",
      "Fluxo de ar superior para motores de grande porte",
      "Tecnologia HARCAP integrada",
      "Redução de manutenção em até 80%",
    ],
    price: "R$ 549,90",
  },
];

const ProductsAirPage = () => (
  <main className="bg-background">
    {/* 1. Hero Banner - PRETO (Mantido) */}
    <section className="bg-surface-dark py-20">
      <div className="container max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-heading text-xs font-semibold tracking-wider text-primary">
          TECNOLOGIA HARCAP
        </span>
        <h1 className="mb-4 font-heading text-4xl font-bold text-surface-dark-foreground md:text-5xl">
          Seu Motor Merece Respirar <span className="text-gradient-emerald">Ar Puro</span>
        </h1>
        <p className="mx-auto max-w-2xl font-body text-lg text-silver">
          A cada segundo, seu motor aspira milhares de litros de ar. Se esse ar chega sujo, o desgaste é inevitável. 
          Nossos filtros HARCAP não apenas filtram — eles <strong className="text-surface-dark-foreground">protegem o coração da sua máquina</strong>.
        </p>
      </div>
    </section>

    {/* 2. Problem / Pain Point - VERDE PASTEL (Aqui era escuro antes) */}
    <section className="py-16 bg-[#e8f5e9]">
      <div className="container max-w-4xl">
        {/* Recuperei as cores originais de destructive/muted para destacar no fundo claro */}
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 md:p-10 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Você Sabia?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 font-body text-foreground leading-relaxed">
                Filtros de ar convencionais usam <strong>papel com poros de 1mm</strong> — isso significa que partículas menores passam direto para dentro do motor, causando:
              </p>
              <ul className="space-y-2">
                {[
                  "Desgaste prematuro de pistões e anéis",
                  "Perda de potência progressiva",
                  "Aumento de consumo de combustível",
                  "Trocas a cada 10.000 km (custo recorrente alto)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Recuperei bg-white para o card central de prejuízo saltar */}
            <div className="flex flex-col justify-center rounded-xl bg-white p-6 text-center border border-border/50 shadow-inner">
              <span className="font-heading text-5xl font-bold text-destructive">6x</span>
              <span className="mt-1 font-body text-sm text-muted-foreground">mais trocas com filtros de papel</span>
              <span className="mt-3 font-heading text-4xl font-bold text-destructive">R$ 2.300+</span>
              <span className="mt-1 font-body text-sm text-muted-foreground">gastos em manutenção evitável por ano</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 3. Solution - VERDE ESCURO (Aqui era pastel antes) */}
    <section className="!bg-[#1b4332] py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-2 text-center font-heading text-3xl font-bold text-white">
          A Solução: Filtragem de <span className="text-gradient-emerald">0,5 Micras</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center font-body text-emerald-50">
          Nossos filtros HARCAP capturam partículas 2.000x menores que os filtros convencionais.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Shield, title: "Proteção Total", desc: "Bloqueia até as menores impurezas, protegendo pistões e turbo." },
            { icon: Clock, title: "60.000 km Úteis", desc: "Economia real de tempo e dinheiro com trocas estendidas." },
            { icon: Zap, title: "Desempenho", desc: "Fluxo otimizado mantém a potência e reduz o consumo." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <item.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-lg font-bold text-white">{item.title}</h3>
              <p className="font-body text-sm text-emerald-100/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Comparison - BRANCO (Mantido - Foco no conteúdo técnico) */}
    <section className="py-16 bg-white">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-foreground">
          Comparativo: HARCAP vs. Convencional
        </h2>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full">
            <thead className="bg-[#1b4332]">
              <tr>
                <th className="px-4 py-3 text-left font-heading text-sm font-bold text-white">Característica</th>
                <th className="px-4 py-3 text-center font-heading text-sm font-bold text-white">HARCAP</th>
                <th className="px-4 py-3 text-center font-heading text-sm font-bold text-emerald-200">Convencional</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Filtragem", "0,5 micras", "1.000 micras (1mm)"],
                ["Durabilidade", "60.000 km", "10.000 km"],
                ["Material", "Tecnologia avançada", "Papel"],
                ["Proteção do motor", "Total", "Parcial"],
                ["Custo anual", "Menor", "Até 6x maior"],
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

    {/* 5. CTA to Products - VERDE ESCURO (Mantido - Destaque antes dos produtos) */}
    <section className="!bg-[#1b4332] py-12">
      <div className="container flex flex-col items-center text-center">
        <h2 className="mb-2 font-heading text-2xl font-bold text-white">Pronto para Proteger seu Motor?</h2>
        <p className="mb-4 font-body text-emerald-50/80">Escolha o filtro ideal para sua aplicação abaixo.</p>
        <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
      </div>
    </section>

    {/* 6. Products Listing - VERDE PASTEL (Mantido - Fundo suave para os cards brancos) */}
    <section className="py-16 bg-[#e8f5e9]">
      <div className="container">
        <h2 className="mb-2 font-heading text-3xl font-bold text-foreground">
          Nossos Filtros de <span className="text-gradient-emerald">Ar</span>
        </h2>
        <p className="mb-10 max-w-xl font-body text-muted-foreground">
          Cada filtro é projetado para máxima eficiência e durabilidade em aplicações pesadas.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {airProducts.map((p) => (
            <ProductCard key={p.name} {...p} category="ar" />
          ))}
        </div>
      </div>
    </section>

    {/* 7. Guarantee - PRETO FINAL (Mantido) */}
    <section className="border-t border-border bg-surface-dark py-16">
      <div className="container max-w-3xl text-center">
        <h2 className="mb-4 font-heading text-2xl font-bold text-surface-dark-foreground">
          Garantia de Satisfação
        </h2>
        <p className="mx-auto max-w-xl font-body text-silver leading-relaxed">
          Estamos tão confiantes na qualidade dos nossos filtros que oferecemos <strong className="text-primary">garantia total de desempenho</strong>. Se o filtro não atingir a performance prometida, a troca é por nossa conta. Sem perguntas.
        </p>
      </div>
    </section>
  </main>
);

export default ProductsAirPage;