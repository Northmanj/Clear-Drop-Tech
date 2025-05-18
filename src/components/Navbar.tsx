import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold"><strong>CLEAR DROP TECH</strong></h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/AboutSection"></Link>
        <Link href="/ContactSection"></Link>
      </div>
    </nav>
  );
}
