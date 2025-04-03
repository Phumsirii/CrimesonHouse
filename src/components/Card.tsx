"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface CardProps {
    description: String
    name: String
    imageSrc: string
}
const Card:React.FC<CardProps> = ({description, name, imageSrc}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-100 w-80 "
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
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Image
            src={imageSrc}
            alt="Card image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-center p-2 absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white font-bold rotate-y-180 backface-hidden">
          <h1 className="mb-10">{name}</h1>
          {description}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
