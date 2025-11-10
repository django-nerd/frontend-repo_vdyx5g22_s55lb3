export default function About(){
  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20 pb-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B3D2E]">Achyuth Hotels</h1>
        <p className="text-[#0B3D2E]/80 mt-3">Tamil roots. Modern premium comfort. We keep it simple: spotless rooms, quiet ambience, kind people.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl p-5 border border-black/5">
            <h3 className="font-semibold text-[#0B3D2E]">Why choose us</h3>
            <ul className="mt-3 text-sm text-[#0B3D2E]/80 space-y-2 list-disc list-inside">
              <li>Clean, calm rooms with plush bedding</li>
              <li>Prime locations across Tamil Nadu</li>
              <li>Warm, responsive service culture</li>
              <li>Quick booking, transparent pricing</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border border-black/5">
            <h3 className="font-semibold text-[#0B3D2E]">Our promise</h3>
            <ul className="mt-3 text-sm text-[#0B3D2E]/80 space-y-2 list-disc list-inside">
              <li>Hygiene first, always</li>
              <li>Comfort you can trust</li>
              <li>Local flavors done premium</li>
              <li>Service with heart</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
