const problems = [
  { icon: '📱', title: 'Terlalu banyak layar',  desc: 'Rata-rata anak menghabiskan 6+ jam sehari di depan gadget', pct: '85%' },
  { icon: '😔', title: 'Kurang percaya diri',   desc: 'Malu tampil, tidak berani mencoba hal baru, mudah minder',  pct: '70%' },
  { icon: '🧠', title: 'Sulit fokus',           desc: 'Mudah terdistraksi, perhatian pendek, sulit menyelesaikan tugas', pct: '75%' },
  { icon: '😮‍💨', title: 'Mudah menyerah',       desc: 'Frustrasi cepat, tidak mau berusaha lebih ketika gagal sekali', pct: '68%' },
]

export function Problems() {
  return (
    <section className="bg-phoenix-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Kenali Masalahnya</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Apakah Anak Anda Mengalami Ini?</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">Orang tua modern menghadapi tantangan nyata. Ini bukan salah anak — mereka butuh lingkungan yang tepat untuk berkembang.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map(({ icon, title, desc, pct }) => (
            <div key={title} className="bg-white border-2 border-phoenix-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-rajdhani font-bold text-base text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{desc}</p>
              <div className="h-1 bg-phoenix-100 rounded-full">
                <div className="h-1 bg-phoenix-500 rounded-full" style={{ width: pct }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  { icon: '💪', title: 'Percaya Diri',      desc: 'Tiap skill baru membangun rasa mampu dan harga diri anak secara nyata' },
  { icon: '🎯', title: 'Fokus Lebih Tajam', desc: 'Latihan terstruktur meningkatkan konsentrasi, terbukti membantu prestasi sekolah' },
  { icon: '⏰', title: 'Disiplin Natural',  desc: 'Anak belajar disiplin karena termotivasi dari dalam, bukan karena dipaksa' },
  { icon: '🛡️', title: 'Mental Tangguh',   desc: 'Pantang menyerah dan berani hadapi kegagalan menjadi karakter permanen' },
  { icon: '🤸', title: 'Tubuh Optimal',     desc: 'Koordinasi, keseimbangan, fleksibilitas, dan kekuatan untuk hidup aktif' },
  { icon: '👫', title: 'Sosial Tumbuh',     desc: 'Lingkungan positif, pertemanan bermakna, dan semangat tim yang nyata' },
]

export function Benefits() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Mengapa Gymnastics?</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Olahraga Terbaik untuk Tumbuh Kembang Anak</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">Gymnastics melatih fisik dan mental secara bersamaan — tidak ada olahraga lain yang seefektif ini untuk membentuk karakter anak.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {benefits.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-phoenix-200 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-phoenix-100 flex items-center justify-center text-xl mb-4">{icon}</div>
              <h3 className="font-rajdhani font-bold text-base text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const before = ['Pemalu, tidak mau tampil', 'Lebih suka depan gadget', 'Mudah menyerah saat gagal', 'Sulit fokus dan duduk tenang', 'Kurang aktif bergerak']
const after  = ['Berani tampil dan bicara', 'Aktif & semangat bergerak', 'Pantang menyerah, gigih', 'Fokus naik, nilai sekolah ikut', 'Tubuh kuat & koordinasi baik']

export function Transform() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Transformasi Nyata</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Yang Orang Tua Lihat dalam 3 Bulan</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto mb-12">Bukan janji. Ini hasil nyata yang dilaporkan orang tua murid Phoenix.</p>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">Sebelum bergabung</p>
            {before.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <span className="text-gray-300 text-sm mt-0.5">✕</span>
                <span className="text-sm text-gray-400">{item}</span>
              </div>
            ))}
          </div>
          <div className="font-rajdhani text-3xl font-bold text-phoenix-500 self-center">→</div>
          <div className="bg-white border-2 border-phoenix-500 rounded-2xl p-6 text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-phoenix-500 mb-4">Setelah 3 bulan</p>
            {after.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <span className="text-phoenix-500 text-sm mt-0.5">✓</span>
                <span className="text-sm text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
