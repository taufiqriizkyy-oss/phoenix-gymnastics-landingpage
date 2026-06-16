const photos = [
  { src: '/images/rifda-training.jpg', emoji: '🤸‍♀️', label: 'Rifda Melatih Langsung', bg: 'bg-pink-100', featured: true },
  { src: '/images/handstand.jpg', emoji: '🙌',   label: 'Sesi Handstand',           bg: 'bg-pink-50' },
  { src: '/images/happy-moment.jpg', emoji: '😄',   label: 'Momen Bahagia',            bg: 'bg-rose-50' },
  { src: '/images/cartwheel.jpg', emoji: '🤸',   label: 'Cartwheel & Roll',         bg: 'bg-pink-50' },
  { src: '/images/stretching.jpg', emoji: '🧘‍♀️',  label: 'Stretching Sesi',         bg: 'bg-pink-100' },
  { src: '/images/together.jpg', emoji: '👫',   label: 'Kebersamaan Tim',          bg: 'bg-rose-50' },
  { emoji: '🏅',   label: 'Prestasi & Event',         bg: 'bg-pink-50' },
  { emoji: '🎉',   label: 'Wisuda & Penghargaan',     bg: 'bg-pink-100' },
  { emoji: '🌟',   label: 'Kompetisi Perdana',        bg: 'bg-rose-50' },
]

export default function Gallery() {
  const [featured, ...rest] = photos
  return (
    <section id="galeri" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Galeri Phoenix</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Lihat Sendiri Suasana Latihannya</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">Foto berbicara lebih dari seribu kata. Ini adalah keseharian anak-anak Phoenix.</p>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className={`col-span-2 ${featured.bg} rounded-2xl h-64 flex items-center justify-center relative overflow-hidden`}>
            <span className="text-7xl">{featured.emoji}</span>
            <div className="absolute bottom-3 left-3 bg-phoenix-500 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
              {featured.label}
            </div>
          </div>
          {rest.slice(0, 2).map(({ emoji, label, bg }) => (
            <div key={label} className={`${bg} rounded-2xl h-[126px] flex items-center justify-center relative overflow-hidden`}>
              <span className="text-4xl">{emoji}</span>
              <div className="absolute bottom-2 left-2 bg-phoenix-500 text-white text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full text-[10px]">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {rest.slice(2).map(({ emoji, label, bg }) => (
            <div key={label} className={`${bg} rounded-2xl h-40 flex items-center justify-center relative overflow-hidden`}>
              <span className="text-4xl">{emoji}</span>
              <div className="absolute bottom-2 left-2 bg-phoenix-500 text-white text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full text-[10px]">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://instagram.com/phoenix.gymnastics" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
            Lihat Lebih Banyak di Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
