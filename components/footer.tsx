import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PT LEN Industri</h3>
            <p className="text-gray-400 mb-4">
              Pioneering innovation in defense, telecommunications, transportation, and energy sectors since 1991.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Defense Systems</FooterLink>
              <FooterLink href="/">Telecommunications</FooterLink>
              <FooterLink href="/">Transportation</FooterLink>
              <FooterLink href="/">Energy Solutions</FooterLink>
              <FooterLink href="/">Navigation Systems</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/">About Us</FooterLink>
              <FooterLink href="/">Leadership</FooterLink>
              <FooterLink href="/">Careers</FooterLink>
              <FooterLink href="/">News & Events</FooterLink>
              <FooterLink href="/">Sustainability</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">Jl. Soekarno-Hatta No. 442, Bandung, Indonesia, 40254</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+62 22 5202682</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@len.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PT LEN Industri. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full" aria-label="Social media">
      {icon}
    </a>
  )
}
