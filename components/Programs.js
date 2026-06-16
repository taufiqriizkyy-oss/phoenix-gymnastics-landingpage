const programs = [
  {
    age: '3–5 Tahun', title: 'Little Phoenix',
    desc: 'Pengenalan gerak dasar lewat bermain. Fokus koordinasi, keseimbangan, dan rasa cinta bergerak.',
    skills: ['Koordinasi', 'Keseimbangan', 'Fun Movement'],
    bg: 'bg-pink-50', border: 'border-pink-200',
  },
  {
    age: '6–9 Tahun', title: 'Phoenix Kids',
    desc: 'Fondasi gymnastics yang kuat. Roll, handstand, cartwheel — dibangun dengan percaya diri dan metode ilmiah.',
    skills: ['Handstand', 'Cartwheel', 'Disiplin'],
    bg: 'bg-blue-50', border: 'border-blue-200',
  },
  {
    age: '10–13 Tahun', title: 'Phoenix Rising',
    desc: 'Skill menengah dan persiapan tampil. Untuk anak yang siap tantangan lebih dan ingin berkompetisi.',
    skills: ['Back Walkover', 'Beam Work', 'Mental Juara'],
    bg: 'bg-orange-50', border: 'border-orange-200',
  },
  {
    age: '14–17 Tahun', title: 'Elite Phoenix',
    desc: 'Intensif untuk remaja berambisi. Metodologi Olympic-standard yang sama yang membentuk Rifda.',
    skills: ['Aerials', 'Competition Prep', 'Olympic-Level'],
    bg: 'bg-green-50', border: 'border-green-200',
  },
]

export default function Programs() {
  return (
    <section id="program" className="bg-phoenix-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Program Kami</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Kelas yang Tepat untuk Setiap Anak</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">Setiap program dirancang sesuai usia dan kebutuhan — memastikan anak berkembang dengan nyaman, aman, dan menyenangkan.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map(({ age, title, desc, skills, bg, border }) => (
            <div key={title} className={`${bg} border-2 ${border} rounded-2xl p-6`}>
              <span className="inline-block bg-white text-gray-500 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">{age}</span>
              <h3 className="font-rajdhani font-bold text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="bg-white/80 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#trial"
            className="inline-block bg-phoenix-500 text-white border-2 border-phoenix-500 px-8 py-4 rounded-full font-rajdhani font-bold tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
            Coba Program Kami — Trial Gratis!
          </a>
        </div>
      </div>
    </section>
  )
}
