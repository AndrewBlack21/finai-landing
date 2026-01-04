import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Ajustei para text-white para combinar com o tema */}
              <BarChart3 className="w-6 h-6 text-white" />
              <span className="text-xl font-bold">FinAI</span>
            </div>
            <p className="text-white/80 text-sm">
              Seu assistente financeiro inteligente para controle total das suas
              finanças.
            </p>
          </div>

          {/* Colunas de Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#39FF14] transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2024 FinAI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
