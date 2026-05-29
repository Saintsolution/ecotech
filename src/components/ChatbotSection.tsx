import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Loader2 } from "lucide-react";

// 🎯 TEXTO DEFINITIVO ATUALIZADO COM O SIMULADOR
const INITIAL_MSG = "Olá! Sou o Dr. Ecofiltros Seriotex, seu consultor e especialista em engenharia de frotas. Você quer saber exatamente quanto pode economizar por mês e por ano na sua operação com o nosso sistema? Para começarmos o seu cálculo, me diga: quantos caminhões você tem na frota e qual a KM média rodada por mês?";

const ChatbotSection = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: INITIAL_MSG }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) throw new Error("Erro na resposta do servidor");

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ops, tive um problema técnico. Pode tentar novamente em instantes?" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-sans text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        <Bot className="h-5 w-5 text-emerald-400" />
        Dr. Ecofiltros Seriotex
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex h-[32rem] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-96">
      {/* Header */}
      <div className="flex items-center justify-between bg-emerald-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-white" />
          <span className="font-sans text-sm font-bold text-white">Dr. Ecofiltros Seriotex</span>
        </div>
        <button onClick={() => setOpen(false)}>
          <X className="h-5 w-5 text-white/70 hover:text-white" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                msg.role === "user"
                  ? "bg-emerald-600 text-white rounded-tr-none"
                  : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-slate-100 p-4 bg-white">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite seus dados operacionais aqui..."
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend} 
            disabled={isLoading}
            className="rounded-xl bg-emerald-600 p-2.5 text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;