import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { Bot, MessageCircle, TrendingUp, CreditCard } from "lucide-react";
import { Button } from "@mui/material";

const conversations = [
  {
    user: true,
    message: "Quanto gastei com alimentação este mês",
  },
  {
    user: false,
    message:
      "Você gastou R$ 847,50 com alimentação em outubro. Isso representa 15% do seu orçamento mensal. Está dentro da meta!",
  },
  {
    user: true,
    message: "Posso comprar uma Tv de R$ 2.500?",
  },
  {
    user: false,
    message:
      "Com base na sua reserva de emergência e economia mensal, recomendo aguardar 2 meses. Assim você pode parcelar em menos vezes e pagar menos juros.",
  },
];

export default function Chat() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-green-600 via-slate-950 to-green-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initinal={{ Opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Inteligencia Artificial
            </Badge>

            <h2 className="mb-4">Conheça seu Assistente Financeiro IA</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              O FInAI Assistente está sempre pronto para responder suas duvidas,
              dar conselhos e ajudar voce a tomar decisoes financeiras
              inteligentes.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-green-500 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white">FinAI Assistente</p>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <p className="text-xs text-green-400">Online</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {conversations.map((conv, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className={`flex ${
                        conv.user ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          conv.user
                            ? "bg-green-600 text-white"
                            : "bg-white/10 text-slate-100 border border-white/10"
                        }`}
                      >
                        <p className="text-sm">{conv.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MessageCircle className="h-4 w-4" />
                    <span>Digite sua pergunta...</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-esmerald-500 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Consultas via WhatsApp</h3>
                  <p className="text-slate-300">
                    Não precisa abrir o app. Pergunte diretamente pelo WhatsApp
                    e receba respostas instantâneas sobre seus gastos e
                    finanças.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-esmerald-500 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Análises Inteligentes</h3>
                  <p className="text-slate-300">
                    A IA analisa seus padrões de consumo e identifica
                    oportunidades de economia que você nem imaginava.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-esmerald-500 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">Decisões Informadas</h3>
                  <p className="text-slate-300">
                    Antes de fazer uma compra grande, consulte o assistente e
                    receba recomendações baseadas na sua situação financeira
                    real.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto text-amber-50 bg-gradient-to-r from-green-600 to-esmerald-600 hover:from-green-700 hover:to-esmerald-700"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-amber-50" />
                <p className="text-amber-50">Conversar com o Assistente</p>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
