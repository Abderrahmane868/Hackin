import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-5">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-end justify-center pt-10 sm:pt-16 md:pt-20 pb-10 px-4 sm:px-8 md:px-20 lg:px-96 min-h-[200px] sm:h-105 bg-center rounded-[20px] bg-[url(/Subscribe.png)] bg-cover bg-no-repeat bg-amber-300">
          <input
            className="border-2 border-black h-15 w-full rounded-t-[10px] sm:rounded-tl-[10px] sm:rounded-bl-[10px] sm:rounded-tr-0 bg-white/20 sm:border-r-0 focus:outline-0 placeholder-white pl-5"
            placeholder="Enter your email"
          ></input>
          <button className="border-2 border-black h-15 w-full sm:w-auto rounded-b-[10px] sm:rounded-br-[10px] sm:rounded-tr-[10px] sm:rounded-bl-0 bg-[#9C4DF4] sm:border-l-0 px-6 sm:pr-8 sm:pl-13.5 text-center cursor-pointer text-white text-[16px]">
            Donate
          </button>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row pt-10.75 justify-between gap-8 sm:gap-4 mt-5 pb-20 bg-[#FF665280] text-white">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-1.5">
            <Image alt="book" src="/icon.png" width={30} height={25} />
            <h1 className="font-semibold text-3xl text-[#0A033C]">NAFAS</h1>
          </div>
          <div className="flex flex-row gap-x-2 mt-6.25">
            <a>
              <Image
                src="/facebook.png"
                width={22}
                height={22}
                alt="Facebook"
              />
            </a>
            <a>
              <Image
                src="/instagram.png"
                width={22}
                height={22}
                alt="Instagram"
              />
            </a>
            <a>
              <Image
                src="/linkedin.png"
                width={22}
                height={22}
                alt="LinkedIn"
              />
            </a>
            <a>
              <Image src="/twitter.png" width={22} height={22} alt="Twitter" />
            </a>
          </div>
          <div className="mt-10">
            <p className="text-[16px] text-[#5D5A6F]">©2026 Nafas.com</p>
          </div>
          <div className="mt-3.75">
            <p className="text-[16px] text-[#5D5A6F]">
              Nafas is a registered <br />
              trademark of Nafas.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px] text-[#0A033C] font-semibold">Courses</p>
          <p className="text-[16px]">Classroom courses</p>
          <p className="text-[16px]">Virtual classroom courses</p>
          <p className="text-[16px]">Trainers</p>
          <p className="text-[16px]">Video Courses</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px] text-[#0A033C] font-semibold">Services</p>
          <p className="text-[16px]">Graphic Design</p>
          <p className="text-[16px]">Web Dev</p>
          <p className="text-[16px]">Mansory</p>
          <p className="text-[16px]">Plumbing</p>
          <p className="text-[16px]">Carpentry</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px] text-[#0A033C] font-semibold">About us</p>
          <p className="text-[16px]">Contact</p>
          <p className="text-[16px]">Donators</p>
          <p className="text-[16px]">Terms</p>
          <p className="text-[16px]">Privacy</p>
          <p className="text-[16px]">Help</p>
        </div>
      </div>
    </div>
  );
}
