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
      src="/images/image.PNG" // actual logo pedding
      alt="Clear Drop Tech Logo"
      className="h-100 w-100 mb-4"
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
    Powering Your Digital Presence with Clear Drop Tech
  </h2>

  <p className="text-gray-300 mb-4">
    At <strong>Clear Drop Tech</strong>, we specialize in delivering cutting-edge <strong>software solutions</strong> and impactful <strong>graphic design</strong> services to help your brand stand out and scale confidently in today’s digital world.
  </p>

  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
    <li>Custom website & web app development</li>
    <li>Creative logo and brand identity design</li>
    <li>User-friendly interfaces & responsive design</li>
    <li>Marketing visuals & social media content</li>
    <li>Digital strategy & branding consultations</li>
    <li>Reliable support & ongoing maintenance</li>
  </ul>

  <p className="text-gray-300">
    Whether you're a startup, a growing business, or an individual looking to create a professional digital footprint — we're here to help you bring your vision to life.
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
