"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Clock, Globe, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageTransition />
  }

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="PT LEN Industri Headquarters"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About PT LEN Industri</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A leading provider of advanced technology solutions in Indonesia since 1991
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  PT LEN Industri (Persero) was established on October 8, 1991, evolving from the National Electronics
                  Institute (LEN) founded in 1965. What began as a research institution has transformed into a
                  state-owned enterprise at the forefront of technological innovation in Indonesia.
                </p>
                <p>
                  Over three decades, we have grown from our roots in electronics research to become a comprehensive
                  technology solutions provider, specializing in defense systems, telecommunications, transportation
                  infrastructure, and renewable energy solutions.
                </p>
                <p>
                  Today, PT LEN Industri stands as a testament to Indonesia's technological capabilities, serving both
                  domestic and international markets with cutting-edge products and services that meet the highest
                  standards of quality and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=800&width=1200&text=PT LEN Industri History"
                alt="PT LEN Industri History"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Guided by clear principles to drive innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 mb-4">
                To provide innovative and reliable technology solutions that address critical challenges in defense,
                telecommunications, transportation, and energy sectors, contributing to national development and
                self-reliance in strategic industries.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Develop indigenous technological capabilities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Deliver high-quality products and services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Foster technological innovation and knowledge transfer
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Support national security and economic growth
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 mb-4">
                To become a globally recognized leader in advanced technology solutions, known for innovation,
                reliability, and excellence in our core sectors, while driving sustainable development and technological
                self-reliance for Indonesia.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Achieve international recognition for technological excellence
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Expand global market presence while strengthening domestic leadership
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Pioneer breakthrough technologies in our focus sectors
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Contribute to Indonesia's position as a technology hub in Southeast Asia
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide our actions and decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from product development to customer service, maintaining the highest standards of quality and performance.",
                delay: 0.1,
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnerships, fostering collaboration within our organization and with external stakeholders to achieve shared goals.",
                delay: 0.2,
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation",
                description:
                  "We embrace innovation as a core driver of our business, continuously seeking new ideas, technologies, and approaches to solve complex challenges.",
                delay: 0.3,
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Integrity",
                description:
                  "We conduct our business with the highest ethical standards, maintaining transparency, honesty, and accountability in all our interactions.",
                delay: 0.4,
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Reliability",
                description:
                  "We are committed to delivering reliable products and services that our customers can depend on, even in the most demanding circumstances.",
                delay: 0.5,
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Sustainability",
                description:
                  "We are dedicated to sustainable practices that benefit society, the environment, and future generations, integrating this commitment into our operations and solutions.",
                delay: 0.6,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: value.delay }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-30 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full inline-flex mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Meet the team driving our vision forward</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Budi Santoso",
                position: "President Director",
                image: "/placeholder.svg?height=400&width=400&text=Budi Santoso",
                delay: 0.1,
              },
              {
                name: "Indra Wijaya",
                position: "Director of Operations",
                image: "/placeholder.svg?height=400&width=400&text=Indra Wijaya",
                delay: 0.2,
              },
              {
                name: "Dr. Siti Rahayu",
                position: "Director of Research & Development",
                image: "/placeholder.svg?height=400&width=400&text=Siti Rahayu",
                delay: 0.3,
              },
              {
                name: "Ahmad Faisal",
                position: "Director of Finance",
                image: "/placeholder.svg?height=400&width=400&text=Ahmad Faisal",
                delay: 0.4,
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: leader.delay }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-30 rounded-xl overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-400">{leader.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Key milestones in our history of innovation</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

            {/* Timeline Items */}
            <div className="space-y-24 relative">
              {[
                {
                  year: "1965",
                  title: "Foundation",
                  description:
                    "Established as the National Electronics Institute (LEN) focused on research and development.",
                  image: "/placeholder.svg?height=400&width=600&text=Foundation 1965",
                  align: "left",
                },
                {
                  year: "1991",
                  title: "Incorporation",
                  description:
                    "Transformed into PT LEN Industri (Persero), a state-owned enterprise focused on electronics and telecommunications.",
                  image: "/placeholder.svg?height=400&width=600&text=Incorporation 1991",
                  align: "right",
                },
                {
                  year: "2003",
                  title: "Expansion",
                  description:
                    "Expanded into defense systems and transportation infrastructure, securing major national projects.",
                  image: "/placeholder.svg?height=400&width=600&text=Expansion 2003",
                  align: "left",
                },
                {
                  year: "2010",
                  title: "International Recognition",
                  description:
                    "Achieved international certification and began exporting products to Southeast Asian markets.",
                  image: "/placeholder.svg?height=400&width=600&text=International 2010",
                  align: "right",
                },
                {
                  year: "2018",
                  title: "Technological Breakthrough",
                  description:
                    "Developed proprietary radar and communication systems, establishing technological independence.",
                  image: "/placeholder.svg?height=400&width=600&text=Breakthrough 2018",
                  align: "left",
                },
                {
                  year: "Present",
                  title: "Global Expansion",
                  description:
                    "Continuing to innovate and expand our global footprint with cutting-edge technology solutions.",
                  image: "/placeholder.svg?height=400&width=600&text=Global Expansion",
                  align: "right",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: milestone.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${
                    milestone.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                      <div className="text-blue-400 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="md:w-1/2 p-4 relative">
                    {/* Timeline Dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 md:right-auto w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>

                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                      <Image
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how PT LEN Industri can provide innovative solutions for your most challenging problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
