import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <Hero />
    </div>
  )
}
