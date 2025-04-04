import Image from "next/image";
const bronzeSponsors = [
  "baan film_logo(final)-02.png",
  "Dr.หมูย่างเมืองตรัง.jpg",
  "Lastest Logo.png",
  "ก๋วยเตี๋ยวเรือนายเกรียง.jpg",
  "ไก่ทอดโทริมารุ.jpg",
  "เส้นและเส้น.PNG",
  "อิ่มจังอาหารตามสั่ง.jpg"
];

const championSponsors = [
  "MizuMi Logo-01.png",
  "the manor studio.jpeg",
  "YUMYUM LOGO THAI HIRES-R.jpg"
];

const otherSponsors = [
  "Bakeitbabe.jpg",
  "Lactasoy - Logo.jpg",
  "MariageFreres-TheFrancais-Paris1854-40x40cm-1.png",
  "baan film_logo(final)-02.png",
  "Dr.หมูย่างเมืองตรัง.jpg",
  "Lastest Logo.png",
  "ก๋วยเตี๋ยวเรือนายเกรียง.jpg",
  "ไก่ทอดโทริมารุ.jpg",
  "เส้นและเส้น.PNG",
  "อิ่มจังอาหารตามสั่ง.jpg"
]

const platinumSponsors = [
  "Bakeitbabe.jpg"
];

const silverSponsors = [
  "Lactasoy - Logo.jpg",
  "MariageFreres-TheFrancais-Paris1854-40x40cm-1.png"
];


export default function SponsorshipPage() {
  return (         
    <div className="bg-[url('/image/BG-red-retouch.png')] bg-cover bg- text-[#E8D1A7] bg-scale-down min-h-screen min-w-screen gap-y-16 flex flex-col py-30 lg:px-40 md:px-32 sm:px-20 px-4 lg:space-y-10 ">
      <div className="sm:text-4xl text-3xl font-bold text-center">
        Sponsored By
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-x-16 gap-y-8 relative -mt-20">
        <div className="flex gap-5">
              {/* <SponsorBox w = {200} h = {200} title = "Champion Tier" logos = {championSponsors} dir = "Champion"/>
              <SponsorBox w = {100} h = {100} title = "Platinum Tier" logos = {platinumSponsors} dir = "Platinum"/>
              <SponsorBox w = {75} h = {75} title = "Silver Tier" logos = {silverSponsors} dir="Silver"/>
              <SponsorBox w = {50} h = {50} title = "Bronze Tier" logos = {bronzeSponsors} dir="Bronze"/> */}
                {championSponsors.map(logo => <Image alt = "logo" key = {logo} width= {200} height={200} src={`/image/Champion/${logo}`}/>)}
        </div>
        <div className="flex gap-3 flex-wrap">
                {otherSponsors.slice(0,5).map(logo => <Image alt = "logo" key = {logo} width= {100} height={100} className="bg-white" src={`/image/others/${logo}`}/>)}
        </div>
        <div className="flex gap-3 flex-wrap">
                {otherSponsors.slice(5).map(logo => <Image alt = "logo" key = {logo} width= {100} className="bg-white" height={100} src={`/image/others/${logo}`}/>)}
        </div>
      </div>
      <div className="fixed bottom-20 left-20 p-2 bg-opacity-50 text-white">
      <p>สนใจสนับสนุนโครงการ สามารถติดต่อได้ที่<br />
          Instagram: @crimesonhouse <br />
          Email: whoisthemurderproject@gmail.com<br />
          Tel: 062-042-7236 (เบส ฝ่ายจัดหาทุน)<br />
        </p>
      </div>
        
        
    </div>


  );
}
