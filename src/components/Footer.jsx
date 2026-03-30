import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook, HelpCircle, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import devLogo from '../assets/logo-valtergoes.svg'

const WHATSAPP_URL = 'https://wa.me/5551991866713?text=Olá! Gostaria de um orçamento.'
const INSTAGRAM_URL = 'https://www.instagram.com/electricsystems1/'
const FACEBOOK_URL = 'https://www.facebook.com/ElectricSystems1/'
const EMAIL = 'financeiroelectric@hotmail.com'

const faqs = [
  {
    question: "Qual a área de atendimento da Electric Systems?",
    answer: "Atendemos toda a cidade de Gravataí, Cachoeirinha e região metropolitana de Porto Alegre, oferecendo serviços elétricos residenciais e comerciais com agilidade."
  },
  {
    question: "Vocês realizam orçamentos para reformas elétricas?",
    answer: "Sim! Realizamos orçamentos detalhados para reformas de fiação, troca de disjuntores e modernização de quadros elétricos em casas, apartamentos e salas comerciais."
  },
  {
    question: "O eletricista Mário César é certificado?",
    answer: "Sim, todos os nossos serviços seguem rigorosamente as normas técnicas da NBR 5410, garantindo segurança total contra curtos-circuitos e sobrecargas."
  },
  {
    question: "Quais os principais serviços realizados?",
    answer: "Somos especialistas em instalação de chuveiros, tomadas, iluminação LED, aterramento técnico, manutenção preventiva e instalação de ventiladores de teto."
  },
  {
    question: "Como solicitar um eletricista de emergência em Gravataí?",
    answer: "Você pode entrar em contato direto pelo nosso WhatsApp. Atendemos chamados para reparos urgentes em quadros de luz e problemas de falta de energia."
  }
]

/* ── FAQ Accordion Item ── */
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-glass-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-light text-text-primary tracking-wide group-hover:text-brand transition-colors duration-300">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm font-light text-text-secondary leading-relaxed tracking-wide">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── FAQ Modal ── */
function FaqModal({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl border border-glass-border bg-[#0a0a0a]/95 backdrop-blur-xl p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-glass-border text-text-muted hover:text-text-primary hover:border-glass-border-hover transition-all duration-300 cursor-pointer"
              aria-label="Fechar FAQ"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border bg-white/[0.02] text-text-muted text-[10px] uppercase tracking-[0.2em] mb-4">
                <HelpCircle className="w-3 h-3 text-brand" strokeWidth={1.5} />
                FAQ
              </div>
              <h3 className="text-xl font-extralight text-text-primary tracking-wide">
                Perguntas <span className="font-medium text-brand">Frequentes</span>
              </h3>
            </div>

            {/* Questions */}
            <div>
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-glass-border pt-16 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/images/logo.png" alt="Electric Systems — logotipo" className="h-7 w-auto" />
                <span className="text-text-primary font-extralight text-lg tracking-wide">
                  Electric <span className="font-medium">Systems</span>
                </span>
              </div>
              <p className="text-sm font-light text-text-muted leading-relaxed tracking-wide mb-5">
                Soluções elétricas inteligentes com diagnóstico preciso,
                agilidade e organização.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-glass-border text-text-muted hover:text-brand hover:border-brand/40 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-glass-border text-text-muted hover:text-brand hover:border-brand/40 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-glass-border text-text-muted hover:text-brand hover:border-brand/40 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5">Contato</h4>
              <div className="space-y-3 text-sm">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary font-light tracking-wide hover:text-brand transition-colors duration-300"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                  (51) 99186-6713
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-text-secondary font-light tracking-wide hover:text-brand transition-colors duration-300"
                >
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {EMAIL}
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

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-text-muted mb-5">
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-brand" strokeWidth={1.5} />
                  FAQ
                </span>
              </h4>
              <button
                onClick={() => setFaqOpen(true)}
                className="text-sm font-light text-text-secondary tracking-wide hover:text-brand transition-colors duration-300 cursor-pointer text-left"
              >
                Perguntas Frequentes
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted tracking-wider">
              © {new Date().getFullYear()} Electric Systems — Mário César. Todos os direitos reservados.
            </p>
            <a
              href="https://valtergoes.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-text-muted hover:text-brand tracking-wider transition-colors duration-300"
              title="Desenvolvido por Valter Goes"
            >
              <span>Desenvolvido por</span>
              <img src={devLogo} alt="Valter Goes" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </footer>

      {/* FAQ Modal */}
      <FaqModal isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  )
}
