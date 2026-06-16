'use client'

export default function Gallery() {
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

        {/* Masonry-style grid dengan rasio berbeda */}
        <div className="grid grid-cols-3 gap-3">

          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden h-64">
              <img src="/images/rifda-training.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="/images/kids-smile.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="/images/kids-handstand.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-52">
              <img src="/images/team.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-32">
              <img src="/images/achievement.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden h-48">
              <img src="/images/stretching.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-56">
              <img src="/images/kids-cartwheel.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <a href="https://www.instagram.com/phoenixgymacademy" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
            Lihat Lebih Banyak di Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}