export default function Restaurant(){
  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-semibold text-[#0B3D2E]">South Indian. Plated Premium.</h1>
          <p className="text-[#0B3D2E]/80 mt-3">Crisp dosas. Fragrant filter coffee. Gentle spices. Minimal, soulful plates.</p>
          <div className="mt-6 flex gap-3">
            <a href="#reserve" className="bg-[#0B3D2E] text-white rounded-full px-6 py-3 text-sm">Reserve Table</a>
            <a href="tel:+911234567890" className="border border-[#0B3D2E] text-[#0B3D2E] rounded-full px-6 py-3 text-sm">Call Now</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/food-1.jpg" alt="Food" className="rounded-xl object-cover w-full h-48 sm:h-64"/>
          <img src="/food-2.jpg" alt="Food" className="rounded-xl object-cover w-full h-48 sm:h-64"/>
          <img src="/ambience-1.jpg" alt="Ambience" className="rounded-xl object-cover w-full h-48 sm:h-64"/>
          <img src="/ambience-2.jpg" alt="Ambience" className="rounded-xl object-cover w-full h-48 sm:h-64"/>
        </div>
      </section>

      <section id="reserve" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <form className="bg-white rounded-2xl p-6 shadow-sm grid sm:grid-cols-2 gap-4">
          <input placeholder="Name" className="px-4 py-3 rounded-xl border border-black/10" />
          <input placeholder="Phone" className="px-4 py-3 rounded-xl border border-black/10" />
          <input placeholder="Date" type="date" className="px-4 py-3 rounded-xl border border-black/10" />
          <input placeholder="Guests" type="number" className="px-4 py-3 rounded-xl border border-black/10" />
          <button className="sm:col-span-2 bg-[#0B3D2E] text-white rounded-xl px-6 py-3">Reserve Table</button>
        </form>
      </section>
    </main>
  )
}
