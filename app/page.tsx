"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronRight, Plus, Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import ProductCard from "@/components/product-card"
import { products } from "@/data/products"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleProducts, setVisibleProducts] = useState(9)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Handle escape key to close video modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowVideoModal(false)
      }
    }
    window.addEventListener("keydown", handleEsc)

    // Prevent scrolling when modal is open
    if (showVideoModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [showVideoModal])

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, products.length))
  }

  if (isLoading) {
    return <PageTransition />
  }

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      >
        <motion.div className="absolute inset-0 z-0 w-full h-full" style={{ opacity }}>
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero background"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Advanced Technology Solutions by PT LEN Industri</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Pioneering innovation in defense, telecommunications, transportation, and energy sectors
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => setShowVideoModal(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Company Video
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ChevronRight size={30} className="rotate-90" />
        </motion.div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&showinfo=0&rel=0"
                title="PT LEN Industri Showcase"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Featured Products</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our cutting-edge solutions designed to meet the most demanding requirements
            </p>
          </motion.div>

          {/* Product Grid with Lazy Loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleProducts < products.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button
                onClick={loadMoreProducts}
                variant="outline"
                size="lg"
                className="group border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                <Plus className="mr-2 h-5 w-5" />
                Load More Products
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Innovation Since 1991</h2>
              <p className="text-lg text-gray-300 mb-6">
                PT LEN Industri has been at the forefront of technological innovation for over three decades, delivering
                reliable and advanced solutions across multiple sectors.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our commitment to research and development ensures that we remain a leader in providing state-of-the-art
                technology that meets the evolving needs of our clients.
              </p>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn About Our History
              </Button>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Innovation at PT LEN"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss how PT LEN Industri can provide tailored solutions for your needs.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
