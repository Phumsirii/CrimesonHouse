// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
       
      {/* Hero Section */}
      <section className="relative h-screen  border">
        <div className="absolute bg-black/60 z-15 fixed w-full p-2 h-1/10 flex justify-between items-center">
          <div className="mt-4">
            <Image
              src="/image/LOGO-t-01.png"
              alt="CrimesoneHouse Logo"
              width={120}
              height={80}
            />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Introduction</Link></li>
              <li><Link href="/cast" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Ticket</Link></li>
              <li><Link href="/tickets" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Story Behind Our Project</Link></li>
              <li><Link href="/gift-vouchers" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors">Special Thanks</Link></li>
            </ul>
          </nav>
          
          <Link href="/tickets" className="bg-amber-700 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded uppercase text-sm tracking-wider transition-colors">
            Book Now
          </Link>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="relative h-full">
          <Image
            src="/image/GFXP0640.jpg"
            alt="Phantom of the Opera Hero"
            fill={true}
            style={ {objectFit: "cover", objectPosition: "50% 36%" }}
          />
        </div>
        <div className="absolute top-70 left-100 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wider">CRIM(E)SONE</h1>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wider">HOUSE</h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 max-w-3xl">2-4 May 2025</h2>
          <h3 className="text-xl md:text-2xl font-light mb-8 max-w-3xl">ความจริงทุกอย่าง อยู่ในบ้านหลังนั้น คุณต้องไปพิสูจน์ด้วยตัวคุณเอง</h3>
          <Link href="/tickets" className="bg-amber-700 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase text-lg tracking-wider transition-colors">
            Book Tickets
          </Link>
        </div>
      </section>

      {/* Show Info Section */}
      <section className="bg-zinc-900 py-20">
        <div className="flex flex-col mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-amber-700 after:bottom-[-15px] after:left-1/2 after:transform after:-translate-x-1/2">Teaser</h2>
          <video className='border '>
          </video>
        </div>
      </section>
     
    </div>
  );
}