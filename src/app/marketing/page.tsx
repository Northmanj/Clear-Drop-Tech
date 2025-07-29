'use client'

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image';
import { FaHospitalSymbol, FaStore, FaGlobe, FaCartPlus, FaRobot, FaBriefcase, FaPenNib, FaChartLine } from 'react-icons/fa';

const products = [
  {
    title: "Modern HMS",
    description: "Streamline hospital operations with our robust Hospital Management System.",
    icon: <FaHospitalSymbol className="text-3xl text-blue-600" />,
  },
  {
    title: "POS System",
    description: "Fast, reliable, and user-friendly Point of Sale for retail and restaurants.",
    icon: <FaStore className="text-3xl text-green-600" />,
  },
  {
    title: "E-Commerce Website",
    description: "Launch your online store with modern e-commerce solutions.",
    icon: <FaCartPlus className="text-3xl text-purple-600" />,
  },
  {
    title: "Website Design",
    description: "Professional websites built for speed, design, and mobile-first.",
    icon: <FaGlobe className="text-3xl text-orange-500" />,
  },
  {
    title: "DeepFake AI Detector",
    description: "Protect your brand with our AI-powered deepfake detection tool.",
    icon: <FaRobot className="text-3xl text-red-600" />,
  },
  {
    title: "Logo & Poster Design",
    description: "Creative designs for your brand identity, marketing, and events.",
    icon: <FaPenNib className="text-3xl text-pink-600" />,
  },
  {
    title: "eCitizen Business Registration",
    description: "We help you register your business, fast and legally via eCitizen.",
    icon: <FaBriefcase className="text-3xl text-amber-700" />,
  },
   {
    title: "Modern Dashboard Templates with React",
    description: "Interactive, powerful dashboards for admins, businesses, or analytics systems.",
    icon: <FaChartLine className="text-3xl text-cyan-700" />,
  },
];

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
        <Navbar/>
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-br from-indigo-600 to-black-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Empowering Businesses with Smart Software Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl"
        >
          From hospitals to shops — we build technology that works.
        </motion.p>
      </section>
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Whats News</h2>
        
    
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto my-10">
      <div className="flex items-center justify-center min-h-screen bg-black-100">
        <img
      src="/images/DeepFake clear.PNG" // actual logo pedding
      alt="Centered Image"
      className="h-100 w-100 mb-4"
    />
    </div>
      <h2 className="text-2xl font-semibold mb-4">DeepFake Detection Web App</h2>
      <p className="text-gray-300 leading-relaxed">
        DeepFake Detection Web App is an AI-powered platform designed to identify manipulated or synthetic media content, particularly videos and images altered using deep learning techniques. It serves journalists, content reviewers, security agencies, and everyday users seeking to verify authenticity. By uploading media, the app analyzes content using trained AI models to detect facial inconsistencies, artifacts, and audio mismatches. Results are displayed in a visual dashboard, helping users assess whether the content is real or artificially generated.
      </p>
      <a href="https://deep-fake-qm56.vercel.app" className="text-blue-600 underline">Live Demo</a>
    </div  >
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto my-10">
      <div className="flex items-center justify-center min-h-screen bg-black-100">
        <img
      src="/images/clear_drop_tech_qr.png" // actual logo pedding
      alt="Centered Image"
      className="h-100 w-100 mb-4"
    />
    </div>
      <h2 className="text-2xl font-semibold mb-4">QR Payment System for Lounges</h2>
      <p className="text-gray-300 leading-relaxed">
       This QR-based payment system simplifies transactions for lounges and hospitality venues. Guests scan a code to pay instantly via M-Pesa, access digital menus, connect to Wi-Fi, and even book VIP services—all through their phone. The system reduces service delays, enhances guest experience, and allows managers to track payments and engagement in real time.
      </p>
</div>

      </section>

      {/* Product Section */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-xl transition-all"
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4 text-gray-700">Interested in working with us or learning more?</p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:cleardroptech@gmail.com" className="text-blue-600 underline">support@cleardroptech</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/Clear-Drop-Tech" className="text-blue-600 underline" target="_blank">Clear Drop</a></p>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
