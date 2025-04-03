import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="hidden bg-black/60 z-15 fixed w-full p-2 h-1/10 lg:flex justify-between items-center">
      <div className="mt-4">
        <Image
          src="/image/LOGO-t-01.png"
          alt="CrimesoneHouse Logo"
          width={120}
          height={80}
        />
      </div>

      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/introduction"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link
            href="/tickets"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Ticket
          </Link>
        </li>
        <li>
          <Link
            href="/story"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Story Behind Our Project
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/sponsorship"
            className="text-white uppercase text-sm font-semibold tracking-wider hover:text-amber-400 transition-colors"
          >
            Special Thanks
          </Link>
        </li>
      </ul>

      <Link
        href="/tickets"
        className="bg-amber-700 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded uppercase text-sm tracking-wider transition-colors"
      >
        Book Now
      </Link>

      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
