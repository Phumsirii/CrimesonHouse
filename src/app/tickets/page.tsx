import Link from "next/link";
import Image from "next/image";

export default function Ticket() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col py-28 lg:px-40 md:px-32 sm:px-20 px-4 text-[#E8D1A7] bg-[url('/image/red_bg.jpg')] bg-cover">
      <div className="flex flex-col lg:px-8 px-4 w-full h-full justify-start text-center items-center space-y-16 py-10">
        <h1 className="font-bold text-7xl">Ticket</h1>
        <div className="grid lg:grid-cols-2 sm:grid-rows-2">
          <div className="flex justify-center lg:-mt-20">
            <Image
              src="/image/invitation.png"
              width={550}
              height={550}
              alt="invitational-card"
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="text-xl lg:text-2xl text-left">
              เริ่มสำรองที่นั่งได้ตั้งแต่วันที่ 8 เมษายน 2568 <br />
              ผ่านทาง Line Official&#58; &#64;Crimesonhouse <br />
              สมทบทุนเพื่อสำรองที่นั่ง 250 บาท
              <br />
              <br />
              แสดงในวันที่ 2-4 พฤษภาคม 2568 <br />
              โดยมี 5 รอบการแสดง
              <br />
              2 พ.ค. 68 เวลา 18:00 น.
              <br />
              3 พ.ค. 68 เวลา 13:00 และ 18:00 น.
              <br />
              4 พ.ค. 68 เวลา 13:00 และ 18:00 น.
              <br />
              <br />
              ณ The Manor Studio (รามคำแหง ซอย 24 ใกล้ Airport Link รามคำแหง){" "}
              <br />
              การแสดงมีระยะเวลาประมาณ 1 ชั่วโมง
            </div>
            <div className="mt-10 flex gap-3 flex-wrap">
              <Link
                href="https://shop.line.me/@crimesonhouse"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-[#E8D1A7] w-[310px]  md:text-lg text-m hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase  tracking-wider transition-colors"
              >
                สำรองบัตรได้ทาง <br /> Line Shopping
              </Link>
              <Link
                href="https://lin.ee/Zm0GY3d"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-[#E8D1A7]  w-[310px] md:text-lg text-m hover:bg-amber-600 text-black font-bold py-4 px-8 rounded uppercase tracking-wider transition-colors"
              >
                สอบถามเพิ่มเติมได้ทาง <br /> Line OA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
