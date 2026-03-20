import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Settings, Package, Users, DollarSign } from "lucide-react";
import { useState } from "react";

const salesData = [
  { month: "Jan", vendas: 12 },
  { month: "Fev", vendas: 19 },
  { month: "Mar", vendas: 15 },
  { month: "Abr", vendas: 24 },
  { month: "Mai", vendas: 31 },
  { month: "Jun", vendas: 28 },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "config" | "inventory">("dashboard");

  return (
    <main className="py-16">
      <div className="container">
        <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">
          Painel <span className="text-gradient-emerald">Administrativo</span>
        </h1>

        {/* Tabs */}
        <div className="mb-8 flex gap-2">
          {[
            { key: "dashboard" as const, label: "Dashboard", icon: BarChart },
            { key: "config" as const, label: "Configurações", icon: Settings },
            { key: "inventory" as const, label: "Inventário", icon: Package },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 font-heading text-sm font-semibold transition-colors ${
                activeTab === tab.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <>
            {/* KPI Cards */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <DollarSign className="mb-2 h-8 w-8 text-primary" />
                <span className="block font-heading text-3xl font-bold text-foreground">R$ 12.450</span>
                <span className="font-body text-sm text-muted-foreground">Vendas Totais</span>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <Users className="mb-2 h-8 w-8 text-primary" />
                <span className="block font-heading text-3xl font-bold text-foreground">47</span>
                <span className="font-body text-sm text-muted-foreground">Leads Gerados</span>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <DollarSign className="mb-2 h-8 w-8 text-primary" />
                <span className="block font-heading text-3xl font-bold text-foreground">R$ 623</span>
                <span className="font-body text-sm text-muted-foreground">Comissões Acumuladas</span>
              </div>
            </div>

            {/* Chart */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Vendas Mensais</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(160 12% 88%)" />
                  <XAxis dataKey="month" stroke="hsl(160 10% 45%)" fontSize={12} />
                  <YAxis stroke="hsl(160 10% 45%)" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="vendas" fill="hsl(153 50% 36%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {activeTab === "config" && (
          <div className="max-w-xl space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Integrações</h3>
              <div className="space-y-4">
                {["OpenAI API Key", "Asaas Token", "n8n Webhook URL (Hetzner)"].map((label) => (
                  <div key={label}>
                    <label className="mb-1 block font-body text-sm font-medium text-foreground">{label}</label>
                    <input
                      type="password"
                      placeholder={`Insira ${label}`}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                ))}
                <button className="rounded-lg bg-primary px-6 py-2 font-heading text-sm font-semibold text-primary-foreground hover:bg-accent">
                  Salvar Configurações
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-heading text-sm font-bold text-foreground">Produto</th>
                  <th className="px-4 py-3 text-left font-heading text-sm font-bold text-foreground">Preço</th>
                  <th className="px-4 py-3 text-left font-heading text-sm font-bold text-foreground">Link de Pagamento</th>
                  <th className="px-4 py-3 text-left font-heading text-sm font-bold text-foreground">Ações</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Rubbi Air 5", price: "R$ 389,90" },
                  { name: "Rubbi Air 10", price: "R$ 549,90" },
                  { name: "HARCAP Diesel Pro", price: "R$ 459,90" },
                  { name: "Vello Clean", price: "R$ 2.890,00" },
                ].map((p) => (
                  <tr key={p.name} className="border-t border-border">
                    <td className="px-4 py-3 font-body text-sm text-foreground">{p.name}</td>
                    <td className="px-4 py-3 font-body text-sm text-foreground">{p.price}</td>
                    <td className="px-4 py-3">
                      <input
                        placeholder="Link Asaas"
                        className="w-full rounded border border-input bg-background px-2 py-1 font-body text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <button className="rounded bg-primary px-3 py-1 font-heading text-xs font-semibold text-primary-foreground hover:bg-accent">
                        Salvar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPage;
