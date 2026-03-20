import { Handler } from "@netlify/functions";
import OpenAI from "openai";

const systemInstruction = `
Você é o Sr. EcofiltrosSeriotex, consultor técnico sênior da Ecofiltro Harcap.
DADOS MESTRE:
- Tecnologia HARCAP: Hidrofóbica e apolar. Fibra resinada com 20mm de espessura.
- LINHA DIESEL: Retém partículas de até 5 micras e 99,9% da água. 60.000 km ou 600 horas.
- LINHA AR (RUBBI AIR): Retém 0,5 micra e 99,9% da água. Corpo permanente.
- ATITUDE: Técnico e prestativo. Para vendas, direcione ao WhatsApp.
`;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ reply: "Método não permitido." }) 
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const message = body.message;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ reply: "Erro: Chave API não configurada." }),
      };
    }

    const openai = new OpenAI({ apiKey });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: message },
      ],
      temperature: 0.7,
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
      body: JSON.stringify({ reply: "Tive um problema técnico. Tente de novo!", error: error.message }),
    };
  }
};