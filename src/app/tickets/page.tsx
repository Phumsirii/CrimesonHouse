"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";

export default function Ticket() {
  const language = useAppSelector((state) => state.languageSlice.language);

  return (
    <div className="min-w-screen min-h-screen flex flex-col py-28 lg:px-40 md:px-16 sm:px-10 px-4 text-[#E8D1A7] bg-[url('/image/red_bg.jpg')] bg-cover">
      <div className="flex flex-col lg:px-8 px-4 w-full h-full justify-start text-center items-center space-y-16 py-10">
        <h1 className="font-bold text-7xl">Ticket</h1>
        <div className="grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-x-8">
          <div className="flex justify-center lg:-mt-20">
            <Image
              src="/image/invitation.png"
              width={550}
              height={550}
              alt="invitational-card"
              className="object-contain"
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="text-xl lg:text-2xl text-left">
              {language === "TH"
                ? `เริ่มสำรองที่นั่งได้ตั้งแต่วันที่ 8 เมษายน 2568`
                : `Seat reservations start on April 8, 2025`}{" "}
              <br />
              {language === "TH"
                ? "ผ่านทาง Line Official: @Crimesonhouse"
                : "through Line Official: @Crimesonhouse"}{" "}
              <br />
              {language === "TH"
                ? `สมทบทุนเพื่อสำรองที่นั่ง 250 บาท`
                : "Supporting donation for seat reservation: 250 Baht"}
              <br />
              <br />
              {language == "TH"
                ? "แสดงในวันที่ 2-4 พฤษภาคม 2568"
                : "Performance dates: May 2-4, 2025"}
              <br />
              {language === "TH" ? "โดยมี 5 รอบการแสดง" : " With 5 showtimes"}
              <br />
              {language === "TH"
                ? "2 พ.ค. 68 เวลา 18:00 น."
                : "May 2, 2025 at 6:00 PM"}
              <br />
              {language === "TH"
                ? "3 พ.ค. 68 เวลา 13:00 และ 18:00 น."
                : "May 3, 2025 at 1:00 PM and 6:00 PM"}
              <br />
              {language === "TH"
                ? "4 พ.ค. 68 เวลา 13:00 และ 18:00 น."
                : "May 4, 2025 at 1:00 PM and 6:00 PM"}
              <br />
              <br />
              {language === "TH"
                ? "ณ The Manor Studio (รามคำแหง ซอย24 ใกล้ Airport Link รามคำแหง)"
                : "At The Manor Studio (Ramkhamhaeng Soi 24 Near Ramkhamhaeng Airport Link Station)"}
              <br />
              {language === "TH"
                ? "การแสดงมีระยะเวลาประมาณ 1 ชั่วโมง"
                : "Performance duration approximately 1 hour"}
            </div>
            <div className="mt-10 flex gap-3 flex-wrap">
              <Link
                href="https://shop.line.me/@crimesonhouse"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-[#E8D1A7] w-[250px] md:text-lg text-m hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase  tracking-wider transition-colors"
              >
                {language === "TH" ? "สำรองบัตรได้ทาง" : "Seat Reservation via"}
                <br /> Line Shopping
              </Link>
              <Link
                href="https://lin.ee/Zm0GY3d"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-[#E8D1A7]  w-[250px] md:text-lg text-m hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase tracking-wider transition-colors"
              >
                {language === "TH" ? "สอบถามเพิ่มเติมได้ทาง" : "Q&A"}
                <br /> Line OA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
