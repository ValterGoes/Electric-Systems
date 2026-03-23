import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5551991866713?text=Olá! Gostaria de um orçamento.'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Avaliações', href: '#avaliacoes' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 md:bg-void/60 backdrop-blur-2xl border-b border-glass-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src="/images/logo.png" alt="Electric Systems" className="h-8 w-auto" />
          <span className="text-text-primary font-extralight text-lg tracking-wide">
            Electric <span className="font-medium">Systems</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] bg-brand/10 hover:bg-brand/20 text-brand border border-brand/20 hover:border-brand/40 px-5 py-2.5 rounded-full transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-void border-b border-glass-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileOpen(false)
                    const target = document.querySelector(link.href)
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 350)
                    }
                  }}
                  className="text-xs uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] bg-brand/10 text-brand border border-brand/20 px-5 py-2.5 rounded-full transition-all text-center"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
