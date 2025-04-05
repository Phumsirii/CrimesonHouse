import Link from "next/link";
import Image from "next/image";
import NavSidebar from "./sidebar";

export default function TopBar() {
  return (
    <div className=" bg-black/60 z-15 fixed w-full p-2 h-1/10 flex justify-between items-center">
      <div className="mt-4">
        <Image
          src="/image/LOGO-t-01.png"
          alt="CrimesoneHouse Logo"
          width={120}
          height={80}
        />
      </div>

      <ul className="lg:flex justify-center space-x-8 hidden">
        <li>
          <Link
            href="/"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            href="/introduction"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Introduction</div>
          </Link>
        </li>
        <li>
          <Link
            href="/tickets"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Ticket</div>
          </Link>
        </li>
        <li>
          <Link
            href="/our-story"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Story Behind Our Project</div>
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Contact Us</div>
          </Link>
        </li>
        <li>
          <Link
            href="/sponsorship"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors text-center"
          >
            <div>Special Thanks</div>
          </Link>
        </li>
      </ul>

      <NavSidebar />
    </div>
  );
}
