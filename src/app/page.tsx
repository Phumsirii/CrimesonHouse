"use client";

import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const language = useAppSelector((state) => state.languageSlice.language);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="w-screen bg-cover bg-center h-screen  py-50 lg:h-screen lg:border-none lg:bg-cover lg:bg-[position:20%_32%] bg-[url('/image/GFXP0640.jpg')]">
        <div className="flex flex-col items-center h-full justify-center text-center px- ">
          <Image
            alt="title"
            src="/image/ชื่อเรื่อง.png"
            width={800}
            height={800}
          />
          <h2 className="text-3xl md:text-5xl font-light mb-8 max-w-3xl">
            2-4 May 2025
          </h2>
          <h3 className="md:hidden text-xl sm:text-xl italic font-light mb-8 text-center">
            {language === "TH" ? (
              <q>
                ความจริงทุกอย่าง อยู่ในบ้านหลังนั้น <br />
                คุณต้องไปพิสูจน์ด้วยตัวคุณเอง
              </q>
            ) : (
              <q>
                The truth lies within that house;
                <br />
                now it is your turn to uncover it.
              </q>
            )}
          </h3>

          <h3 className="hidden md:block text-2xl italic font-light mb-8 text-center">
            {language === "TH" ? (
              <q>
                ความจริงทุกอย่าง อยู่ในบ้านหลังนั้น
                คุณต้องไปพิสูจน์ด้วยตัวคุณเอง
              </q>
            ) : (
              <q>
                The truth lies within that house; now it is your turn to uncover
                it.
              </q>
            )}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E8D1A7] mb-16">
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
