"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"

export default function ProductSlider({ products }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const totalPages = Math.ceil(products.length / itemsPerPage)

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Recalculate total pages when itemsPerPage changes
  useEffect(() => {
    if (currentPage >= Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(Math.ceil(products.length / itemsPerPage) - 1)
    }
  }, [itemsPerPage, products.length, currentPage])

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-2 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? "bg-blue-500" : "bg-gray-600"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-2 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors ${
            currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProducts.map((product, index) => (
              <ProductCard key={`${currentPage}-${product.id}`} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
