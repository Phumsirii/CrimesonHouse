// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="max-h-screen max-w-screen">
      {/* Grid container */}
      <div className="grid grid-cols-9 h-12 border-b m-10 text-m">
        <div className="col-span-5 flex justify-start p-2 text-2xl text-bold">
          HOME
        </div>
        <div className="flex justify-start p-2">TICKET</div>
        <div className="flex justify-start p-2">INFO</div>
        <div className="flex justify-start p-2">CONTACT</div>
        <div className="flex justify-start p-2">MEDIA</div>
      </div>
      <div className="flex flex-col py-40 h-full justify-start text-7xl text-center items-center">
        <h1 className="font-zahrah-thai">CRIM(E)SON</h1>
        <h1 className="font-sans-serif">HOUSE</h1>
      </div>
    </div>
  );
}
