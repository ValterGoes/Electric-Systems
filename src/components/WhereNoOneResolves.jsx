import { motion } from 'framer-motion'
import { Search, CheckCircle, Quote } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function WhereNoOneResolves() {
  return (
    <section id="diferenciais" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Main content — spans 3 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="lg:col-span-3 rounded-2xl border border-glass-border bg-glass backdrop-blur-xl p-10 sm:p-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/15 bg-brand/5 text-brand text-xs uppercase tracking-[0.2em] mb-8">
              <Search className="w-3 h-3" strokeWidth={1.5} />
              Diagnóstico
            </span>

            <h2 className="text-3xl sm:text-4xl font-extralight text-text-primary leading-tight tracking-tight">
              Onde ninguém resolve,
              <br />
              <span className="font-medium text-brand">a gente encontra.</span>
            </h2>

            <p className="mt-6 text-text-secondary font-light leading-relaxed tracking-wide">
              Problemas elétricos ocultos exigem mais que experiência — exigem método.
              Com diagnóstico preciso e equipamento profissional, encontramos defeitos
              que outros não conseguem identificar.
            </p>

            <div className="mt-10 space-y-4">
              {[
                'Localização de falhas em fiação embutida',
                'Diagnóstico de curtos intermitentes',
                'Organização e limpeza pós-serviço',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-text-secondary font-light tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial card — spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}
            className="lg:col-span-2 rounded-2xl border border-glass-border bg-glass backdrop-blur-xl p-10 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-brand/20 mb-6" strokeWidth={1} />
              <blockquote className="text-text-primary font-light text-lg leading-relaxed tracking-wide">
                "Resolveu a iluminação do banheiro que ninguém achava o problema.
                Deixou tudo organizado e limpo."
              </blockquote>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-xs font-medium tracking-wider">
                ME
              </div>
              <div>
                <p className="text-text-primary text-sm font-light tracking-wide">Maria Eduarda</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-brand fill-brand" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
