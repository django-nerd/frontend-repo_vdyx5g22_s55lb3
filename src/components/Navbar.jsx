import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const navItem = (to, label) => (
    <Link to={to} className={`px-3 py-2 text-sm md:text-[15px] transition-colors ${pathname===to? 'text-[#0B3D2E]':'text-[#0B3D2E]/80 hover:text-[#0B3D2E]'}`}>
      {label}
    </Link>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled? 'backdrop-blur bg-[#F5EBDD]/80 shadow-sm':'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0B3D2E]"></div>
            <span className="font-semibold tracking-wide text-[#0B3D2E]">Achyuth Hotels</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {navItem('/', 'Home')}
            {navItem('/rooms', 'Rooms & Suites')}
            {navItem('/restaurant', 'Restaurant')}
            {navItem('/facilities', 'Facilities')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-[#0B3D2E] hover:opacity-80 transition">
              <Phone size={18} /> <span className="text-sm">Call Now</span>
            </a>
            <Link to="/contact" className="bg-[#0B3D2E] text-white rounded-full px-4 py-2 text-sm hover:opacity-90 transition">
              Book Now
            </Link>
          </div>

          <button aria-label="Menu" className="md:hidden p-2 text-[#0B3D2E]" onClick={() => setOpen(v=>!v)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            <div className="grid gap-1">
              <Link to="/rooms" className="py-2 text-[#0B3D2E]">Rooms & Suites</Link>
              <Link to="/restaurant" className="py-2 text-[#0B3D2E]">Restaurant</Link>
              <Link to="/facilities" className="py-2 text-[#0B3D2E]">Facilities</Link>
              <Link to="/gallery" className="py-2 text-[#0B3D2E]">Gallery</Link>
              <Link to="/about" className="py-2 text-[#0B3D2E]">About</Link>
              <Link to="/contact" className="py-2 text-[#0B3D2E]">Contact</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+911234567890" className="flex items-center gap-2 text-[#0B3D2E]"><Phone size={18}/> Call Now</a>
              <Link to="/contact" className="bg-[#0B3D2E] text-white rounded-full px-4 py-2 text-sm">Book Now</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
