import { MapPin, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5551991866713?text=Olá! Gostaria de um orçamento.'

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/images/logo.png" alt="Electric Systems" className="h-7 w-auto" />
              <span className="text-text-primary font-extralight text-lg tracking-wide">
                Electric <span className="font-medium">Systems</span>
              </span>
            </div>
            <p className="text-sm font-light text-text-muted leading-relaxed tracking-wide">
              Soluções elétricas inteligentes com diagnóstico preciso,
              agilidade e organização.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5">Contato</h4>
            <div className="space-y-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary font-light tracking-wide hover:text-electric transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                (51) 99186-6713
              </a>
              <div className="flex items-start gap-2 text-text-secondary font-light tracking-wide">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span>R. Marau, 616 - Bom Princípio, Gravataí - RS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5">Serviços</h4>
            <ul className="space-y-2 text-sm font-light text-text-secondary tracking-wide">
              <li>Instalações Elétricas</li>
              <li>Manutenção Preventiva</li>
              <li>Iluminação LED</li>
              <li>Quadros Elétricos</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center">
          <p className="text-xs text-text-muted tracking-wider">
            © {new Date().getFullYear()} Electric Systems — Mário César. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
