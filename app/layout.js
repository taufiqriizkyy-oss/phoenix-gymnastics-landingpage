import '../styles/globals.css'

export const metadata = {
  title: 'Phoenix Gymnastics Academy — Dilatih Olympian Indonesia',
  description: 'Akademi senam anak yang membantu membangun generasi lebih percaya diri, disiplin, dan berkarakter. Dipimpin langsung oleh Rifda Irfanaluthfi, Olympian Indonesia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
