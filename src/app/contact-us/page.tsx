import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="bg-[url('/image/red_bg.jpg')] text-white bg-cover bg-center h-screen w-screen flex flex-col py-24 lg:px-40 md:px-32 sm:px-20 px-4 space-y-4 lg:space-y-10 ">
      <div className="flex justify-center p-2 sm:text-7xl text-5xl font-bold lg:mt-10">
        CONTACT US
      </div>
      <div className="flex flex-row text-xl lg:text-2xl">
        <div className="flex flex-col space-y-10 lg:space-y-16">
          <Link
            className="flex flex-row space-x-2 lg:space-x-8 bg-black/60 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2"
            href={
              "https://www.instagram.com/crimesonhouse?igsh=d2wzNzNxemVibTBl&utm_source=qr"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:instagram" className="w-12 lg:w-20 h-full" />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">&#64;crimesonhouse</div>
            </div>
          </Link>

          <Link
            className="flex flex-row space-x-2 lg:space-x-8 bg-black/60 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2"
            href={
              "https://www.tiktok.com/@crimesonhouse?_t=ZS-8vCfJXlsCQs&_r=1"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="akar-icons:tiktok-fill"
              className="w-12 lg:w-20 h-full"
            />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">crimesonhouse</div>
            </div>
          </Link>

          <Link
            className="flex flex-row space-x-2 lg:space-x-8 bg-black/60 items-center shadow-2xl hover:-translate-y-0.5 delay-100 transform transition-transform duration-200 rounded-2xl p-2"
            href={"https://lin.ee/Zm0GY3d"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ri:line-fill" className="w-12 lg:w-20 h-full" />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">&#64;CrimesonHouse</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
