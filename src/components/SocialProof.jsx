import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    name: 'Maria Eduarda',
    initials: 'ME',
    text: 'Resolveu a iluminação do banheiro que ninguém achava o problema. Deixou tudo organizado e limpo.',
    rating: 5,
  },
  {
    name: 'André Ferrari',
    initials: 'AF',
    text: 'Técnico preparado, achou o defeito com habilidade. Nota 10!',
    rating: 5,
  },
  {
    name: 'Bruna Rafaella',
    initials: 'BR',
    text: 'Agilidade e interessado em resolver o problema. Recomendo demais o serviço do Mário!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    initials: 'CM',
    text: 'Profissional sério, pontual e muito atencioso. Fez toda a instalação elétrica do meu escritório com perfeição.',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    initials: 'JC',
    text: 'Excelente trabalho na troca do quadro elétrico. Explicou tudo com paciência e deixou tudo funcionando perfeitamente.',
    rating: 5,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function SocialProof() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))

  return (
    <section id="avaliacoes" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border bg-glass text-text-muted text-xs uppercase tracking-[0.2em] mb-6">
            <Star className="w-3 h-3 fill-brand text-brand" strokeWidth={1.5} />
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extralight text-text-primary tracking-tight">
            O que dizem nossos{' '}
            <span className="font-medium text-brand">clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-10 sm:p-14 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand fill-brand" strokeWidth={1.5} />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl text-text-primary font-extralight leading-relaxed tracking-wide max-w-2xl mx-auto">
                  "{reviews[current].text}"
                </blockquote>

                <div className="mt-10 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-xs font-medium tracking-wider">
                    {reviews[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="text-text-primary text-sm font-light tracking-wide">{reviews[current].name}</p>
                    <p className="text-text-muted text-xs tracking-wider uppercase">Cliente verificado</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-glass-border bg-surface hover:bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-300"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-glass-border bg-surface hover:bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-300"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? 'bg-brand w-8' : 'bg-glass-border w-1 hover:bg-text-muted'
              }`}
              aria-label={`Ir para avaliação ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
