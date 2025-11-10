import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-[#F5EBDD]">
      <img src="/hero-deluxe.jpg" alt="Achyuth Hotels Room" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Tamil warmth. Modern comfort.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.9}} className="text-white/90 mt-4 text-lg max-w-xl">
            Boutique stays across Tamil Nadu. Clean, calm, premium.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-[#0B3D2E] text-white rounded-full px-6 py-3 text-sm font-medium hover:opacity-90">Book Now</Link>
            <a href="tel:+911234567890" className="bg-white/95 text-[#0B3D2E] rounded-full px-6 py-3 text-sm font-medium hover:bg-white">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
