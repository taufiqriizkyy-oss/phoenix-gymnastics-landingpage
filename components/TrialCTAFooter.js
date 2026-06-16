const WA_NUMBER = '6283897718373'
const WA_TRIAL = encodeURIComponent('Halo Phoenix Gymnastics! Saya mau daftar Trial Class Gratis. Nama anak saya: [nama]. Usia: [usia] tahun. Mohon informasi jadwal yang tersedia.')
const WA_INFO  = encodeURIComponent('Halo Phoenix Gymnastics! Saya ingin tahu lebih lanjut tentang program kelas. Terima kasih.')

const perks = [
  '1 sesi latihan penuh (60 menit)',
  'Assessment kemampuan anak — gratis',
  'Konsultasi program dengan Rifda & tim',
  'Tanpa kewajiban daftar setelahnya',
]

export function TrialCTA() {
  return (
    <section id="trial" className="bg-phoenix-500 py-20 px-6 text-center">
      <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
        Mulai Sekarang — Gratis!
      </span>
      <h2 className="font-rajdhani font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
        Slot Trial Terbatas Bulan Ini.<br />Jangan Sampai Terlewat. ✦
      </h2>
      <p className="text-sm text-white/85 max-w-md mx-auto leading-relaxed mb-8">
        Berikan anak Anda satu kesempatan untuk merasakan perbedaannya sendiri. Trial class gratis, tanpa risiko, tanpa syarat.
      </p>
      <div className="bg-white/15 border-2 border-white/40 rounded-2xl p-7 max-w-md mx-auto mb-6">
        <h3 className="font-rajdhani font-bold text-lg text-white mb-2">Trial Class Gratis — Apa yang Didapat?</h3>
        <p className="text-xs text-white/75 mb-5">Satu sesi penuh, langsung bersama pelatih bersertifikasi Phoenix</p>
        <div className="flex flex-col gap-3 mb-6 text-left">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-3">
              <span className="text-white font-bold text-sm flex-shrink-0">✓</span>
              <span className="text-sm text-white font-medium">{perk}</span>
            </div>
          ))}
        </div>
        <a href={`https://wa.me/${WA_NUMBER}?text=${WA_TRIAL}`} target="_blank" rel="noopener noreferrer"
          className="block w-full bg-white text-phoenix-500 border-2 border-white text-center py-4 rounded-full font-rajdhani font-bold text-base tracking-wide hover:bg-phoenix-500 hover:text-white transition-all">
          Daftar Trial Class Gratis Sekarang
        </a>
      </div>
      <a href={`https://wa.me/${WA_NUMBER}?text=${WA_INFO}`} target="_blank" rel="noopener noreferrer"
        className="inline-block bg-transparent text-white border-2 border-white/60 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all mb-8">
        Chat WhatsApp Langsung
      </a>
      <div className="flex flex-wrap justify-center gap-6">
        {['Slot trial bulan ini terbatas', 'Kelas penuh setiap batch', 'Daftar sekarang, latihan minggu ini'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
            <span className="text-xs text-white/90 font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-rajdhani font-bold text-lg tracking-widest text-phoenix-500">PHOENIX GYMNASTICS</span>
        <p className="text-xs text-gray-500">© 2025 Phoenix Gymnastics Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://instagram.com/phoenixgymacademy" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-phoenix-500 transition-colors">Instagram</a>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-phoenix-500 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
