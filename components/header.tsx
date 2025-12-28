"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Attaullah
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-600 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-purple-600 transition">
              What I Do
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-purple-600 transition">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link href="#home" className="block text-gray-600 hover:text-purple-600 py-2">
              Home
            </Link>
            <Link href="#services" className="block text-gray-600 hover:text-purple-600 py-2">
              What I Do
            </Link>
            <Link href="#projects" className="block text-gray-600 hover:text-purple-600 py-2">
              Projects
            </Link>
            <Link href="#contact" className="block text-gray-600 hover:text-purple-600 py-2">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
