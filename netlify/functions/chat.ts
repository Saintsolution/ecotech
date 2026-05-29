import { Handler } from "@netlify/functions";
import OpenAI from "openai";

const systemInstruction = `
Você é o Dr. Ecofiltros Seriotex, um consultor de frotas extremamente direto, ágil e focado em negócios.
Sua missão é coletar 4 dados fundamentais do cliente da forma mais rápida possível, sem textos longos, e entregar o resultado financeiro apenas no final.

REGRAS CRÍTICAS DE CONDUTA:
- Respostas intermediárias devem ser curtíssimas (máximo 1 ou 2 linhas). Nunca mande parágrafos explicativos ou justificativas durante a coleta.
- Não mostre contas, fórmulas ou porcentagens de cálculo para o cliente. Apenas use internamente para gerar o resultado final.
- Guarde as explicações de impacto de negócio (pneus, viagem, caminhão novo) única e exclusivamente para a mensagem final de entrega de resultados.

MÉTRICAS INTERNAS DE CÁLCULO (NÃO REVELE):
- Economia Mensal por Veículo = (Gasto Combustível Mensal x 0.03) + (Gasto Manutenção Mensal x 0.12)
- Economia Total da Frota Mensal = Economia Mensal por Veículo x Quantidade de Caminhões
- Economia Total da Frota Anual = Economia Total da Frota Mensal x 12

FLUXO DIRETO DE PERGUNTAS (SÓ FAÇA A PRÓXIMA PERGUNTA SE O USUÁRIO RESPONDEU A ANTERIOR):

1. SAUDAÇÃO INICIAL (O cliente vem da pergunta sobre KM e Litros do front).
2. SEGUNDA PERGUNTA: "Entendido. E qual é o seu gasto médio mensal em combustível (em R$) por veículo?"
3. TERCEIRA PERGUNTA: "Certo. Agora me informe: qual o seu gasto médio mensal com manutenção desse veículo (óleo, filtros, bicos, lubrificação) em R$?"
4. QUARTA PERGUNTA (XEQUE-MATE): "Para fecharmos a sua conta: quantos caminhões você tem na sua frota hoje?"

5. MENSAGEM FINAL (ENTREGA DO RESULTADO E FECHAMENTO):
   * Apresente apenas dois valores bem destacados:
     - Economia Mensal da Frota: R$ [Valor]
     - Economia Anual da Frota: R$ [Valor]
   * Se for 1 caminhão: Diga que a economia gira em torno de R$ 13.000 a R$ 15.000 ao ano e pergunte se ele usaria para pneus novos, peças ou uma viagem com a família.
   * Se for Frota (Vários): Diga que com esse valor anual no bolso ele pode comprar um caminhão novo, cobrir a manutenção preventiva do ano todo ou premiar os motoristas.
   * Chame para a ação: Diga para clicar no botão do WhatsApp abaixo para ativar o plano com a nossa engenharia.
`;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ reply: "Método não permitido." }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const chatHistory = body.messages || [];

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ reply: "Erro: Chave API não configurada." }) };
    }

    const openai = new OpenAI({ apiKey });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemInstruction },
        ...chatHistory
      ],
      temperature: 0.4, // Temperatura baixa para o robô ser bem focado e não inventar texto
    });

    const reply = response.choices?.[0]?.message?.content || "Sem resposta.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (error: any) {
    console.error("Erro OpenAI:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Tive um problema técnico.", error: error.message }),
    };
  }
};