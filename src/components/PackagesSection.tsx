'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PackagesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6 rounded-xl shadow-xl max-w-5xl mx-auto my-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Computer Packages & IT Essentials
        </h2>

        <p className="mb-6 text-lg">
          Get hands-on computer training at <strong>Clear Drop Tech</strong>. Learn Microsoft Office, Internet, Email, and IT basics — perfect for students and job seekers!
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg space-y-4">
          <h3 className="text-2xl font-semibold text-blue-500">📚 What You’ll Learn</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>MS Word, Excel & PowerPoint</li>
            <li>Internet Browsing & Email Use</li>
            <li>File Management, Typing Skills</li>
            <li>Digital Literacy & Basic IT Concepts</li>
          </ul>

          <div className="mt-6 space-y-2 text-sm">
            <p> <strong>Location:</strong> Rongai, Nairobi</p>
            <p> <strong>Duration:</strong> 2 - 4 Weeks</p>
            <p><strong>Fee:</strong> From Ksh 1,000</p>
            <p><strong>Certificate:</strong> Provided upon completion</p>
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="https://wa.me/254793789339"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              WhatsApp Us
            </Link>
            <Link
              href="mailto:johngregory6400@gmail.com"
              className="text-blue-600 underline"
            >
              Email Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
