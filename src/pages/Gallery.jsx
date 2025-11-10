export default function Gallery(){
  const images = ['hero-deluxe.jpg','hero-suite.jpg','hero-twin.jpg','ambience-1.jpg','ambience-2.jpg','lobby-1.jpg','food-1.jpg','food-2.jpg']
  return (
    <main className="bg-[#F5EBDD] min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B3D2E] mb-8">Gallery</h1>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]"><div className="space-y-4">
          {images.map((img, i) => (
            <img key={i} src={`/${img}`} alt="Gallery" className="w-full rounded-xl break-inside-avoid shadow-sm"/>
          ))}
        </div></div>
      </div>
    </main>
  )
}
