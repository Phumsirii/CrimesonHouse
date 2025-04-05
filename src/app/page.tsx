// pages/index.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="w-screen bg-cover bg-center h-screen  py-50 border lg:h-screen lg:border-none lg:bg-cover lg:bg-[position:20%_40%] bg-[url('/image/GFXP0640.jpg')]">
        <div className="flex flex-col items-center h-full justify-center text-center px- ">
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
        <div className="flex flex-col mx-auto items-center px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-amber-700 after:bottom-[-15px] after:left-1/2 after:transform after:-translate-x-1/2">
            Teaser
          </h2>
            <div className="mx-5 w-full max-w-4xl aspect-video">
              <iframe 
                src="https://drive.google.com/file/d/1bvvy8iP2ISLK_M3_oYhCtG_fikGPS89g/preview" 
                className=" w-full h-full origin-center rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
        </div>
      </section>
    </div>
  );
}
