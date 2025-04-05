"use client";

import { useAppSelector } from "@/redux/store";
import Card from "../../components/Card";

export default function IntroductionPage() {
  const language = useAppSelector((state) => state.languageSlice.language);

  const characters = {
    Walter: {
      descriptionTH:
        "เจ้าหน้าที่สืบสวนอาชญากรรมหนุ่ม ผู้เฉียบแหลมและช่างสังเกต แม้จะไม่มีใครกล้าแตะต้องคดีของตระกูล Crimson แต่เขากลับเลือกที่จะเดินหน้าเปิดโปงความจริงอย่างไม่ลังเล ด้วยไหวพริบอันเหนือชั้นและทักษะการสืบสวนที่ไร้เทียมทาน เป้าหมายของเขาคือการเปิดโปงคนร้ายตัวจริง ไม่ว่าจะต้องเผชิญหน้ากับอันตรายเพียงใด!",
      descriptionEN:
        "A sharp-minded and keen-eyed young crime investigator, Walter refuses to back down—even when no one dares to touch the Crimson family case. Unfazed by the risks, he relentlessly pursues the truth with his unparalleled wit and exceptional investigative skills. His ultimate goal: to expose the real culprit, no matter the danger that stands in his way!",
      srcImage: "walter-p.png",
    },
    "Viscountess Scarlet Crimson": {
      descriptionTH:
        "ภรรยาของ Viscount Rufous ผู้เทิดทูนสามีและให้ความสำคัญกับศักดิ์ศรีของตระกูลเหนือสิ่งอื่นใด เธอคือหญิงผู้สง่างามและเปี่ยมอำนาจ พร้อมทำทุกวิถีทางเพื่อรักษาภาพลักษณ์อันสมบูรณ์แบบของตระกูล แม้ว่านั่นจะหมายถึงการก้าวข้ามเส้นแบ่งของความถูกต้องก็ตาม…",
      descriptionEN:
        "The wife of Viscount Rufous, she reveres her husband and values the family's honor above all else. A woman of elegance and undeniable power, she will stop at nothing to preserve the Crimson family's flawless image—even if it means crossing the line between right and wrong…",
      srcImage: "scarlet-p.png",
    },
    "Lord Phoenix Crimson": {
      descriptionTH: `บุตรชายคนโตของตระกูล  เติบโตในฝรั่งเศสตั้งแต่เด็ก ฉลาดหลักแหลม หลงใหลในพฤกษศาสตร์ มีทักษะการเจรจาชั้นยอด ด้วยเสน่ห์และบุคลิกที่โดดเด่น จึงเป็นที่จับตามองในทุกงานสังคม 
                        เขารักชีวิตอิสระยิ่งกว่าสิ่งใด แต่ในฐานะพี่ชายคนโต ความคาดหวังจากพ่อและตระกูลกลับเป็นสิ่งที่เขาไม่อาจหลีกหนีได้
                        `,
      descriptionEN: `The eldest son of the Crimson family, he was raised in France from a young age. Highly intelligent and deeply passionate about botany, he possesses exceptional negotiation skills. With his charm and striking presence, he effortlessly commands attention at every social gathering.  

Though he cherishes his freedom above all else, the weight of his father’s and family’s expectations is a burden he cannot escape as the firstborn heir, duty binds him tighter than he’d ever wish.
`,
      srcImage: "Pheonix-p.png",
    },
    "Lord Garnet Crimson": {
      descriptionTH: `ลูกชายคนกลางแห่งตระกูล ด้วยนิสัยที่เงียบขรึม เก็บตัวและรูปร่างที่ผอมบางไม่ตรงกับค่านิยมของสังคม จึงไม่ได้รับความสนใจหรือความคาดหวังจากใคร เขาจึงหันไปหลงใหลในงานศิลปะ ซึ่งกลายเป็นโลกส่วนตัวที่เขาสามารถแสดงออกถึงความคิดและจินตนาการได้อย่างเต็มที่`,
      descriptionEN: `The middle son of the Crimson family, he is quiet, reserved, and slender—an appearance that does not align with society’s ideals. As a result, he is neither expected nor particularly noticed by anyone.
Finding solace in art, he becomes deeply immersed in its world, where he can freely express his thoughts and imagination without restraint.`,
      srcImage: "garnet-p.png",
    },
    "Lady Ruby Crimson": {
      descriptionTH:
        "ลูกสาวคนเล็ก ผู้เป็นผู้เป็นดั่งแก้วตาดวงใจของทุกคนในบ้าน ภายนอกที่ดูน่ารัก สดใส แต่กลับแปรเปลี่ยนเป็นความน่ากลัวได้ในชั่วพริบตา อีกทั้งงานอดิเรกสุดแปลกของเธอที่ใครเห็นเป็นต้องขนลุกซู่…",
      descriptionEN: `The youngest daughter, cherished as the jewel of the family, is adored by everyone in the household. On the surface, she appears sweet and lively, but in the blink of an eye, her demeanor can turn unsettling.
And then there’s her peculiar hobby—one that never fails to send shivers down the spine of anyone who witnesses it…
`,
      srcImage: "ruby-p.png",
    },
    "Merlot Crimson": {
      descriptionTH:
        "พี่ชายของ Viscount Rufous ผู้เปี่ยมด้วยความสามารถและประสบการณ์ในชีวิต เขารักหลานยิ่งกว่าสิ่งใดและมักใช้เวลาสอนศิลปะให้เสมอ อันเป็นสิ่งที่เขารัก ทว่าเมื่อต้องใช้ชีวิตในห้องขัง จุดต่ำสุดของชีวิตก็มาถึง ทำให้เขาจมอยู่กับความผิดหวัง มองว่าตนเองล้มเหลวและไร้จุดหมาย แม้จะเป็นอิสระแล้วก็ตาม",
      descriptionEN: `The elder brother of Viscount Rufous, he is a man of great talent and life experience. He adores his nieces and nephews above all else, often spending time teaching them art, his greatest passion.
However, after enduring life behind bars—his lowest point—he is consumed by disappointment, seeing himself as a failure with no purpose. Even after gaining his freedom, the weight of his past still lingers.
`,
      srcImage: "Merlot-p.png",
    },
    "Richard Hargrave": {
      descriptionTH:
        "นักเขียนอุปถัมภ์แห่งตระกูล Crimson ผู้รับหน้าที่ถ่ายทอดเรื่องราวของตระกูลสู่สังคม ด้วยเสน่ห์วาทศิลป์อันเฉียบคม เขาเป็นชายผู้มั่นใจในตัวเองอย่างล้นเหลือ ทะเยอทะยานจนยากจะหยุดยั้ง แต่เบื้องหลังปลายปากกานั้น เขาคือผู้กุมความลับของตระกูล และพร้อมจะเปิดโปงทุกอย่างได้ทุกเมื่อ",
      descriptionEN: `The patroned writer of the Crimson family, he is entrusted with shaping and presenting their story to society. Armed with razor-sharp eloquence, he is a man brimming with confidence and an unstoppable ambition.
Yet behind the tip of his pen, he holds the family's deepest secrets—secrets he could expose at any moment.
`,
      srcImage: "Richard-p.png",
    },
    "Mary Collins": {
      descriptionTH:
        "สาวใช้ผู้รับใช้ตระกูลมานานจนรู้ทุกความลับ แต่สิ่งที่เธอทำได้ดีที่สุดคือ เปิดเผย มากกว่า ปกปิด ปากไว เม้าท์เก่ง อยากรู้อยากเห็นเป็นที่หนึ่ง ไม่มีวงสนทนาไหนขาดเธอได้ ซุ่มซ่ามจนใคร ๆ เอือม แต่ภายใต้ท่าทีโก๊ะ ๆ นั้น เธอกลับมีหัวใจที่เด็ดเดี่ยว มุ่งมั่นต่อสู้เพื่อสิทธิของชนชั้นล่างอย่างไม่ยอมแพ้",
      descriptionEN: `A longtime maid of the Crimson family, she knows every secret within the household—but keeping them has never been her strong suit. Loose-lipped, endlessly chatty, and insatiably curious, she is the life of every conversation. Her clumsiness often exasperates those around her, yet beneath her scatterbrained demeanor lies a steadfast heart.
Fiercely determined, she refuses to back down in her fight for the rights of the lower class.
`,
      srcImage: "mary-p.png",
    },
  };
  return (
    <div className="min-h-screen bg-[url('/image/red_bg.jpg')] bg-cover text-[#E8D1A7] max-w-screen flex flex-col py-24 lg:px-40 md:px-32 sm:px-20 px-4 space-y-8 lg:space-y-12">
      <h1 className="text-2xl lg:text-3xl font-bold tracking-wide">
        The Project
      </h1>
      <div className="text-base lg:text-lg leading-relaxed">
        {language === "TH"
          ? `Crim(e)son House ไวเคานต์ผู้ล่วงลับ เป็นโปรเจกต์ละครเวทีปริญญานิพนธ์
        ที่สร้างสรรค์ขึ้นโดยกลุ่มนิสิตภาควิชาวาทวิทยาและสื่อสารการแสดง
        สาขาสื่อสารการแสดง คณะนิเทศศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
        พวกเราต้องการให้ละครเวทีเรื่องนี้เป็นกระจกสะท้อนสังคม
        เปิดมุมมองเรื่องการให้โอกาสที่สองแก่กลุ่มผู้ที่เคยกระทำผิดและได้ชดใช้ความผิดแล้ว
        เพื่อให้พวกเขาได้กลับมาใช้ชีวิตอย่างมีคุณค่า โดยไม่ถูกตีตราหรือแบ่งแยก
        เพราะเราเชื่อว่าทุกชีวิตสามารถเริ่มต้นใหม่และเป็นส่วนหนึ่งที่ดีของสังคมได้`
          : `This is a theatrical thesis project created by students from 
          the Department of Speech Communication and Performing Arts, 
          Performing Arts Communication Program, Faculty of 
          Communication Arts, Chulalongkorn University.
          We aim for this theatrical performance to serve as a mirror 
          reflecting society, opening perspectives on providing second 
          chances to those who have committed offenses and already paid 
          for their mistakes. We want to enable them to return to living 
          valuable lives without stigma or discrimination, because we 
          believe that every life can start anew and become a positive 
          part of society.
        `}
      </div>

      <h1 className="text-2xl lg:text-3xl font-bold tracking-wide">Synopsis</h1>
      <div className="text-base lg:text-lg leading-relaxed">
        {language === "TH"
          ? `ในช่วงยุค Regency ปี 1816 ณ คฤหาสน์ ‘ตระกูล Crimson’ 
          ตระกูลผู้ดีเก่าแก่ที่ทรงอิธิพลเป็นอันดับต้น ๆ ของกรุงลอนดอน  ได้เกิดเหตุอันน่าเศร้าสลด 
          เมื่อ ไวเคานต์ ‘Rufous Crimson’ ผู้นำของตระกูลถูกพบเป็นศพอยู่ภายในห้องพักส่วนตัว 
          เจ้าหน้าที่ได้ลงความเห็นว่าเป็นการเสียชีวิตโดยธรรมชาติ 
          แต่ทว่า หลังจากเกิดเหตุได้อาทิตย์กว่า ๆ ลูกชายคนกลางของตระกูล 
          อย่าง 'Lord Garnet Crimson' กลับเข้ารับสารภาพว่าตนเองคือฆาตกร และไม่ยอมปริปากอันใดอีกเลย 
          คดีนี้ดันไปสะดุดตา ‘Walter’  เจ้าหน้าที่สืบสวนอาชญากรรมที่มองว่าคดีนี้มีเหตุไม่ชอบมาพากล 
          อีกทั้งครอบครัวที่ดูไม่สนใจใยดี แถมยังถีบส่ง Garnet เข้าคุก เขาจึงเริ่มดำเนินแผนการสืบ 
          ด้วยการใช้งานประมูลของตระกูลที่ถูกจัดขึ้นทุกปี เพื่อให้เหล่าผู้ต้องสงสัยได้มารวมตัวกันโดยไม่อาจหลีกเลี่ยง 
          และนี่คือโอกาสของ Walter ที่จะได้เริ่มเปิดโปงความลับของตระกูล Crimson
`
          : `In the year 1816, during the Regency era, tragedy struck the Crimson family, one of the most influential aristocratic houses in London. Viscount Rufous Crimson, the head of the family, was found dead in his private chambers. The authorities ruled his death as natural.
However, just over a week after the incident, the family’s middle son, Lord Garnet Crimson, suddenly confessed to the murder. He refused to say another word, offering no explanation for his actions.
This case soon caught the attention of Walter, a crime investigator who found the circumstances highly suspicious. The family’s apparent indifference—along with their swift decision to send Garnet to prison—only deepened his doubts.
Determined to uncover the truth, Walter devised a plan. Using the Crimson family’s annual estate auction—an event that gathered all key suspects in one place—he set the stage for his investigation. This was his chance to expose the dark secrets buried within Crimson Manor.
`}
      </div>

      <h1 className="text-2xl lg:text-3xl font-bold tracking-wide">
        Characters
      </h1>
      <div className="flex flex-wrap gap-10 gap-y-10 justify-center">
        {Object.entries(characters).map(([name, decsriptions]) => (
          <Card
            name={name}
            key={name}
            imageSrc={`/image/${decsriptions.srcImage}`}
            description={
              language === "TH"
                ? decsriptions.descriptionTH
                : decsriptions.descriptionEN
            }
          />
        ))}
      </div>
    </div>
  );
}
