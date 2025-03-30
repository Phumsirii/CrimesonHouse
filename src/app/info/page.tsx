import Image from "next/image";

export default function InfoPage() {
  return (
    <div className="max-h-screen max-w-screen flex flex-col lg:px-40 md:px-32 sm:px-20 px-4 space-y-4 lg:space-y-10 mt-5">
      <div className="sm:text-7xl text-5xl font-bold">Info</div>
      <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-6 sm:space-y-0">
        <Image
          src="/image/image.png"
          alt="Image"
          width={400}
          height={800}
          className="rounded-lg"
        />

        <div className="flex flex-col sm:justify-end space-y-2 sm:space-y-10">
          <div className="space-y-0">
            <div className="flex justify-center p-2 sm:text-7xl text-5xl font-bold">
              CRIM&#40;E&#41;SON
            </div>
            <div className="flex justify-center p-2 sm:text-7xl text-5xl font-bold">
              HOUSE
            </div>
          </div>
          <div className="text-xl lg:text-2xl">
            The Aurora Echo-9 is a state-of-the-art drone designed for
            high-altitude exploration and environmental monitoring. Equipped
            with an advanced AI-driven navigation system, it can autonomously
            map terrain, analyze atmospheric conditions, and capture ultra-HD
            imagery in extreme weather. Its lightweight carbon-fiber frame
            ensures durability while maintaining agility, and the built-in solar
            recharge system allows for extended flight times.
          </div>
        </div>
      </div>
    </div>
  );
}
