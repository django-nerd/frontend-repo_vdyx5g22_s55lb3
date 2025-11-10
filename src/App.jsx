import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <div className="min-h-screen bg-[#F5EBDD]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
