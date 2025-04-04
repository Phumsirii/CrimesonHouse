// pages/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="relative h-full">
          <Image
            src="/image/GFXP0640.jpg"
            alt="Poster"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "50% 36%" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wider">
            CRIM(E)SONE
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wider">
            HOUSE
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            2-4 May 2025
          </h2>
          <h3 className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            ความจริงทุกอย่าง อยู่ในบ้านหลังนั้น คุณต้องไปพิสูจน์ด้วยตัวคุณเอง
          </h3>
          <Link
            href="/tickets"
            className="bg-amber-700 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase text-lg tracking-wider transition-colors"
          >
            Book Tickets
          </Link>
        </div>
      </section>

      {/* Show Info Section */}
      <section className="py-20 bg-[url('/image/BG-red-retouch.png')]">
        <div className="flex flex-col mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-amber-700 after:bottom-[-15px] after:left-1/2 after:transform after:-translate-x-1/2">
            Teaser
          </h2>
          <video className=""></video>
        </div>
      </section>
    </div>
  );
}
