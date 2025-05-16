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

// Expanded product data (20 items)
const products = [
  {
    id: 1,
    name: "Radar System X-5000",
    category: "Defense",
    description:
      "Advanced radar system with long-range detection capabilities. The X-500 represents the pinnacle of modern radar technology, offering unparalleled detection range and accuracy in all weather conditions. Designed for military and civil applications, this system integrates seamlessly with existing defense infrastructure.\n\nKey Features:\n- Detection range up to 500km\n- Advanced signal processing for clutter reduction\n- All-weather operation capability\n- Integrated IFF (Identification Friend or Foe)\n- Low probability of intercept\n- Rapid deployment and setup\n\nThe X-500 has been field-tested in the most demanding environments and proven its reliability and performance. Its modular design allows for easy upgrades and maintenance, ensuring a long operational life with minimal downtime.",
    image: "/models/low_poly_toon_plane.glb",
    price: 250000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Long-range detection up to 500km",
      "All-weather operation capability",
      "Advanced signal processing",
      "Integrated IFF system",
      "Low probability of intercept",
      "Modular design for easy upgrades",
    ],
    specifications: {
      "Operating Frequency": "X-Band",
      "Power Output": "25kW peak",
      "Detection Range": "500km",
      Weight: "1200kg",
      Dimensions: "3.2m x 2.5m x 2.1m",
      "Power Requirements": "3-phase, 400V, 50Hz",
    },
    storyline: {
      title: "The Evolution of Modern Radar Technology",
      subtitle: "How the X-500 is Redefining Defense Capabilities",
      chapters: [
        {
          title: "Origins",
          content:
            "The X-500 Radar System was born from a decade of research into advanced electromagnetic wave propagation and signal processing. Our team of engineers, led by Dr. Elena Vasquez, sought to overcome the limitations of traditional radar systems, particularly in adverse weather conditions and against stealth targets.",
        },
        {
          title: "Breakthrough",
          content:
            "The breakthrough came in 2018 when our research team developed a proprietary algorithm that could distinguish between environmental noise and actual targets with unprecedented accuracy. This innovation, combined with our advanced antenna design, created a system that could detect objects at ranges previously thought impossible.",
        },
        {
          title: "Field Testing",
          content:
            "The X-500 underwent rigorous testing in some of the world's most challenging environments - from Arctic conditions to tropical storms. During these tests, it consistently outperformed existing systems, maintaining detection capabilities even in severe electromagnetic interference and against low-observable targets.",
        },
        {
          title: "Impact",
          content:
            "Today, the X-500 serves as the backbone of modern integrated air defense systems across three continents. Its deployment has significantly enhanced the security posture of our partner nations, providing early warning capabilities that have already prevented several potential incidents in contested airspaces.",
        },
      ],
      conclusion:
        "The X-500 represents not just a technological achievement, but a new paradigm in how we approach defense monitoring and response. As threats evolve, so too will the X-500, with our commitment to continuous improvement ensuring it remains at the cutting edge of radar technology for decades to come.",
    },
  },
  {
    id: 2,
    name: "Communication Module CM-200",
    category: "Telecommunications",
    description:
      "Secure communication module for military and government applications. The CM-200 provides encrypted, reliable communications across multiple channels and frequencies. Designed with security as the primary focus, this module ensures that sensitive information remains protected from interception and tampering.\n\nKey Features:\n- Military-grade encryption\n- Multi-channel operation\n- Frequency hopping capability\n- Jam-resistant technology\n- Compact and ruggedized design\n- Interoperable with NATO standards\n\nThe CM-200 has been adopted by defense forces worldwide for its exceptional security features and reliability in challenging environments. Its advanced technology ensures clear communication even in areas with significant electromagnetic interference.",
    image: "/models/low_poly_toon_plane.glb",
    price: 75000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Military-grade encryption",
      "Multi-channel operation",
      "Frequency hopping capability",
      "Jam-resistant technology",
      "Compact and ruggedized design",
      "NATO standard compatibility",
    ],
    specifications: {
      "Frequency Range": "30-512 MHz",
      Encryption: "AES-256",
      Channels: "32",
      Weight: "3.5kg",
      Dimensions: "25cm x 18cm x 8cm",
      "Battery Life": "24 hours continuous operation",
    },
    storyline: {
      title: "Securing the Future of Communication",
      subtitle: "The CM-200's Journey from Concept to Critical Infrastructure",
      chapters: [
        {
          title: "The Challenge",
          content:
            "In an increasingly connected world, secure communication has become a matter of national security. The CM-200 project began in 2015 when our team identified critical vulnerabilities in existing communication systems used by defense and government agencies worldwide.",
        },
        {
          title: "Innovation",
          content:
            "Our approach was revolutionary: instead of simply adding layers of encryption to existing technologies, we rebuilt the communication architecture from the ground up. The CM-200's unique frequency-hopping algorithm, developed by our cryptography team led by Dr. James Chen, creates communication patterns that are virtually impossible to predict or intercept.",
        },
        {
          title: "Crisis Tested",
          content:
            "The CM-200's capabilities were put to the ultimate test during the 2019 Pacific Crisis, when conventional communication networks were compromised. Government agencies equipped with our modules maintained secure communications throughout the incident, allowing for coordinated response efforts that saved countless lives.",
        },
        {
          title: "Global Adoption",
          content:
            "Today, the CM-200 has been adopted by defense forces and critical infrastructure operators in over 40 countries. Its compact design allows for deployment in everything from fixed command centers to mobile field units, providing consistent security across diverse operational environments.",
        },
      ],
      conclusion:
        "As digital threats continue to evolve, so does the CM-200. Our ongoing development program ensures that each module can be updated to counter emerging vulnerabilities, making it not just a product but a long-term security partnership between PT LEN Industri and our clients.",
    },
  },
  {
    id: 3,
    name: "Railway Signaling System",
    category: "Transportation",
    description:
      "Intelligent railway signaling system for improved safety and efficiency. This comprehensive system integrates advanced sensors, real-time monitoring, and automated controls to ensure the safe and efficient operation of railway networks. Designed to meet international safety standards, our system significantly reduces the risk of accidents while optimizing traffic flow.\n\nKey Features:\n- Real-time train position monitoring\n- Automatic train protection\n- Centralized traffic management\n- Predictive maintenance capabilities\n- Scalable architecture\n- Redundant safety systems\n\nOur Railway Signaling System has been implemented in major railway networks across Asia and Europe, demonstrating its reliability and effectiveness in diverse operational environments.",
    image: "/models/low_poly_toon_plane.glb",
    price: 120000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time train position monitoring",
      "Automatic train protection",
      "Centralized traffic management",
      "Predictive maintenance capabilities",
      "Scalable architecture",
      "Redundant safety systems",
    ],
    specifications: {
      "Control Range": "Up to 500km of track",
      "Response Time": "<100ms",
      "Safety Integrity Level": "SIL4",
      "Operating Temperature": "-40°C to +70°C",
      "Power Consumption": "2.5kW average",
      Compliance: "CENELEC standards",
    },
    storyline: {
      title: "Revolutionizing Rail Safety and Efficiency",
      subtitle: "The Journey of Our Railway Signaling System",
      chapters: [
        {
          title: "The Vision",
          content:
            "Our Railway Signaling System was born from a vision to transform rail transportation safety. Following several high-profile rail incidents in the early 2010s, our team of engineers and safety experts came together with a bold mission: to create a signaling system that would make rail accidents virtually impossible while improving operational efficiency.",
        },
        {
          title: "Development",
          content:
            "Development began in 2014 with a comprehensive analysis of existing signaling technologies and their limitations. Our approach integrated multiple redundant safety systems with real-time monitoring capabilities, creating a solution that could detect potential issues before they became dangerous. The breakthrough came with our proprietary algorithm that could predict train behavior and potential conflicts with unprecedented accuracy.",
        },
        {
          title: "First Implementation",
          content:
            "The system was first implemented on the Eastern Corridor railway in 2017, a challenging 320km stretch with mixed passenger and freight traffic. Within the first year of operation, the line saw a 99.8% reduction in signaling-related incidents and a 15% increase in line capacity due to optimized traffic management.",
        },
        {
          title: "Global Impact",
          content:
            "Today, our Railway Signaling System manages over 12,000km of track across three continents. It has been adapted for high-speed lines, metro systems, and freight-only corridors, demonstrating its versatility and scalability. The system has prevented an estimated 27 potential major incidents according to independent safety assessors.",
        },
      ],
      conclusion:
        "As rail networks continue to expand and modernize worldwide, our Railway Signaling System evolves alongside them. Our ongoing research focuses on further integration with autonomous train operation technologies and enhanced cybersecurity features, ensuring that rail transportation remains one of the safest and most efficient modes of transport for generations to come.",
    },
  },
  {
    id: 4,
    name: "Smart Energy Management",
    category: "Energy",
    description:
      "Comprehensive energy management solution for industrial applications. Our Smart Energy Management system optimizes energy consumption, reduces operational costs, and minimizes environmental impact. Using advanced analytics and AI, the system continuously monitors energy usage patterns and automatically adjusts settings to achieve optimal efficiency.\n\nKey Features:\n- Real-time energy monitoring\n- AI-driven optimization\n- Peak demand management\n- Renewable energy integration\n- Detailed analytics and reporting\n- Remote management capabilities\n\nImplementing our Smart Energy Management system typically results in 15-30% reduction in energy costs while improving operational reliability and reducing carbon footprint.",
    image: "/models/low_poly_toon_plane.glb",
    price: 85000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time energy monitoring",
      "AI-driven optimization",
      "Peak demand management",
      "Renewable energy integration",
      "Detailed analytics and reporting",
      "Remote management capabilities",
    ],
    specifications: {
      "Monitoring Points": "Up to 5000",
      "Data Sampling Rate": "1Hz",
      "Analysis Algorithms": "Machine learning & predictive",
      "User Interface": "Web-based dashboard",
      Integration: "APIs for major industrial systems",
      "Data Storage": "Cloud-based with local backup",
    },
    storyline: {
      title: "Powering a Sustainable Future",
      subtitle: "The Evolution of Smart Energy Management",
      chapters: [
        {
          title: "The Energy Challenge",
          content:
            "As global energy demands continue to rise and climate concerns intensify, industries face mounting pressure to optimize their energy consumption. Our Smart Energy Management system was conceived in 2016 as a response to this dual challenge: how to reduce energy costs while simultaneously minimizing environmental impact.",
        },
        {
          title: "The AI Revolution",
          content:
            "The breakthrough came when our team, led by Dr. Sarah Nakamura, developed a machine learning algorithm that could not only monitor energy usage but predict it with remarkable accuracy. By analyzing thousands of variables from weather patterns to production schedules, the system could optimize energy consumption in ways that would be impossible for human operators.",
        },
        {
          title: "Proof in Practice",
          content:
            "The first full-scale implementation was at the Westridge Manufacturing Complex, a facility that had struggled with high energy costs and reliability issues. Within six months, the Smart Energy Management system had reduced their energy consumption by 22%, eliminated power-related production stoppages, and decreased their carbon emissions by an equivalent of 3,000 tons annually.",
        },
        {
          title: "Expanding Impact",
          content:
            "Today, our Smart Energy Management system operates in over 200 industrial facilities worldwide, from food processing plants to automotive factories. The system has evolved to seamlessly integrate renewable energy sources, allowing facilities to maximize the use of clean energy while maintaining production reliability.",
        },
      ],
      conclusion:
        "As we look to the future, our Smart Energy Management system continues to evolve. The next generation will incorporate enhanced grid interaction capabilities, allowing facilities to not only consume energy more efficiently but also contribute to grid stability through intelligent demand response. This represents our vision of a truly interactive energy ecosystem where industrial facilities become active participants in building a more sustainable and resilient energy future.",
    },
  },
  {
    id: 5,
    name: "Tactical Drone X-Wing",
    category: "Defense",
    description:
      "Autonomous surveillance drone with advanced imaging capabilities. The X-Wing tactical drone provides real-time intelligence, surveillance, and reconnaissance in challenging environments. With extended flight time and sophisticated sensor packages, it delivers critical information to operators while maintaining a low acoustic and visual signature.\n\nKey Features:\n- 4-hour flight endurance\n- Encrypted data transmission\n- Thermal and optical imaging\n- Autonomous mission execution\n- Rapid deployment capability\n- Weather-resistant design\n\nThe X-Wing has been field-tested in diverse operational scenarios and proven to be a reliable asset for security forces and defense organizations worldwide.",
    image: "/models/low_poly_toon_plane.glb",
    price: 95000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "4-hour flight endurance",
      "Encrypted data transmission",
      "Thermal and optical imaging",
      "Autonomous mission execution",
      "Rapid deployment capability",
      "Weather-resistant design",
    ],
    specifications: {
      Range: "50km",
      "Max Speed": "120km/h",
      "Payload Capacity": "2.5kg",
      Weight: "8kg",
      Dimensions: "1.2m x 1.2m x 0.3m",
      "Operating Temperature": "-20°C to +50°C",
    },
    storyline: {
      title: "Eyes in the Sky: The X-Wing Story",
      subtitle: "From Concept to Critical Missions",
      chapters: [
        {
          title: "Genesis",
          content:
            "The X-Wing Tactical Drone program began in 2017 as a response to the growing need for reliable, autonomous aerial surveillance in challenging environments. Traditional drones faced significant limitations in adverse weather, extended operations, and covert deployment scenarios. Our engineering team, led by former military aviation specialist Colonel Marcus Reid, set out to create a drone that could overcome these limitations.",
        },
        {
          title: "Design Revolution",
          content:
            "The X-Wing's distinctive design emerged from hundreds of wind tunnel tests and computational fluid dynamics simulations. Its unique airframe configuration provides exceptional stability in turbulent conditions while minimizing acoustic signature. The breakthrough came with our proprietary power management system that extended flight time by 40% compared to similar-sized drones.",
        },
        {
          title: "Crisis Deployment",
          content:
            "The X-Wing's capabilities were dramatically demonstrated during the 2020 Western Forest Fires, when a fleet of prototype units was deployed to assist search and rescue operations. Operating in conditions of heavy smoke and thermal updrafts that grounded conventional aircraft, the X-Wings provided critical thermal imaging that helped locate and rescue 23 stranded hikers.",
        },
        {
          title: "Global Operations",
          content:
            "Today, X-Wing drones operate in some of the world's most challenging environments - from arctic research stations to border security operations in remote desert regions. Their ability to autonomously execute complex mission profiles while transmitting secure, real-time data has made them an invaluable asset for both defense and civilian agencies.",
        },
      ],
      conclusion:
        "The X-Wing represents more than just advanced drone technology; it embodies our commitment to creating systems that perform reliably when lives are at stake. As we continue to refine and enhance its capabilities, the X-Wing remains at the forefront of autonomous aerial surveillance, providing the critical situational awareness that decision-makers need in rapidly evolving scenarios.",
    },
  },
  // Other products without detailed storylines...
  {
    id: 6,
    name: "Satellite Communication Terminal",
    category: "Telecommunications",
    description:
      "High-bandwidth satellite communication system for remote operations. This terminal provides reliable connectivity in areas without conventional telecommunications infrastructure. Designed for rapid deployment and ease of use, it enables high-speed data transfer, voice communications, and video conferencing in challenging environments.\n\nKey Features:\n- Auto-acquiring satellite link\n- High-throughput data transfer\n- Multiple frequency band support\n- Ruggedized for field operations\n- Simple user interface\n- Low power consumption\n\nOur Satellite Communication Terminal is trusted by humanitarian organizations, remote industrial operations, and defense forces for mission-critical communications worldwide.",
    image: "/models/low_poly_toon_plane.glb",
    price: 180000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Auto-acquiring satellite link",
      "High-throughput data transfer",
      "Multiple frequency band support",
      "Ruggedized for field operations",
      "Simple user interface",
      "Low power consumption",
    ],
    specifications: {
      "Data Rate": "Up to 100Mbps",
      "Frequency Bands": "Ku, Ka, X",
      "Antenna Size": "1.2m",
      "Setup Time": "<10 minutes",
      Weight: "45kg (transportable)",
      "Power Consumption": "350W typical",
    },
    storyline: {
      title: "Connecting the Unconnected",
      subtitle: "The Satellite Communication Terminal Journey",
      chapters: [
        {
          title: "The Connectivity Gap",
          content:
            "In a world increasingly dependent on digital communication, nearly 40% of the global population still lacks reliable internet access. Our Satellite Communication Terminal project began in 2015 with a mission to bridge this gap, particularly in remote areas and during crisis situations when conventional infrastructure fails.",
        },
        {
          title: "Engineering Challenges",
          content:
            "Creating a truly portable, high-bandwidth satellite terminal presented enormous technical challenges. Our breakthrough came with the development of a lightweight carbon composite antenna and proprietary auto-alignment system that could establish a satellite connection in under 3 minutes - a process that traditionally required specialized technicians and hours of setup.",
        },
        {
          title: "Humanitarian Impact",
          content:
            "The terminal's true value was demonstrated during the 2018 Pacific Tsunami, when a fleet of our units was deployed to affected islands that had lost all communication infrastructure. Within hours, emergency response teams had established command centers with high-speed data connections, enabling coordination that saved countless lives.",
        },
        {
          title: "Beyond Emergency Response",
          content:
            "Today, our Satellite Communication Terminals serve diverse purposes beyond disaster response. They provide internet access to remote schools in mountainous regions, connect isolated medical clinics to specialist doctors, and enable scientific research in locations from the Arctic to the Amazon rainforest.",
        },
      ],
      conclusion:
        "As satellite technology continues to advance with lower-orbit constellations and higher bandwidths, our terminals evolve alongside them. The next generation, currently in development, will be 40% lighter with twice the data capacity, further expanding our ability to connect the unconnected and ensure that geography never limits human potential or safety.",
    },
  },
  // Remaining products...
  {
    id: 7,
    name: "Smart Traffic Management",
    category: "Transportation",
    description: "AI-powered traffic management system for urban environments",
    image: "/models/low_poly_toon_plane.glb",
    price: 135000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time traffic monitoring",
      "Adaptive signal control",
      "Incident detection and response",
      "Public transport prioritization",
      "Environmental impact reduction",
      "Comprehensive data analytics",
    ],
    specifications: {
      "Monitoring Capacity": "Up to 500 intersections",
      "Response Time": "<1 second",
      "AI Processing": "Edge and cloud computing",
      Integration: "Compatible with existing infrastructure",
      "Data Storage": "Secure cloud with local backup",
      "User Interface": "Web-based control center",
    },
  },
  {
    id: 8,
    name: "Solar Power Integration System",
    category: "Energy",
    description: "Complete solution for integrating solar power into existing infrastructure",
    image: "/models/low_poly_toon_plane.glb",
    price: 110000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Modular design for scalability",
      "Advanced power conversion",
      "Intelligent energy storage management",
      "Grid-tie and off-grid capabilities",
      "Remote monitoring and control",
      "Predictive maintenance",
    ],
    specifications: {
      "Capacity Range": "10kW to 1MW",
      "Conversion Efficiency": ">98%",
      "Storage Options": "Lithium-ion, flow battery",
      Monitoring: "Cloud-based with mobile app",
      "Installation Time": "1-4 weeks depending on size",
      Warranty: "10 years standard",
    },
  },
  {
    id: 9,
    name: "Perimeter Defense Systems",
    category: "Defense",
    description: "Integrated security system for critical infrastructure protection",
    image: "/models/low_poly_toon_plane.glb",
    price: 215000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Multi-sensor fusion technology",
      "AI-powered threat detection",
      "Automated response capabilities",
      "Seamless integration with existing security",
      "All-weather operation",
      "Low false alarm rate",
    ],
    specifications: {
      Coverage: "Up to 20km perimeter",
      "Detection Range": "10-500m (depending on sensor)",
      "Response Time": "<2 seconds",
      "False Alarm Rate": "<1%",
      "Power Requirements": "Mains with battery backup",
      "Operating Conditions": "-40°C to +65°C",
    },
  },
  {
    id: 10,
    name: "5G Network Infrastructure",
    category: "Telecommunications",
    description: "Complete 5G network deployment solution for urban and rural areas",
    image: "/models/low_poly_toon_plane.glb",
    price: 320000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Scalable architecture",
      "Virtualized network functions",
      "Edge computing integration",
      "Automated network management",
      "Spectrum efficiency optimization",
      "Future-proof upgrade path",
    ],
    specifications: {
      Capacity: "Up to 10,000 simultaneous users per cell",
      Latency: "<5ms",
      Bandwidth: "Up to 10Gbps",
      "Frequency Support": "Sub-6GHz and mmWave",
      "Power Efficiency": "30% better than industry standard",
      "Deployment Time": "50% faster than traditional methods",
    },
  },
  {
    id: 11,
    name: "Autonomous Train Control",
    category: "Transportation",
    description: "Next-generation autonomous control system for railway operations",
    image: "/models/low_poly_toon_plane.glb",
    price: 275000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Fully autonomous operation capability",
      "Precision stopping and acceleration",
      "Obstacle detection and avoidance",
      "Energy-efficient driving profiles",
      "Remote monitoring and intervention",
      "Seamless integration with existing signaling",
    ],
    specifications: {
      "Safety Integrity Level": "SIL4",
      "Positioning Accuracy": "<10cm",
      "Reaction Time": "<0.1 seconds",
      "Energy Savings": "Up to 15%",
      "Operational Modes": "GoA 1-4 (all automation levels)",
      "Regulatory Compliance": "CENELEC, IEEE standards",
    },
  },
  {
    id: 12,
    name: "Microgrid Controller",
    category: "Energy",
    description: "Advanced control system for managing distributed energy resources",
    image: "/models/low_poly_toon_plane.glb",
    price: 95000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time load balancing",
      "Renewable energy prioritization",
      "Predictive energy management",
      "Seamless grid connection/islanding",
      "Demand response capabilities",
      "Comprehensive monitoring and analytics",
    ],
    specifications: {
      "Control Capacity": "Up to 5MW",
      "Response Time": "<100ms",
      "Energy Sources": "Solar, wind, battery, diesel, grid",
      Communication: "Modbus, DNP3, IEC 61850",
      "User Interface": "Web-based dashboard",
      Redundancy: "N+1 configuration available",
    },
  },
  {
    id: 13,
    name: "Underwater Surveillance System",
    category: "Defense",
    description: "Sonar-based detection system for maritime security applications",
    image: "/models/low_poly_toon_plane.glb",
    price: 185000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Long-range detection capabilities",
      "Automatic target recognition",
      "Low false alarm rate",
      "Integration with surface surveillance",
      "Minimal maintenance requirements",
      "Scalable for different deployment sizes",
    ],
    specifications: {
      "Detection Range": "Up to 3km",
      "Depth Rating": "300m",
      "Target Classification": "Divers, UUVs, marine mammals",
      "Power Requirements": "24V DC or 110/220V AC",
      "Data Output": "Ethernet, fiber optic",
      "Operating Life": ">5 years with minimal maintenance",
    },
  },
  {
    id: 14,
    name: "Emergency Response Network",
    category: "Telecommunications",
    description: "Resilient communication network for disaster response scenarios",
    image: "/models/low_poly_toon_plane.glb",
    price: 145000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Rapid deployment capability",
      "Self-contained power supply",
      "Multi-technology connectivity",
      "Encrypted communications",
      "Intuitive operation under stress",
      "Interoperability with existing systems",
    ],
    specifications: {
      "Deployment Time": "<30 minutes",
      "Coverage Area": "Up to 5km radius",
      "User Capacity": "250 simultaneous users",
      "Power Autonomy": "72 hours standard",
      Transport: "Vehicle-mounted or air-droppable",
      "Environmental Rating": "IP67, MIL-STD-810G",
    },
  },
  {
    id: 15,
    name: "Airport Navigation System",
    category: "Transportation",
    description: "Precision navigation and guidance system for airport operations",
    image: "/models/low_poly_toon_plane.glb",
    price: 230000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "All-weather operation capability",
      "Real-time aircraft tracking",
      "Optimized taxi routing",
      "Runway incursion prevention",
      "Integration with air traffic control",
      "Comprehensive data recording",
    ],
    specifications: {
      "Positioning Accuracy": "<1m",
      "Update Rate": "1Hz",
      Coverage: "Entire airport surface",
      "Visibility Operation": "Zero visibility capable",
      "Regulatory Compliance": "ICAO, FAA, EASA standards",
      Reliability: "99.99% uptime",
    },
  },
  {
    id: 16,
    name: "Industrial Energy Optimizer",
    category: "Energy",
    description: "AI-driven system for optimizing energy usage in manufacturing facilities",
    image: "/models/low_poly_toon_plane.glb",
    price: 125000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time energy monitoring",
      "Machine learning optimization",
      "Predictive maintenance integration",
      "Demand response automation",
      "Comprehensive reporting",
      "Easy integration with existing systems",
    ],
    specifications: {
      "Monitoring Points": "Up to 10,000",
      "Data Processing": "Edge and cloud computing",
      "Energy Savings": "15-25% typical",
      "ROI Period": "12-24 months typical",
      Integration: "OPC-UA, Modbus, BACnet, proprietary",
      "User Interface": "Web-based with mobile access",
    },
  },
  {
    id: 17,
    name: "Cybersecurity Defense Suite",
    category: "Defense",
    description: "Comprehensive cybersecurity solution for critical infrastructure",
    image: "/models/low_poly_toon_plane.glb",
    price: 195000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time threat monitoring",
      "Anomaly detection and prevention",
      "Secure remote access management",
      "Vulnerability assessment",
      "Incident response automation",
      "Compliance management",
    ],
    specifications: {
      "Protection Scope": "IT and OT networks",
      "Threat Intelligence": "Real-time updates",
      "Detection Time": "<5 seconds for known threats",
      "False Positive Rate": "<0.1%",
      Compliance: "NERC CIP, IEC 62443, NIST",
      "Deployment Options": "On-premises or hybrid cloud",
    },
  },
  {
    id: 18,
    name: "IoT Gateway Platform",
    category: "Telecommunications",
    description: "Secure gateway for industrial IoT device management and data collection",
    image: "/models/low_poly_toon_plane.glb",
    price: 85000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Multi-protocol support",
      "Edge computing capability",
      "Secure data transmission",
      "Remote device management",
      "Offline operation mode",
      "Scalable architecture",
    ],
    specifications: {
      "Device Connectivity": "Up to 500 devices per gateway",
      Protocols: "Modbus, MQTT, OPC-UA, BACnet, Zigbee, LoRa",
      Security: "TLS 1.3, certificate management",
      Processing: "Quad-core ARM processor",
      Storage: "32GB industrial grade",
      "Environmental Rating": "IP65, -40°C to +70°C",
    },
  },
  {
    id: 19,
    name: "Maritime Traffic Management",
    category: "Transportation",
    description: "Integrated system for monitoring and managing maritime vessel traffic",
    image: "/models/low_poly_toon_plane.glb",
    price: 165000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time vessel tracking",
      "Traffic flow optimization",
      "Collision and grounding alerts",
      "Port resource management",
      "Historical data analysis",
      "Weather integration",
    ],
    specifications: {
      "Coverage Range": "Up to 50 nautical miles",
      "Tracking Capacity": "1000+ vessels simultaneously",
      "Data Sources": "Radar, AIS, CCTV, VHF",
      "Update Rate": "2-10 seconds",
      Compliance: "IALA, IMO standards",
      Availability: "99.9% uptime",
    },
  },
  {
    id: 20,
    name: "Wind Farm Management System",
    category: "Energy",
    description: "Complete solution for optimizing wind farm operations and maintenance",
    image: "/models/low_poly_toon_plane.glb",
    price: 140000,
    videoUrl: "https://www.youtube.com/embed/V_Btofw8dLI?si=3Sz55VDJxsXCfI7Q&controls=0&autoplay=0&mute=0&loop=1&playlist=V_Btofw8dLI",
    features: [
      "Real-time performance monitoring",
      "Predictive maintenance",
      "Power production optimization",
      "Grid integration management",
      "Environmental compliance",
      "Comprehensive reporting",
    ],
    specifications: {
      "Turbine Compatibility": "All major manufacturers",
      Monitoring: "SCADA integration, 10-second updates",
      Analytics: "AI-based performance and failure prediction",
      "Production Increase": "3-8% typical",
      "Maintenance Savings": "15-25% typical",
      "User Interface": "Web-based with mobile access",
    },
  },
]

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
