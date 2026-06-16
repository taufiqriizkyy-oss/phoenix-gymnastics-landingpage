import Image from 'next/image'

const WA_NUMBER = '6285943776945'
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
        <div className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white border-2 border-phoenix-500 rounded-3xl p-7 text-center">
            <div className="w-28 h-28 rounded-full bg-phoenix-100 border-4 border-phoenix-500 mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <span className="text-5xl">🤸‍♀️</span>
            </div>
            <h3 className="font-rajdhani font-bold text-xl text-gray-900 mb-1">Rifda Irfanaluthfi</h3>
            <p className="text-xs font-bold tracking-widest text-phoenix-500 uppercase mb-4">Kepala Pelatih · Olympian Indonesia</p>
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              {['Olimpiade 2016', 'S1 Kepelatihan', 'Mental Training', 'Pelatih Senam RI', 'Pelatih Fisik'].map((b) => (
                <span key={b} className="bg-phoenix-100 text-phoenix-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic leading-relaxed border-t border-phoenix-100 pt-4">
              "Setiap anak punya potensi untuk bersinar — tugas saya membantu mereka menemukannya."
            </p>
            <div className="flex justify-around mt-5 pt-4 border-t border-phoenix-100">
              {[['2016', 'Olimpiade'], ['15+', 'Medali'], ['10+', 'Tahun']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="font-rajdhani font-bold text-2xl text-phoenix-500">{num}</div>
                  <div className="text-xs text-phoenix-700 font-bold uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
