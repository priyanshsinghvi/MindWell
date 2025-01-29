"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-blue-600">
            MindWell
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/features" mobile>
              Features
            </NavLink>
            <NavLink href="/how-it-works" mobile>
              How It Works
            </NavLink>
            <NavLink href="/pricing" mobile>
              Pricing
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${mobile ? "block py-2" : ""}`}
  >
    {children}
  </Link>
)

export default Header

