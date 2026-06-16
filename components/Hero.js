'use client'

const WA_NUMBER = '6283897718373'
const WA_INFO = encodeURIComponent('Halo Phoenix Gymnastics! Boleh saya tahu lebih lanjut tentang program dan jadwal kelas?')

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            ✦ Dilatih Langsung oleh Olympian Indonesia
          </span>
          <h1 className="font-rajdhani font-bold text-5xl md:text-6xl leading-tight text-gray-900 mb-5">
            Tempat Anak<br />
            Tumbuh <span className="text-phoenix-500">Berani,</span><br />
            <span className="text-phoenix-500">Disiplin & Percaya Diri</span>
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
            Bukan sekadar kelas senam. Ini tempat anak belajar karakter sejati — dalam program yang dirancang dan dipimpin langsung oleh{' '}
            <strong className="text-gray-700">Rifda Irfanaluthfi</strong>, Olympian Indonesia.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#trial"
              className="bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full text-base font-bold font-rajdhani tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
              Coba Trial Class — Gratis!
            </a>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_INFO}`} target="_blank" rel="noopener noreferrer"
              className="bg-white text-phoenix-500 border-2 border-phoenix-500 px-8 py-4 rounded-full text-base font-bold font-rajdhani tracking-wide hover:bg-phoenix-500 hover:text-white transition-all">
              Chat WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-5">
            {['500+ anak sudah bergabung', 'Rating ★5.0 dari orang tua', 'Dipimpin Olympian Indonesia'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-phoenix-500 flex-shrink-0" />
                <span className="text-xs text-gray-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Foto Rifda melatih */}
        <div className="w-full md:w-[420px] flex-shrink-0">
          <div className="rounded-3xl overflow-hidden border-2 border-phoenix-200 h-[460px]">
            <img
              src="/images/rifda-training.png"
              alt="Rifda Irfanaluthfi melatih di Phoenix Gymnastics"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  )
}