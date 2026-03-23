import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plug, Wrench, Lightbulb, LayoutGrid, ArrowUpRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'

const services = [
  {
    title: "Instalações Elétricas em Gravataí", // Adicionado localidade no título interno
    description:
      "Instalação completa de pontos de energia, tomadas e interruptores. Realizamos circuitos dedicados para ar-condicionado e chuveiros com total segurança técnica.",
    icon: Plug,
    images: [
      "/images/tomadas.webp",
      "/images/tomadas2.webp",
      "/images/tomadas3.webp",
      "/images/tomadas4.webp",
    ],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Manutenção e Reparos",
    description:
      "Manutenção elétrica residencial e comercial para prevenir curtos-circuitos, quedas de energia e garantir a segurança da sua fiação.",
    icon: Wrench,
    images: [
      "/images/manutencao.webp",
      "/images/manutencao2.webp",
      "/images/manutencao3.webp",
      "/images/manutencao4.webp",
    ],
    span: "",
  },
  {
    title: "Iluminação LED e Projetos",
    description:
      "Projetos de iluminação LED econômica para ambientes internos e externos, garantindo modernidade e redução no consumo de energia.",
    icon: Lightbulb,
    images: [
      "/images/led1.webp",
      "/images/led2.webp",
      "/images/led3.webp",
      "/images/led4.webp",
    ],
    span: "",
  },
  {
    title: "Quadros Elétricos e Disjuntores",
    description:
      "Montagem, organização e adequação de quadros de distribuição e troca de disjuntores conforme as normas NBR 5410.",
    icon: LayoutGrid,
    images: [
      "/images/quadro.webp",
      "/images/quadro2.webp",
      "/images/quadro3.webp",
    ],
    span: "lg:col-span-2",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

/* ── Lightbox modal ── */
function ServiceLightbox({ service, currentIndex, onClose, onPrev, onNext }) {
  const image = service.images[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all z-10"
      >
        <X className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Nav arrows */}
      {service.images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 sm:left-8 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 sm:right-8 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Image */}
      <motion.img
        key={image}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={service.title}
        className="max-w-full max-h-[80vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Footer: title + counter + thumbnails */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnail strip */}
        {service.images.length > 1 && (
          <div className="flex gap-2">
            {service.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onPrev('goto', i)}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg border overflow-hidden transition-all duration-300 ${
                  i === currentIndex
                    ? 'border-brand/50 opacity-100 ring-1 ring-brand/30'
                    : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img} alt={`${service.title} — foto ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 text-white/40 text-xs tracking-widest uppercase">
          <span className="text-brand font-medium">{service.title}</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{currentIndex + 1} / {service.images.length}</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Service Card ── */
function ServiceCard({ service, index, onOpenGallery }) {
  const mainImage = service.images[0]
  const extraImages = service.images.slice(1, 4)
  const isLarge = service.span.includes('row-span-2')
  const hasMultiple = service.images.length > 1

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      className={`group relative rounded-2xl border border-glass-border overflow-hidden transition-all duration-500 hover:border-glass-border-hover ${service.span}`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={mainImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Mini gallery thumbnails for large cards */}
        {isLarge && extraImages.length > 0 && (
          <div className="flex gap-2 mb-6">
            {extraImages.map((img, i) => (
              <button
                key={i}
                onClick={() => onOpenGallery(service, i + 1)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-white/10 overflow-hidden opacity-70 hover:opacity-100 hover:border-brand/30 transition-all duration-500 cursor-pointer"
              >
                <img src={img} alt={`${service.title} — exemplo ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <service.icon className="w-4 h-4 text-brand" strokeWidth={1.5} />
              <h3 className="text-lg font-light text-white tracking-wide">
                {service.title}
              </h3>
            </div>
            <p className="text-sm font-light text-white/60 tracking-wide leading-relaxed max-w-md">
              {service.description}
            </p>
          </div>

          {/* Arrow button → opens gallery */}
          {hasMultiple ? (
            <button
              onClick={() => onOpenGallery(service, 0)}
              className="shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 hover:text-brand hover:border-brand/30 group-hover:text-brand group-hover:border-brand/30 transition-all duration-500 cursor-pointer"
              aria-label={`Ver fotos de ${service.title}`}
            >
              <Images className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          ) : (
            <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/40 group-hover:text-brand group-hover:border-brand/30 transition-all duration-500">
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Section ── */
export default function BentoGrid() {
  const [lightbox, setLightbox] = useState({ open: false, service: null, index: 0 })

  const openGallery = (service, startIndex) => {
    setLightbox({ open: true, service, index: startIndex })
  }

  const closeLightbox = () => setLightbox({ open: false, service: null, index: 0 })

  const navigate = (dirOrGoto, gotoIndex) => {
    if (dirOrGoto === 'goto' && typeof gotoIndex === 'number') {
      setLightbox((s) => ({ ...s, index: gotoIndex }))
      return
    }
    // used by prev button
    setLightbox((s) => ({
      ...s,
      index: (s.index - 1 + s.service.images.length) % s.service.images.length,
    }))
  }

  const nextImage = () => {
    setLightbox((s) => ({
      ...s,
      index: (s.index + 1) % s.service.images.length,
    }))
  }

  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border bg-glass text-text-muted text-xs uppercase tracking-[0.2em] mb-6"
          >
            Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extralight text-text-primary tracking-tight"
          >
            Soluções completas em{' '}
            <span className="font-medium text-brand">eletricidade</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[240px] gap-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              onOpenGallery={openGallery}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && lightbox.service && (
          <ServiceLightbox
            service={lightbox.service}
            currentIndex={lightbox.index}
            onClose={closeLightbox}
            onPrev={navigate}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
