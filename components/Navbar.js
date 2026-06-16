'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-phoenix-500">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src="/images/logo.png" alt="Phoenix Gymnastics Academy" className="h-12 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          <a href="#program"   className="text-sm font-medium text-gray-500 hover:text-phoenix-500 transition-colors">Program</a>
          <a href="#pelatih"   className="text-sm font-medium text-gray-500 hover:text-phoenix-500 transition-colors">Pelatih</a>
          <a href="#galeri"    className="text-sm font-medium text-gray-500 hover:text-phoenix-500 transition-colors">Galeri</a>
          <a href="#testimoni" className="text-sm font-medium text-gray-500 hover:text-phoenix-500 transition-colors">Testimoni</a>
          <a href="#trial"
            className="bg-phoenix-500 text-white border-2 border-phoenix-500 px-6 py-2 rounded-full text-sm font-bold font-rajdhani tracking-wide hover:bg-white hover:text-phoenix-500 transition-all">
            Daftar Trial Gratis
          </a>
        </div>
        <button className="md:hidden text-phoenix-500" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-phoenix-100 px-6 pb-4 flex flex-col gap-4">
          <a href="#program"   onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 py-2">Program</a>
          <a href="#pelatih"   onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 py-2">Pelatih</a>
          <a href="#galeri"    onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 py-2">Galeri</a>
          <a href="#testimoni" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600 py-2">Testimoni</a>
          <a href="#trial" onClick={() => setOpen(false)}
            className="bg-phoenix-500 text-white border-2 border-phoenix-500 text-center px-6 py-3 rounded-full text-sm font-bold font-rajdhani hover:bg-white hover:text-phoenix-500 transition-all">
            Daftar Trial Gratis
          </a>
        </div>
      )}
    </nav>
  )
}