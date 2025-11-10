import { ShieldCheck, BedDouble, MapPin, Sparkles, Utensils } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Spotless & Safe' },
  { icon: BedDouble, title: 'Cloud-soft Bedding' },
  { icon: MapPin, title: 'Prime Locations' },
  { icon: Sparkles, title: 'Warm Service' },
  { icon: Utensils, title: 'Authentic Food' },
]

export default function USPs(){
  return (
    <section className="bg-[#F5EBDD] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map(({icon:Icon, title}) => (
          <div key={title} className="flex items-center gap-3 bg-white/70 border border-black/5 rounded-xl p-4">
            <Icon className="text-[#0B3D2E]" />
            <span className="text-sm text-[#0B3D2E]">{title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
