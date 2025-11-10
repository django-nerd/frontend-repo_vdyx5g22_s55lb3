import { Link } from 'react-router-dom'

export default function RoomCard({ room }){
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-black/5">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#0B3D2E]">{room.name}</h3>
          <span className="text-[#0B3D2E] text-sm">₹{room.price}</span>
        </div>
        <p className="text-sm text-[#0B3D2E]/80 mt-1">{room.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {room.amenities.slice(0,6).map(a => (
            <span key={a} className="text-[12px] px-2 py-1 rounded-full bg-[#F5EBDD] text-[#0B3D2E]">{a}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Link to="/contact" className="bg-[#0B3D2E] text-white rounded-full px-4 py-2 text-sm">Book Now</Link>
          <Link to="/rooms" className="rounded-full px-4 py-2 text-sm border border-[#0B3D2E] text-[#0B3D2E]">View Details</Link>
        </div>
      </div>
    </div>
  )
}
