"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

// Import the products data
import { products } from "@/data/products"

export default function StorylinePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<any>(null)
  const [activeChapter, setActiveChapter] = useState(0)

  // Use the useParams hook to get the id parameter
  const params = useParams()
  const productId = params.id as string

  useEffect(() => {
    // Simulate loading product data
    const timer = setTimeout(() => {
      const foundProduct = products.find((p) => p.id === Number.parseInt(productId))
      setProduct(foundProduct)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [productId])

  if (isLoading) {
    return <PageTransition />
  }

  if (!product || !product.storyline) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Storyline Not Found</h1>
        <p className="mb-8">The product storyline you are looking for does not exist.</p>
        <Link href={`/products/${productId}`}>
          <Button>Return to Product</Button>
        </Link>
      </div>
    )
  }

  const { storyline } = product

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link href={`/products/${productId}`} className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Product Details
        </Link>

        {/* Storyline Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{storyline.title}</h1>
          <p className="text-xl text-blue-400">{storyline.subtitle}</p>
        </motion.div>

        {/* Storyline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chapter Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Chapters</h3>
              <ul className="space-y-4">
                {storyline.chapters.map((chapter, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveChapter(index)}
                      className={`text-left w-full py-2 px-4 rounded-lg transition-colors ${
                        activeChapter === index
                          ? "bg-blue-500 bg-opacity-20 text-blue-400 font-medium"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{index + 1}.</span>
                        {chapter.title}
                        {activeChapter === index && <ChevronRight className="ml-auto h-4 w-4" />}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">{storyline.chapters[activeChapter].title}</h2>

              {/* Chapter Image */}
              <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=600&width=1200&text=Chapter ${activeChapter + 1}: ${storyline.chapters[activeChapter].title}`}
                  alt={storyline.chapters[activeChapter].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Chapter Text */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p>{storyline.chapters[activeChapter].content}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <Button
                  variant="outline"
                  onClick={() => setActiveChapter((prev) => Math.max(0, prev - 1))}
                  disabled={activeChapter === 0}
                  className={activeChapter === 0 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Chapter
                </Button>

                {activeChapter < storyline.chapters.length - 1 ? (
                  <Button onClick={() => setActiveChapter((prev) => Math.min(storyline.chapters.length - 1, prev + 1))}>
                    Next Chapter
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div></div>
                )}
              </div>
            </motion.div>

            {/* Conclusion */}
            {activeChapter === storyline.chapters.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>{storyline.conclusion}</p>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link href={`/products/${productId}`}>
                    <Button size="lg" className="group">
                      Return to Product Details
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
