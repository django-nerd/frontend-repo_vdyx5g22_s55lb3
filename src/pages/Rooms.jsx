import { useEffect, useState } from 'react'
import RoomCard from '../components/RoomCard'

export default function Rooms(){
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const api = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${api}/api/rooms`).then(r=>r.json()).then(setRooms).catch(()=>{})
  }, [])

  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-[#0B3D2E]">Rooms & Suites</h1>
            <p className="text-[#0B3D2E]/70 mt-2">Pick your comfort. Book in seconds.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map(room => <RoomCard key={room.slug} room={room} />)}
        </div>
      </div>
    </main>
  )
}
