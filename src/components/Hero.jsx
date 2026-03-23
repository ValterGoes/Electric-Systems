import { motion } from 'framer-motion'
import { Zap, ArrowRight, MapPin } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5551991866713?text=Olá! Gostaria de um orçamento.'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="Mário César — Electric Systems"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/70 to-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative max-w-6xl mx-auto w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-void/40 backdrop-blur-sm text-text-muted text-xs uppercase tracking-[0.2em] mb-10"
          >
            <Zap className="w-3 h-3 text-brand" strokeWidth={1.5} />
            Eletricista Profissional
          </motion.div>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-extralight text-text-primary leading-[1.1] tracking-tight"
          >
            Soluções Elétricas
            <br />
            <span className="font-medium text-brand">Inteligentes</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-base sm:text-lg font-light text-text-secondary max-w-xl leading-relaxed tracking-wide"
          >
            Diagnóstico preciso e agilidade em problemas complexos.
            Organização e limpeza que você percebe na primeira visita.
          </motion.p>

          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-brand hover:bg-brand-dark text-void text-sm font-medium tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,214,0,0.15)] hover:shadow-[0_0_50px_rgba(255,214,0,0.25)]"
            >
              Chamar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm font-light tracking-wider px-8 py-4 rounded-full border border-glass-border hover:border-glass-border-hover backdrop-blur-sm transition-all duration-300"
            >
              Ver Serviços
            </a>
          </motion.div>

          <motion.div
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.15em] text-text-muted"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand/60" strokeWidth={1.5} />
              Gravataí, RS
            </div>
            <div className="w-px h-3 bg-glass-border" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-brand fill-brand" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1">5.0 Google</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
