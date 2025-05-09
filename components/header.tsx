"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl md:text-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-blue-400 mr-1">PT</span> LEN Industri
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button>Contact Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
              <Button className="w-full">Contact Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const links = [
    { name: "Products", href: "/#products" },
    { name: "About", href: "/about" },
  ]

  return links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={cn("text-gray-300 hover:text-white transition-colors", mobile && "block py-2 text-lg")}
      onClick={onClick}
    >
      {link.name}
    </Link>
  ))
}
