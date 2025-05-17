"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import GlbViewer from "./ui/glbviewer";
import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three";
import { ProductProps } from "@/types";
import LottieAnimation from "@/components/ui/lottieAnimation";
import dynamic from "next/dynamic";

export default function ProductCard({
  product,
  index,
}: {
  product: ProductProps;
  index: number;
}) {
  console.log(product, "product byu");
  const [isHovered, setIsHovered] = useState(false);
  const LottieAnimation = dynamic(
    () => import("@/components/ui/lottieAnimation"),
    {
      ssr: false,
    }
  );
  useEffect(() => {
    console.log(isHovered, "hovered");
  }, [isHovered]);

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{
    //     duration: 0.5,
    //     delay: index * 0.1 > 0.5 ? 0.5 : index * 0.1,
    //   }}
    //   viewport={{ once: true, margin: "-100px" }}
    //   className="group"
    // >
    //   <Link href={`/products/${product.id}`}>
    //     <div
    //       className="rounded-xl overflow-hidden relative transition-all duration-300 shadow-lg hover:shadow-xl  transform hover:-translate-y-2 bg-transparent"
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //     >
    //       <div className="relative h-48 overflow-hidden">
    //            <motion.div
    //               whileHover={{ scale: 1.08, y: -5 }}
    //               transition={{ duration: 0.4 }}
    //               className="h-full w-full flex items-center justify-center"
    //             >
    //               {/* <GlbViewer modelPath={product.image} /> */}
    //               <LottieAnimation jsonPath="/image/headphone.json" className="w-40 h-40" />
    //             </motion.div>

    //         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    //         <motion.div
    //           className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
    //           animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
    //           transition={{ duration: 0.3 }}
    //         >
    //           <Button variant="ghost" size="sm" className="text-white group">
    //             View Details
    //             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    //           </Button>
    //         </motion.div>
    //       </div>

    //       <div className="p-4">
    //         <div className="text-xs font-medium text-red-600  mb-1">
    //           {product.category}
    //         </div>
    //         <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-700 transition-colors">
    //           {product.name}
    //         </h3>
    //         <p className="text-black text-sm mb-3 line-clamp-2">
    //           {product.description}
    //         </p>
    //       </div>

    //       {/* Add a subtle glow effect on hover */}
    //       {isHovered && (
    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
    //         />
    //       )}
    //     </div>
    //   </Link>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1 > 0.5 ? 0.5 : index * 0.1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="rounded-xl overflow-hidden relative transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 bg-transparent">
          {/* Lottie inside a memoized wrapper */}
          <div className="relative h-48 overflow-hidden flex items-center justify-center">
            <div className="relative h-40 w-40 group">
              {/* Static Image */}
              <img
                src="/image/headp-img.png"
                alt="headphone"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Lottie Animation */}
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <LottieAnimation jsonPath="/image/headphone.json" className="w-full h-full" />
              </div>
            </div>


            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button variant="ghost" size="sm" className="text-white group">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <div className="p-4">
            <div className="text-xs font-medium text-red-600 mb-1">
              {product.category}
            </div>
            <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-black text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
}
