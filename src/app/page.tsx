import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutSection from '@/components/AboutSection'
import AboutCompany from '../components/AboutCompany'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Clear Drop Tech</title>
        <meta name="description" content="A modern website using Next.js + Tailwind CSS" />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center px-6 py-12">
  
  <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left space-y-4">
    <img
      src="/logo.svg" // actual logo pedding
      alt="Clear Drop Tech Logo"
      className="h-20 w-auto mb-4"
    />

    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
      <strong>CLEAR DROP TECH</strong>
    </h1>

    <p className="text-lg text-gray-400">
      Where design and code meets clarity
    </p>
  </div>

  <div className="mt-10 md:mt-0 md:w-1/2 md:pl-12">
    <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
      Streamline Your Business with Clear Drop Tech
    </h2>

    <p className="text-gray-300 mb-4">
      Empower your operations with our advanced <strong>Field Force Sales App</strong> — built to automate and enhance your sales, delivery, and distribution processes. Whether you're managing van sales, bike deliveries, or on-foot agents, our mobile solution is designed to optimize performance and reduce operational costs.
    </p>

    <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
      <li>Smart order taking</li>
      <li>Delivery route optimization</li>
      <li>Geo-tagging & location tracking</li>
      <li>Real-time inventory management</li>
      <li>Offline synchronization</li>
      <li>Sales and returns tracking</li>
    </ul>

    <p className="text-gray-300">
      Perfect for <strong>supply chains, FMCG sales teams, logistics, and distribution companies</strong> — all managed seamlessly through one powerful platform.
    </p>
  </div>
</main>

<AboutSection />
<AboutCompany />
<ProjectsSection />
<ContactSection />
<Footer />      
    </>
  )
}
