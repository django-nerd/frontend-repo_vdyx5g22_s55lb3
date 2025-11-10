import { useEffect, useState } from 'react'

const testimonials = [
  { name: 'Karthik, Chennai', text: 'Rooms are pristine. Staff is genuinely caring. Instant favorite in TN.' },
  { name: 'Meera, Coimbatore', text: 'Warm smiles, quick service, delicious breakfast. Perfect for family.' },
  { name: 'Akash, Bengaluru', text: 'Calm interiors, great bedding. Booked again for my next trip.' },
]

export default function TestimonialSlider(){
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(p => (p+1)%testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])
  const t = testimonials[i]
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xl text-[#0B3D2E]">“{t.text}”</p>
        <p className="mt-3 text-[#0B3D2E]/70">— {t.name}</p>
      </div>
    </section>
  )
}
