"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface CardProps {
  description: string;
  name: string;
  imageSrc: string;
}
const Card: React.FC<CardProps> = ({ description, name, imageSrc }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative h-100 w-80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        initial={false}
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute h-full inset-0 w-full backface-hidden text-black">
          <Image src={imageSrc} alt="Card image" layout="fill" />
        </div>

        <div className="bg-[url('/image/card-bg.jpg')] h-full text-black bg-cover bg-center text-center p-2 absolute inset-0 w-full flex flex-col items-center justify-center bg-gray-800 font-bold rotate-y-180 backface-hidden">
          <h1 className="text-3xl mb-3">{name}</h1>
          <h2 className="text-xs mx-5">{description}</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
