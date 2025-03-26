import Image from "next/image";

export interface MediaCardProps {
  imageUrl: string;
  description: string;
}

export default function MediaCard({ media }: { media: MediaCardProps }) {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-10">
      <Image
        src={media.imageUrl}
        alt="Image"
        className="rounded-lg object-cover"
        width={400}
        height={800}
      />
      <div className="text-xl lg:text-2xl">{media.description}</div>
    </div>
  );
}
