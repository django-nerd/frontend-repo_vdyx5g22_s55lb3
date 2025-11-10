import { Link } from 'react-router-dom'

export default function FooterCTA(){
  return (
    <footer className="bg-[#0B3D2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Ready to stay with us?</h3>
          <p className="text-white/80 mt-2">Clean rooms. Warm service. Quick booking.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link to="/contact" className="bg-white text-[#0B3D2E] rounded-full px-6 py-3 text-sm font-medium">Book Now</Link>
          <a href="tel:+911234567890" className="bg-transparent border border-white/40 text-white rounded-full px-6 py-3 text-sm font-medium">Call Now</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/70 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Achyuth Hotels. All rights reserved.</span>
          <span>Tamil Nadu • Boutique Hospitality</span>
        </div>
      </div>
    </footer>
  )
}
