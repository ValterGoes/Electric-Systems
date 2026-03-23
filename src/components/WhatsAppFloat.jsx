import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5551991866713?text=Olá! Gostaria de um orçamento.'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tooltipDismissed, setTooltipDismissed] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px — works reliably on all screen sizes
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (visible && !tooltipDismissed) {
      const timer = setTimeout(() => setShowTooltip(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [visible, tooltipDismissed])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !tooltipDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="relative bg-void border border-glass-border rounded-xl px-4 py-3 shadow-2xl max-w-[240px] mb-2"
              >
                <button
                  onClick={() => setTooltipDismissed(true)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-void border border-glass-border rounded-full flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                >
                  <X className="w-3 h-3" strokeWidth={2} />
                </button>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Precisa de um orçamento?
                  <br /><span className="text-brand font-medium">Fale agora</span> com o <span className="whitespace-nowrap">Mário César!</span>
                </p>
                {/* Arrow pointing right */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-void border-r border-b border-glass-border rotate-[-45deg]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamar no WhatsApp"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.45)] transition-all duration-300"
          >
            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

            <svg
              className="w-7 h-7 text-white relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
