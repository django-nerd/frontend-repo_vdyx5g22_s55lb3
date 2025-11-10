import Hero from '../components/Hero'
import USPs from '../components/USPs'
import RoomCard from '../components/RoomCard'
import TestimonialSlider from '../components/TestimonialSlider'
import FooterCTA from '../components/FooterCTA'
import { useEffect, useState } from 'react'

export default function Home(){
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const api = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${api}/api/rooms`).then(r=>r.json()).then(setRooms).catch(()=>{})
  }, [])

  return (
    <main className="bg-[#F5EBDD]">
      <Hero />
      <USPs />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-[#0B3D2E] font-semibold">Rooms & Suites</h2>
            <a href="/rooms" className="text-sm text-[#0B3D2E] underline">View all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map(room => <RoomCard key={room.slug} room={room} />)}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img src="/food-1.jpg" alt="Restaurant" className="w-full h-full object-cover"/>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/ambience-1.jpg" alt="Ambience" className="w-full h-full object-cover"/>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/lobby-1.jpg" alt="Lobby" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <FooterCTA />
    </main>
  )
}
