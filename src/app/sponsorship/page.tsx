import Image from "next/image";

const sponsors = [
  "/globe.svg",
  "/file.svg",
  "/next.svg",
  "/window.svg",
  "/globe.svg",
];

export default function SponsorshipPage() {
  return (
    <div className="max-h-screen max-w-screen gap-y-16 flex flex-col py-50 lg:px-40 md:px-32 sm:px-20 px-4 lg:space-y-10 ">
      <div className="sm:text-7xl text-6xl font-bold text-center">
        Thank You
      </div>
      <div className="flex flex-wrap justify-center lg:gap-x-16 gap-y-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex p-4 w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              src={sponsor}
              alt="Logo"
              width={400}
              height={800}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
