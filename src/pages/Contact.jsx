import { useState } from 'react'

export default function Contact(){
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e){
    e.preventDefault()
    setLoading(true)
    const api = import.meta.env.VITE_BACKEND_URL || ''
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${api}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed')
      setDone(true)
      e.currentTarget.reset()
    } catch(err) {
      alert('Could not submit. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <section>
          <h1 className="text-3xl font-semibold text-[#0B3D2E]">Book your stay</h1>
          <p className="text-[#0B3D2E]/80 mt-2">Quick form. We call back fast.</p>
          <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <input name="name" required placeholder="Full Name" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="phone" required placeholder="Phone" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="room_type" placeholder="Room Type" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="check_in" required type="date" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="check_out" required type="date" className="px-4 py-3 rounded-xl border border-black/10" />
            <input name="guests" required type="number" min="1" placeholder="Guests" className="px-4 py-3 rounded-xl border border-black/10" />
            <textarea name="message" placeholder="Message" className="px-4 py-3 rounded-xl border border-black/10 sm:col-span-2" rows="3" />
            <button disabled={loading} className="sm:col-span-2 bg-[#0B3D2E] text-white rounded-xl px-6 py-3">{loading? 'Submitting...':'Check Availability'}</button>
            {done && <p className="sm:col-span-2 text-[#0B3D2E]">Thank you! We will reach out shortly.</p>}
          </form>
        </section>

        <aside className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-[#0B3D2E]">Contact</h3>
            <p className="text-[#0B3D2E]/80 mt-2">+91 12345 67890</p>
            <p className="text-[#0B3D2E]/80">hello@achyuthhotels.com</p>
            <div className="mt-4 flex gap-3">
              <a href="tel:+911234567890" className="bg-[#0B3D2E] text-white rounded-full px-6 py-3 text-sm">Call Now</a>
              <a href="#map" className="border border-[#0B3D2E] text-[#0B3D2E] rounded-full px-6 py-3 text-sm">Get Directions</a>
            </div>
          </div>
          <div id="map" className="bg-white rounded-2xl p-2">
            <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=80.2%2C12.9%2C80.3%2C13.0&layer=mapnik" className="w-full h-72 rounded-xl"></iframe>
          </div>
        </aside>
      </div>
    </main>
  )
}
