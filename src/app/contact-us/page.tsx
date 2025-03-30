import { Icon } from "@iconify/react";

export default function ContactUsPage() {
  return (
    <div className="max-h-screen max-w-screen flex flex-col lg:px-40 md:px-32 sm:px-20 px-4 space-y-10 lg:space-y-20">
      <div className="flex justify-center p-2 sm:text-7xl text-5xl font-bold lg:mt-10">
        CONTACT US
      </div>
      <div className="flex flex-row text-xl lg:text-2xl">
        <div className="flex flex-col space-y-10 lg:space-y-16">
          <div className="flex flex-row space-x-2 lg:space-x-8 items-center ">
            <Icon icon="mdi:instagram" className="w-12 lg:w-20 h-full" />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">Instagram</div>
              <div>&#64;crimesonhouse</div>
            </div>
          </div>

          <div className="flex flex-row space-x-2 lg:space-x-8 items-center ">
            <Icon icon="fa:phone-square" className="w-12 lg:w-20 h-full" />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">Phone</div>
              <div>xxx-xxx-xxxx</div>
            </div>
          </div>

          <div className="flex flex-row space-x-2 lg:space-x-8 items-center ">
            <Icon
              icon="material-symbols:mail-outline-rounded"
              className="w-12 lg:w-20 h-full"
            />
            <div className="flex flex-col">
              <div className="text-4xl lg:text-5xl">Email</div>
              <div>abcdefg&#64;gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
