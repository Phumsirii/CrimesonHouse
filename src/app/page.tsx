import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      {/* Grid container */}
      <div className="grid grid-cols-9 h-12 m-10">
        <div className="col-span-5 flex justify-start p-2">HOME</div>
        <div className="flex justify-start p-2">TICKET</div>
        <div className="flex justify-start p-2">INFO</div>
        <div className="flex justify-start p-2">CONTACT</div>
        <div className="flex justify-start p-2">MEDIA</div>
      </div>
    </div>
  );
}
