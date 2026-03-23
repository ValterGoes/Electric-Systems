import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Building2, Home, TreePine, Hotel, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'todos',
    label: 'Todos',
    icon: Layers,
  },
  {
    id: 'apartamentos',
    label: 'Apartamentos',
    icon: Building2,
  },
  {
    id: 'casas',
    label: 'Casas',
    icon: Home,
  },
  {
    id: 'pousadas',
    label: 'Pousadas',
    icon: Hotel,
  },
  {
    id: 'sitios',
    label: 'Sítios',
    icon: TreePine,
  },
  {
    id: 'outros',
    label: 'Outros',
    icon: Camera,
  },
]

const projects = [
  // Apartamentos
  { src: '/images/ap1.webp', alt: 'Projeto elétrico apartamento — instalação completa', category: 'apartamentos' },
  { src: '/images/ap2.webp', alt: 'Projeto elétrico apartamento — quadro e fiação', category: 'apartamentos' },
  { src: '/images/ap3.webp', alt: 'Projeto elétrico apartamento — acabamento', category: 'apartamentos' },
  { src: '/images/ap4.webp', alt: 'Projeto elétrico apartamento — iluminação', category: 'apartamentos' },

  // Casas
  { src: '/images/casa1.webp', alt: 'Projeto elétrico residencial — casa completa', category: 'casas' },
  { src: '/images/casa2.webp', alt: 'Projeto elétrico residencial — instalação', category: 'casas' },
  { src: '/images/casa3.webp', alt: 'Projeto elétrico residencial — acabamento', category: 'casas' },
  { src: '/images/casa4.webp', alt: 'Projeto elétrico residencial — finalização', category: 'casas' },

  // Pousadas
  { src: '/images/pousada1.webp', alt: 'Projeto elétrico pousada — instalação geral', category: 'pousadas' },
  { src: '/images/pousada2.webp', alt: 'Projeto elétrico pousada — iluminação', category: 'pousadas' },
  { src: '/images/pousada3.webp', alt: 'Projeto elétrico pousada — acabamento', category: 'pousadas' },

  // Sítios
  { src: '/images/sitio1.webp', alt: 'Projeto elétrico sítio — instalação rural', category: 'sitios' },
  { src: '/images/sitio2.webp', alt: 'Projeto elétrico sítio — finalização', category: 'sitios' },

  // Outros
  { src: '/images/outros2.webp', alt: 'Projeto elétrico comercial', category: 'outros' },
  { src: '/images/outros3.webp', alt: 'Instalação elétrica especial', category: 'outros' },
  { src: '/images/outros4.webp', alt: 'Projeto elétrico industrial', category: 'outros' },
  { src: '/images/outros5.webp', alt: 'Manutenção elétrica', category: 'outros' },
  { src: '/images/outros6.webp', alt: 'Serviço elétrico especializado', category: 'outros' },
  { src: '/images/outros7.webp', alt: 'Instalação customizada', category: 'outros' },
  { src: '/images/outros8.webp', alt: 'Projeto elétrico sob medida', category: 'outros' },
  { src: '/images/outros9.webp', alt: 'Trabalho elétrico profissional', category: 'outros' },
  { src: '/images/3.webp', alt: 'Projeto finalizado', category: 'outros' },
  { src: '/images/4.webp', alt: 'Serviço concluído', category: 'outros' },
  { src: '/images/5.webp', alt: 'Instalação profissional', category: 'outros' },
  { src: '/images/6.webp', alt: 'Trabalho especializado', category: 'outros' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all z-10"
      >
        <X className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {images.length > 1 && (
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

      <motion.img
        key={images[currentIndex]?.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]?.src}
        alt={images[currentIndex]?.alt}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const filtered = activeCategory === 'todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const openLightbox = (index) => setLightbox({ open: true, index })
  const closeLightbox = () => setLightbox({ open: false, index: 0 })
  const prevImage = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + filtered.length) % filtered.length }))
  const nextImage = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % filtered.length }))

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-border bg-glass text-text-muted text-xs uppercase tracking-[0.2em] mb-6"
          >
            <Camera className="w-3 h-3" strokeWidth={1.5} />
            Portfólio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extralight text-text-primary tracking-tight"
          >
            Projetos{' '}
            <span className="font-medium text-brand">realizados</span>
          </motion.h2>
        </div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            const count = cat.id === 'todos'
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                  isActive
                    ? 'border-brand/30 bg-brand/10 text-brand'
                    : 'border-glass-border bg-glass text-text-muted hover:text-text-primary hover:border-glass-border-hover'
                }`}
              >
                <Icon className="w-3 h-3" strokeWidth={1.5} />
                {cat.label}
                <span className={`text-[10px] ${isActive ? 'text-brand/60' : 'text-text-muted/50'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Photo grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                custom={i}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                variants={fadeUp}
                layout
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] rounded-2xl border border-glass-border overflow-hidden cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-10 text-text-muted text-xs tracking-[0.15em] uppercase"
        >
          {filtered.length} {filtered.length === 1 ? 'projeto' : 'projetos'} — Gravataí e região
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <Lightbox
            images={filtered}
            currentIndex={lightbox.index}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
