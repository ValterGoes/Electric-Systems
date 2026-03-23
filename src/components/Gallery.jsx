import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Building2, Home, TreePine, Hotel, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { id: 'todos', label: 'Todos', icon: Layers },
  { id: 'apartamentos', label: 'Apartamentos', icon: Building2 },
  { id: 'casas', label: 'Casas', icon: Home },
  { id: 'pousadas', label: 'Pousadas', icon: Hotel },
  { id: 'sitios', label: 'Sítios', icon: TreePine },
  { id: 'outros', label: 'Outros', icon: Camera },
]

const projects = [
  // — Página 1: mix de categorias para variedade visual —
  { src: '/images/ap1.webp', alt: 'Apartamento — instalação completa', category: 'apartamentos' },
  { src: '/images/casa1.webp', alt: 'Residência — projeto completo', category: 'casas' },
  { src: '/images/pousada1.webp', alt: 'Pousada — instalação geral', category: 'pousadas' },
  { src: '/images/outros1.webp', alt: 'Serviço elétrico profissional', category: 'outros' },
  { src: '/images/ap2.webp', alt: 'Apartamento — quadro e fiação', category: 'apartamentos' },
  { src: '/images/casa2.webp', alt: 'Residência — instalação elétrica', category: 'casas' },
  { src: '/images/pousada2.webp', alt: 'Pousada — iluminação', category: 'pousadas' },
  { src: '/images/outros2.webp', alt: 'Projeto elétrico comercial', category: 'outros' },
  { src: '/images/ap3.webp', alt: 'Apartamento — acabamento', category: 'apartamentos' },
  { src: '/images/casa3.webp', alt: 'Residência — acabamento', category: 'casas' },
  { src: '/images/sitio1.webp', alt: 'Sítio — instalação rural', category: 'sitios' },
  { src: '/images/outros3.webp', alt: 'Instalação elétrica especial', category: 'outros' },

  // — Página 2 —
  { src: '/images/ap4.webp', alt: 'Apartamento — iluminação', category: 'apartamentos' },
  { src: '/images/casa4.webp', alt: 'Residência — finalização', category: 'casas' },
  { src: '/images/pousada3.webp', alt: 'Pousada — acabamento', category: 'pousadas' },
  { src: '/images/outros4.webp', alt: 'Projeto elétrico industrial', category: 'outros' },
  { src: '/images/sitio2.webp', alt: 'Sítio — finalização', category: 'sitios' },
  { src: '/images/outros5.webp', alt: 'Manutenção elétrica', category: 'outros' },
  { src: '/images/outros6.webp', alt: 'Serviço elétrico especializado', category: 'outros' },
  { src: '/images/outros7.webp', alt: 'Instalação customizada', category: 'outros' },
  { src: '/images/outros8.webp', alt: 'Projeto elétrico sob medida', category: 'outros' },
  { src: '/images/outros9.webp', alt: 'Trabalho elétrico profissional', category: 'outros' },
  { src: '/images/outras10.webp', alt: 'Projeto elétrico concluído', category: 'outros' },
  { src: '/images/outras11.webp', alt: 'Instalação profissional', category: 'outros' },

  // — Página 3 —
  { src: '/images/outras12.webp', alt: 'Serviço especializado', category: 'outros' },
  { src: '/images/3.webp', alt: 'Projeto finalizado', category: 'outros' },
  { src: '/images/4.webp', alt: 'Serviço concluído', category: 'outros' },
  { src: '/images/5.webp', alt: 'Instalação profissional', category: 'outros' },
  { src: '/images/6.webp', alt: 'Trabalho especializado', category: 'outros' },
]

// Items per page: 3 rows × 4 cols on desktop, 2 rows × 2 cols on mobile
function useItemsPerPage() {
  const [perPage, setPerPage] = useState(12)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setPerPage(4)       // 2×2
      else if (w < 1024) setPerPage(6) // 2×3
      else setPerPage(12)              // 3×4
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return perPage
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
  const [currentPage, setCurrentPage] = useState(0)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const perPage = useItemsPerPage()

  const filtered = activeCategory === 'todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / perPage)
  const currentItems = filtered.slice(currentPage * perPage, (currentPage + 1) * perPage)

  const goNext = useCallback(() => {
    setCurrentPage((p) => (p + 1) % totalPages)
  }, [totalPages])

  const goPrev = useCallback(() => {
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Reset page when category or perPage changes
  useEffect(() => {
    setCurrentPage(0)
  }, [activeCategory, perPage])

  // Auto-advance every 5s
  useEffect(() => {
    if (totalPages <= 1 || isPaused || lightbox.open) return
    intervalRef.current = setInterval(goNext, 5000)
    return () => clearInterval(intervalRef.current)
  }, [totalPages, isPaused, lightbox.open, goNext])

  const openLightbox = (pageIndex) => {
    const globalIndex = currentPage * perPage + pageIndex
    setLightbox({ open: true, index: globalIndex })
  }
  const closeLightbox = () => setLightbox({ open: false, index: 0 })
  const prevLBImage = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + filtered.length) % filtered.length }))
  const nextLBImage = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % filtered.length }))

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

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-glass-border bg-void/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-text-primary hover:border-brand/30 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={goNext}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-glass-border bg-void/80 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-text-primary hover:border-brand/30 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Grid 3×4 (desktop) / 2×3 (tablet) / 2×2 (mobile) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {currentItems.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots + count */}
        <div className="flex flex-col items-center gap-4 mt-8">
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? 'w-8 h-2 bg-brand'
                      : 'w-2 h-2 bg-glass-border hover:bg-text-muted/30'
                  }`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
          )}

          <p className="text-text-muted text-xs tracking-[0.15em] uppercase">
            {filtered.length} {filtered.length === 1 ? 'projeto' : 'projetos'} — Gravataí e região
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <Lightbox
            images={filtered}
            currentIndex={lightbox.index}
            onClose={closeLightbox}
            onPrev={prevLBImage}
            onNext={nextLBImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
