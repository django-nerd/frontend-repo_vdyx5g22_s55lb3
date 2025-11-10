import { Building2, Car, Wifi, Wind, Broom, HandPlatter, Bell } from 'lucide-react'

const items = [
  { icon: Building2, title: 'Banquet Hall', text: 'Elegant venue for events.' },
  { icon: Car, title: 'Parking', text: 'Secure on-site parking.' },
  { icon: Wifi, title: 'High-speed Wi‑Fi', text: 'Fast, reliable internet.' },
  { icon: Wind, title: 'Air Conditioning', text: 'Cool, quiet comfort.' },
  { icon: Broom, title: 'Housekeeping', text: 'Daily fresh rooms.' },
  { icon: HandPlatter, title: 'Room Service', text: 'Hot meals to your door.' },
  { icon: Bell, title: 'Reception', text: '24x7 assistance.' },
]

export default function Facilities(){
  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B3D2E] mb-8">Facilities</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,text}) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-black/5 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0B3D2E]/10 text-[#0B3D2E]"><Icon /></div>
              <div>
                <h3 className="font-semibold text-[#0B3D2E]">{title}</h3>
                <p className="text-[#0B3D2E]/80 text-sm mt-1">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
