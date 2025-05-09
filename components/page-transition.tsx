"use client"

import { motion } from "framer-motion"

export default function PageTransition() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mx-auto mb-4"
        >
          <div className="w-full h-full rounded-full border-t-4 border-b-4 border-blue-500"></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-xl font-bold text-white">PT LEN Industri</div>
          <div className="text-blue-400 mt-1">Loading...</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
