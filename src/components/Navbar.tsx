import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Left side: Logo + Brand */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/Clear-Logo-icon.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold">CLEAR DROP TECH</span>
        </Link>
      </div>

      {/* Right side: Navigation */}
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="#AboutSection">About</Link>
        <Link href="#ContactSection">Contact</Link>
        <Link href="/marketing">Market</Link>
      </div>
    </nav>
  );
}
