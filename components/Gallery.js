'use client'

const photos = [
  { src: '/images/rifda-training.png', label: 'Rifda Melatih Langsung', featured: true },
  { src: '/images/kids-handstand.png', label: 'Sesi Handstand' },
  { src: '/images/kids-smile.jpg',     label: 'Momen Bahagia' },
  { src: '/images/kids-cartwheel.png', label: 'Cartwheel & Roll' },
  { src: '/images/stretching.png',     label: 'Stretching Sesi' },
  { src: '/images/team.jpg',           label: 'Kebersamaan Tim' },
  { src: '/images/achievement.png',    label: 'Prestasi & Event' },
]

function Photo({ src, label, className }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-phoenix-100 ${className}`}>
      <img
        src={src}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 bg-phoenix-500 text-white text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full z-10">
        {label}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [featured, ...rest] = photos
  return (
    <section id="galeri" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
          Galeri Phoenix
        </span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Lihat Sendiri Suasana Latihannya</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">
          Foto berbicara lebih dari seribu kata. Ini adalah keseharian anak-anak Phoenix.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <Photo src={featured.src} label={featured.label} className="col-span-2 h-64" />
          <div className="flex flex-col gap-3">
            <Photo src={rest[0].src} label={rest[0].label} className="h-[126px]" />
            <Photo src={rest[1].src} label={rest[1].label} className="h-[126px]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {rest.slice(2).map(({ src, label }) => (
            <Photo key={label} src={src} label={label} className="h-40" />
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.instagram.com/phoenix.gymnastics" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
            Lihat Lebih Banyak di Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}