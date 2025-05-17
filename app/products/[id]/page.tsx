"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, BookOpen } from "lucide-react"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"
import { formatCurrency } from "@/lib/utils"
import { products } from "@/data/products"
export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState<any>(null)

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

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link href="/#products" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image and Video Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-xl overflow-hidden mb-6 bg-gray-800">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-gray-800">
              <iframe
                src={product.videoUrl}
                title={`${product.name} Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Product Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl">
              <div className="mb-2 text-sm font-medium text-blue-400">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <div className="text-2xl font-bold mb-6 text-white">{formatCurrency(product.price)}</div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto group">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Purchase
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </Button>

                {product.storyline && (
                  <Link href={`/products/${product.id}/storyline`}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto group bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Product Storyline
                    </Button>
                  </Link>
                )}
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gray-800 bg-opacity-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="prose prose-invert max-w-none">
            {product.description.split("\n\n").map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gray-800 bg-opacity-50 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]: [string, any], index: number) => (
              <div key={index} className="flex flex-col">
                <span className="text-gray-400">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Interested in this product?</h2>
          <p className="mb-6">Contact our sales team for a personalized demonstration and pricing information.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Request a Demo</Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
