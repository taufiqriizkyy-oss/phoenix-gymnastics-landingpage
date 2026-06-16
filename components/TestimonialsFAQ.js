const testimonials = [
  { initials: 'IS', name: 'Ibu Sarah',   child: 'Ibu dari Keira, 7 tahun', text: 'Anak saya dulu sangat pemalu. Sekarang dia yang paling semangat tampil di depan kelas. Perubahan dalam 2 bulan, luar biasa.' },
  { initials: 'BR', name: 'Bapak Rizal', child: 'Ayah dari Rafi, 9 tahun', text: 'Gurunya bilang konsentrasi Rafi di sekolah meningkat drastis sejak ikut Phoenix. Saya tidak menyangka hubungannya seerat ini.' },
  { initials: 'DW', name: 'Ibu Dewi',   child: 'Ibu dari Naya, 6 tahun', text: 'Dulu susah banget matikan gadget. Sekarang dia sendiri yang minta latihan lebih sering. Ini yang paling bikin saya terharu.' },
  { initials: 'AT', name: 'Ibu Atha',   child: 'Ibu dari Bima, 10 tahun', text: 'Bima tadinya sering bilang "aku nggak bisa". Sekarang kalau ada tugas susah, dia bilang "aku mau coba dulu". Itu yang saya syukuri.' },
]

export function Testimonials() {
  return (
    <section id="testimoni" className="bg-phoenix-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">Kata Mereka</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-3">Perubahan yang Orang Tua Rasakan Sendiri</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">Bukan tentang fasilitasnya. Tentang perubahan nyata yang mereka lihat pada anak mereka.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map(({ initials, name, child, text }) => (
            <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-phoenix-200 transition-colors">
              <div className="text-phoenix-500 text-sm tracking-widest mb-3">★★★★★</div>
              <p className="text-xs text-gray-500 leading-relaxed italic mb-5">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-phoenix-100 flex items-center justify-center font-rajdhani font-bold text-sm text-phoenix-500 flex-shrink-0">{initials}</div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{name}</p>
                  <p className="text-xs text-gray-400">{child}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Apakah anak saya harus punya pengalaman senam dulu?',   a: 'Tidak perlu sama sekali. Program kami mulai dari nol, usia 3 tahun. Anak yang belum pernah berolahraga pun akan langsung nyaman dan senang.' },
  { q: 'Apakah ada trial class dan apakah berbayar?',           a: 'Trial class kami GRATIS untuk murid baru. Daftar sekarang, bawa anak Anda merasakan langsung Phoenix sebelum memutuskan bergabung — tanpa kewajiban apapun.' },
  { q: 'Apakah Rifda melatih langsung di kelas?',               a: 'Ya! Rifda terlibat langsung sebagai Kepala Pelatih yang aktif melatih, merancang kurikulum, dan memimpin sesi. Anak Anda belajar langsung dari Olympian Indonesia.' },
  { q: 'Apakah aman untuk anak yang masih sangat kecil?',       a: 'Keamanan adalah prioritas utama. Semua peralatan sesuai standar internasional. Rifda memiliki latar belakang ilmiah kepelatihan yang memastikan setiap gerakan diajarkan dengan teknik dan keamanan yang benar.' },
  { q: 'Berapa kali latihan per minggu?',                        a: 'Dimulai dari 2x seminggu untuk kelas regular. Ada opsi intensif 4x seminggu untuk yang ingin berkembang lebih cepat.' },
]

export function FAQ() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-phoenix-100 text-phoenix-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">FAQ</span>
        <h2 className="font-rajdhani font-bold text-4xl text-gray-900 mb-10">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-phoenix-200 transition-colors">
              <h3 className="font-rajdhani font-bold text-base text-gray-900 mb-2">{q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
