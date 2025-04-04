import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Ticket() {
  return (
    <div className="max-h-screen max-w-screen flex flex-col py-28 lg:px-40 md:px-32 sm:px-20 px-4 ">
      <div className="font-zahrah-thai flex bg-[#F2D6B3] flex-col border lg:px-8 px-4 w-full h-full justify-start text-center items-center space-y-16 py-10">
        <h1 className="font-bold text-5xl">Ticket</h1>
        <div className="text-xl lg:text-2xl">
          เริ่มสำรองที่นั่งได้ตั้งแต่วันที่ 8 เมษายน 2568 ผ่านทาง Line
          Official&#58; &#64;Crimesonhouse สมทบทุนเพื่อสำรองที่นั่งในราคา 250
          บาท
        </div>

        <div className="text-xl lg:text-2xl">
          Seat reservations start on April 8&#44; 2025 through Line
          Official&#58; &#64;Crimesonhouse Supporting donation for seat
          reservation&#58; 250 Baht
        </div>

        <Link
          className="text-white flex flex-row space-x-2 lg:space-x-8 bg-[#06C755] items-center rounded-2xl p-2"
          href={"https://lin.ee/Zm0GY3d"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="ri:line-fill" className="w-12 lg:w-20 h-full" />
          <div className="flex flex-col">
            <div className="text-2xl lg:text-4xl">&#64;CrimesonHouse</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
