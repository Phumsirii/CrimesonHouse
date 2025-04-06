import Image from "next/image";


const championSponsors = [
  "the manor studio.jpeg",
  "YUMYUM LOGO THAI HIRES-R.jpg",
  "MizuMi Logo-01.png",
];

const otherSponsors = [
  "Bakeitbabe.jpg",
  "MariageFreres-TheFrancais-Paris1854-40x40cm-1.png",
  "Lactasoy - Logo.jpg",
  "Lastest Logo.png",
  "baan film_logo(final)-02.png",
  "ก๋วยเตี๋ยวเรือนายเกรียง.jpg",
  "ไก่ทอดโทริมารุ.jpg",
  "เส้นและเส้น.PNG",
  "อิ่มจังอาหารตามสั่ง.jpg",
  "Dr.หมูย่างเมืองตรัง.jpg",
]

export default function SponsorshipPage() {
  return (         
    <div className="bg-[url('/image/BG-red-retouch.png')] bg-cover bg- text-[#E8D1A7] bg-scale-down min-h-screen min-w-screen gap-y-16 flex flex-col py-35 lg:px-40 md:px-32 sm:px-20 px-4 lg:space-y-10 ">
      <div className="sm:text-4xl text-3xl font-bold text-center">
      </div>
      <div className="flex flex-col items-center font-bold sm:text-4xl text-3xl text-center justify-center lg:gap-x-16 gap-y-8 relative -mt-20">
            Sponsored By

        <div className="flex gap-5 flex-wrap justify-center">
                {championSponsors.map(logo => <Image alt = "logo" key = {logo} height={200} width={200} src={`/image/Champion/${logo}`}/>)}
        </div>
        <div className="flex gap-3 flex-wrap justify-center w-full max-w-3xl">
                {otherSponsors.slice(0,5).map(logo => logo === 'Lactasoy - Logo.jpg' ?  <Image alt = "logo" key = {logo} width= {125} height={125} className="py-4" src={`/image/others/${logo}`} />
                                                                  :  <Image alt = "logo" key = {logo} width= {125} height={125} className="bg-white" src={`/image/Others/${logo}`}/>)}
        </div>
        <div className="flex gap-3 flex-wrap  justify-center items-center">
                {otherSponsors.slice(5).map(logo => <Image alt = "logo" key = {logo} width= {125} className="bg-white" height={125} src={`/image/Others/${logo}`}/>)}
        </div>
      </div>        
  
    </div>


  );
}
