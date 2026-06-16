const certs = [
  { icon: '🎓', text: 'S1 Pendidikan Kepelatihan Olahraga' },
  { icon: '🧠', text: 'Sertifikasi Mental Training Atlet' },
  { icon: '🏅', text: 'Pelatih Senam Resmi Indonesia' },
  { icon: '💪', text: 'Sertifikasi Pelatih Fisik & Kondisioning' },
  { icon: '🌏', text: 'Olympian Indonesia — Rio 2016' },
]

export default function RifdaSection() {
  return (
    <section id="pelatih" className="bg-phoenix-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Pelatih</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-12">
          Belajar dari Olympian Indonesia,<br />Langsung di Phoenix
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-60 flex-shrink-0">
            <div className="w-56 h-64 rounded-2xl bg-phoenix-100 border-4 border-phoenix-500 mx-auto flex items-center justify-center mb-5 overflow-hidden">
              <div className="w-56 h-64 rounded-2xl border-4 border-phoenix-500 mx-auto mb-5 overflow-hidden">
  <img
    src="/images/rifda-olympic.jpg"
    alt="Rifda Irfanaluthfi"
    className="w-full h-full object-cover object-top"
  />
</div>
            </div>
            <div className="flex flex-col gap-2">
              {certs.map(({ icon, text }) => (
                <div key={text} className="bg-white border border-phoenix-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <span className="text-xs text-gray-700 font-semibold leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Rifda Irfanaluthfi bukan sekadar atlet berprestasi — ia adalah pelatih profesional dengan landasan akademik dan sertifikasi lengkap untuk membentuk generasi gymnast Indonesia.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Berbekal gelar <strong className="text-gray-800">S1 Pendidikan Kepelatihan Olahraga</strong>, Rifda memahami secara ilmiah bagaimana anak belajar gerak, membangun kebiasaan, dan tumbuh secara fisik maupun psikologis. Ini bukan intuisi — ini metodologi berbasis riset.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Dengan <strong className="text-gray-800">sertifikasi Mental Training</strong>, ia membekali anak bukan hanya dengan skill fisik, tetapi kesiapan mental: cara menghadapi tekanan, bangkit dari kegagalan, dan tampil percaya diri di depan orang banyak.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Sebagai <strong className="text-gray-800">Pelatih Senam Resmi Indonesia</strong> dan pelatih fisik bersertifikasi, Rifda merancang setiap sesi Phoenix dengan standar yang sama yang membawanya ke panggung <strong className="text-gray-800">Olimpiade paris 2024</strong> — disesuaikan untuk anak usia 3 hingga 17 tahun.
            </p>
            <blockquote className="border-l-4 border-phoenix-500 bg-phoenix-100 px-6 py-5 mb-8">
              <p className="font-rajdhani text-lg italic text-gray-800 leading-snug mb-2">
                "Ilmu kepelatihan mengajarkan saya cara yang benar. Olimpiade mengajarkan saya mengapa ini penting. Di Phoenix, saya gabungkan keduanya untuk anak-anak Indonesia."
              </p>
              <cite className="text-xs font-bold tracking-widest uppercase text-phoenix-600 not-italic">
                — Rifda Irfanaluthfi, Pelatih Pelatih Phoenix Gymnastics
              </cite>
            </blockquote>
            <a href="#trial"
              className="inline-block bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
              Latih Anak Saya Bersama Rifda →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
