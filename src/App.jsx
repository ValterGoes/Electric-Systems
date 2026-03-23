import Hero from './components/Hero'
import WhereNoOneResolves from './components/WhereNoOneResolves'
import BentoGrid from './components/BentoGrid'
import Gallery from './components/Gallery'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <WhereNoOneResolves />
        <BentoGrid />
        <Gallery />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}

export default App
