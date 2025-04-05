export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[url('/image/red_bg.jpg')] bg-cover text-[#E8D1A7] max-w-screen flex flex-col py-35 lg:px-40 md:px-32 sm:px-20 px-4 space-y-8 lg:space-y-12">
      <h1 className="font-bold text-2xl lg:text-3xl">Inclusivity</h1>
      <div>
        <p>
          หมายถึง การเปิดรับและให้พื้นที่กับทุกคนอย่างเท่าเทียม ไม่แบ่งแยก
          ไม่กีดกัน เพื่อให้ทุกเสียงและตัวตนมีคุณค่า
        </p>
        <p>
          โดยเราสนใจประเด็นเรื่อง
          <span className="italic">
            “การให้โอกาสที่สองกับกลุ่มอาชญากรที่ผ่านการรับโทษแล้ว”
          </span>
        </p>

        <br />

        <h2 className="font-bold text-xl">อาชญากร (Criminal)</h2>
        <p>
          FYI : ประเทศไทยมีอัตราการกระทำผิดซ้ำของอาชญากรภายใน 1 ปี หลังพ้นโทษแล้ว
          มากถึง 18.26% (ข้อมูลสถิติของปี 2567) จาก กรมราชทัณฑ์ กระทรวงยุติธรรม
        </p>
        <p>
          สังคมไทยมักตีตราอาชญากรในทางลบ ทำให้ไม่มีพื้นที่ในสังคม
          และอาจกลับไปก่อความผิดซ้ำ
        </p>

        <br />

        <h3 className="font-bold">เหตุผลหลัก ๆ ที่อาชญากรเลือกกระทำผิดซ้ำ</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>ขาดโอกาสในการทำงาน → ไม่มีทางเลือก → กลับไปสู่อาชญากรรม</li>
          <li>
            ขาดการสนับสนุนจากครอบครัวและชุมชน → ไม่มีที่พึ่ง →
            หันกลับไปหาสังคมเดิม
          </li>
          <li>
            สังคมไม่เปิดโอกาสให้เริ่มต้นใหม่ → รู้สึกไร้ค่า →
            สูญเสียแรงจูงใจในการปรับตัว
          </li>
          <li>
            ความเครียดและปัญหาสุขภาพจิต → กระตุ้นให้ทำผิดอีกครั้ง
          </li>
          <li>ละครเวทีเรื่อง Crimeson House ไวเคานต์ผู้ล่วงลับ</li>
        </ul>

        <br />

        <blockquote className="font-bold italic text-xl">
          "Sometimes, a second chance is all someone needs to change their whole story."
        </blockquote>
        <p className="mt-2">
          บางครั้ง โอกาสที่สองคือสิ่งเดียวที่ใครบางคนต้องการ เพื่อเขียนเรื่องราวชีวิตใหม่
        </p>
      </div>

      <h1 className="font-bold text-2xl lg:text-3xl">Interactive Immersive Theatre</h1>
      <div>
        <p>
          ละครเวทีที่ผู้ชมมีส่วนร่วมกับการแสดง โดยที่ผู้ชมสามารถเลือกเดินไปยังสถานที่หรือเส้นทางต่าง ๆ
          และยังสามารถพูดคุยกับนักแสดงได้ในบางช่วงของการแสดง ทำให้ทุกคนมีส่วนร่วมกับเรื่องราวของตัวละครอย่างใกล้ชิด
        </p>
        <p className="mt-2">
          <span className="font-semibold italic">Crim(e)son House ไวเคานต์ผู้ล่วงลับ</span>{" "}
          คือ ละครเวทีรูปแบบ <span className="font-bold">Interactive Immersive Theatre</span>{" "}
          ที่จะพาผู้ชมร่วมสืบหาความจริงของคดีฆาตกรรมไปพร้อม ๆ กับตัวละครของเรื่อง
        </p>
        <p className="mt-2">
          พวกเราจะพาคุณหลุดเข้ามายังคฤหาสน์ของตระกูล Crimson ในปี ค.ศ.1816
        </p>
      </div>
    </div>
  );
}
