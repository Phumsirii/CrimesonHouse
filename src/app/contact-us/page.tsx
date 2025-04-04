import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="bg-[url('/image/bg-statue.png')] text-white bg-cover bg-center h-screen w-screen flex flex-col py-24 lg:px-40 md:px-32 sm:px-20 px-4 space-y-12 lg:space-y-24">
      <div className="flex justify-center p-2 sm:text-5xl text-3xl font-bold lg:mt-10">
        CONTACT US
      </div>

      <div className="flex flex-row flex-wrap gap-10 justify-center">
        <Link
          className="bg-[linear-gradient(25deg,_#feda75,_#fa7e1e,_#d62976,_#962fbf,_#4f5bd5)] flex flex-row space-x-2 lg:space-x-8 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2 w-80 justify-center"
          href={
            "https://www.instagram.com/crimesonhouse?igsh=d2wzNzNxemVibTBl&utm_source=qr"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:instagram" className="w-6 lg:w-9 h-full" />
          <div className="flex flex-col">
            <div className="text-xl lg:text-3xl">&#64;crimesonhouse</div>
          </div>
        </Link>

        <Link
          className="bg-[linear-gradient(25deg,_#69C9D0,_#000000,_#EE1D52)] flex flex-row space-x-2 lg:space-x-8 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2 w-80 justify-center"
          href={"https://www.tiktok.com/@crimesonhouse?_t=ZS-8vCfJXlsCQs&_r=1"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="akar-icons:tiktok-fill" className="w-6 lg:w-9 h-full" />
          <div className="flex flex-col">
            <div className="text-xl lg:text-3xl">crimesonhouse</div>
          </div>
        </Link>

        <Link
          className="bg-[#06C755] flex flex-row space-x-2 lg:space-x-8 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2 w-80  justify-center"
          href={"https://lin.ee/Zm0GY3d"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="ri:line-fill" className="w-6 lg:w-9 h-full" />
          <div className="flex flex-col">
            <div className="text-xl lg:text-3xl">&#64;CrimesonHouse</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
