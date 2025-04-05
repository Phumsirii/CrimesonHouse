"use client";

import { useAppSelector } from "@/redux/store";

export default function OurStoryPage() {
  const language = useAppSelector((state) => state.languageSlice.language);

  return (
    <div className="min-h-screen bg-[url('/image/red_bg.jpg')] bg-cover text-[#E8D1A7] max-w-screen flex flex-col py-35 lg:px-40 md:px-32 sm:px-20 px-4 space-y-8 lg:space-y-12">
      <h1 className="font-bold text-2xl lg:text-3xl">Inclusivity</h1>
      <div>
        <p>
          {language === "TH"
            ? `หมายถึง การเปิดรับและให้พื้นที่กับทุกคนอย่างเท่าเทียม ไม่แบ่งแยก
          ไม่กีดกัน เพื่อให้ทุกเสียงและตัวตนมีคุณค่า`
            : `Inclusivity means welcoming and providing equal space for everyone without discrimination or exclusion, so that every voice and identity has value.`}
        </p>
        <p>
          {language === "TH"
            ? "โดยเราสนใจประเด็นเรื่อง"
            : "We are interested in the issue of"}
          <span className="italic">
            {language === "TH"
              ? "“การให้โอกาสที่สองกับกลุ่มอาชญากรที่ผ่านการรับโทษแล้ว”"
              : "'providing second chances to criminals who have already served their sentences.'"}
          </span>
        </p>

        <br />

        <h2 className="font-bold text-xl">
          {language === "TH" ? "อาชญากร (Criminal)" : "Criminal"}
        </h2>
        <p>
          {language === "TH"
            ? `FYI : ประเทศไทยมีอัตราการกระทำผิดซ้ำของอาชญากรภายใน 1 ปี
          หลังพ้นโทษแล้ว มากถึง 18.26% (ข้อมูลสถิติของปี 2567) จาก กรมราชทัณฑ์
          กระทรวงยุติธรรม`
            : `FYI: Thailand has a recidivism rate of 18.26% within 1 year after release 
            (statistics from 2024) according to the Department of Corrections, Ministry of Justice.`}
        </p>
        <p>
          {language === "TH"
            ? `สังคมไทยมักตีตราอาชญากรในทางลบ ทำให้ไม่มีพื้นที่ในสังคม
          และอาจกลับไปก่อความผิดซ้ำ`
            : `Thai society often stigmatizes criminals negatively, 
            leaving them without a place in society, which may lead them to reoffend.`}
        </p>

        <br />

        <h3 className="font-bold">
          {language === "TH"
            ? `เหตุผลหลัก ๆ ที่อาชญากรเลือกกระทำผิดซ้ำ`
            : `Main reasons criminals choose to reoffend:`}
        </h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            {language === "TH"
              ? `ขาดโอกาสในการทำงาน → ไม่มีทางเลือก → กลับไปสู่อาชญากรรม`
              : `Lack of employment opportunities → No alternatives → Return to crime`}
          </li>
          <li>
            {language === "TH"
              ? `ขาดการสนับสนุนจากครอบครัวและชุมชน → ไม่มีที่พึ่ง →
            หันกลับไปหาสังคมเดิม`
              : `Lack of support from family and community → No refuge → Return to previous social circles`}
          </li>
          <li>
            {language === "TH"
              ? `สังคมไม่เปิดโอกาสให้เริ่มต้นใหม่ → รู้สึกไร้ค่า →
            สูญเสียแรงจูงใจในการปรับตัว`
              : `Society doesn't provide opportunities for a fresh start → Feelings of worthlessness → Loss of motivation to adapt`}
          </li>
          <li>
            {language === "TH"
              ? `ความเครียดและปัญหาสุขภาพจิต → กระตุ้นให้ทำผิดอีกครั้ง`
              : `Stress and mental health issues → Triggers for reoffending`}
          </li>
        </ul>

        <br />

        <blockquote className="font-bold italic text-xl">
          &#34;Sometimes&#44; a second chance is all someone needs to change
          their whole story&#46;&#34;
        </blockquote>
        {language === "TH" ? (
          <p className="mt-2">
            บางครั้ง โอกาสที่สองคือสิ่งเดียวที่ใครบางคนต้องการ
            เพื่อเขียนเรื่องราวชีวิตใหม่
          </p>
        ) : null}
        {language === "EN" ? (
          <p className="mt-2">
            The stage play &#34;Crim&#40;e&#41;son House&#58; The Late
            Viscount&#34; aims to create understanding about giving
            opportunities to those who have committed crimes and served their
            sentences. Opening our hearts to provide these opportunities is not
            just about forgiveness, but about helping them find a way out of the
            cycle that led to their past mistakes by providing appropriate
            support for rehabilitation and improving quality of life, so they
            can return to having a valuable life and become good members of
            society
          </p>
        ) : null}
      </div>

      <h1 className="font-bold text-2xl lg:text-3xl">
        Interactive Immersive Theatre
      </h1>
      <div>
        <p>
          {language === "TH"
            ? `ละครเวทีที่ผู้ชมมีส่วนร่วมกับการแสดง
          โดยที่ผู้ชมสามารถเลือกเดินไปยังสถานที่หรือเส้นทางต่าง ๆ
          และยังสามารถพูดคุยกับนักแสดงได้ในบางช่วงของการแสดง
          ทำให้ทุกคนมีส่วนร่วมกับเรื่องราวของตัวละครอย่างใกล้ชิด`
            : `A theater performance where the audience 
            participates in the show. Audience members 
            can choose to walk to different locations or 
            paths and can interact with the actors during 
            certain parts of the performance, allowing 
            everyone to be closely involved with the 
            characters' stories.`}
        </p>
        <p className="mt-2">
          <span className="font-semibold italic">
            {language === "TH"
              ? `Crim(e)son House ไวเคานต์ผู้ล่วงลับ`
              : `Crim(e)son House: The Late Viscount `}
          </span>
          {language === "TH" ? `คือ ละครเวทีรูปแบบ` : `is an `}
          <span className="font-bold">Interactive Immersive Theatre</span>{" "}
          {language === "TH"
            ? `ที่จะพาผู้ชมร่วมสืบหาความจริงของคดีฆาตกรรมไปพร้อม ๆ
          กับตัวละครของเรื่อง`
            : `performance that will take the audience on a 
            journey to uncover the truth behind a murder case 
            alongside the story's characters.`}
        </p>
        <p className="mt-2">
          {language === "TH"
            ? `พวกเราจะพาคุณหลุดเข้ามายังคฤหาสน์ของตระกูล Crimson ในปี ค.ศ.1816`
            : `We will transport 
            you into the Crimson family mansion in the year 1816.`}
        </p>
      </div>
    </div>
  );
}
