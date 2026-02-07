import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" mt-5">
      <div className="pl-20 pr-20 bg-[url(/footer.png)] bg-no-repeat bg-cover ">
        <div className=" flex flex-row pt-70 pl-96 pr-96.75 justify-center  h-105 bg-center rounded-[20px]  bg-[url(/Subscribe-3.png)] bg-cover  bg-no-repeat ">
          <input
            className="border-2 border-black h-15 w-full rounded-bl-[10px] rounded-tl-[10px]  bg-white/20 border-r-0 focus:outline-0 placeholder-white pl-5"
            placeholder="Enter your email"
          ></input>
          <Link href="/charity" >  
          <button className="border-2 border-black  h-15 rounded-br-[10px] rounded-tr-[10px] bg-[#9C4DF4] border-l-0 pr-8  pl-13.5 text-center cursor-pointer text-white text-[16px]">
            Donate
          </button>
          </Link>
        </div>
      </div>
      <div className="pl-10 pr-10 flex flex-row pt-10.75 justify-between  pb-20 bg-[#0A033C] text-white">
        <div className="flex flex-col ">
          <div className=" flex flex-row gap-x-1.5 ">
            <Image alt="book" src="/icon.png" width={30} height={25} />
            <h1 className="font-semibold text-3xl ">NAFAS</h1>
          </div>
          <div className="flex flex-row gap-x-2 mt-6.25 items-center">
            <a>
              <Image
                src="/facebook-1.png"
                width={22}
                height={22}
                alt="Facebook"
                className="cursor-pointer"
              />{" "}
            </a>
            <a>
              <Image
                src="/instagram-1.png"
                width={22}
                height={22}
                alt="Instagram"
                                className="cursor-pointer"

              />{" "}
            </a>

            <a>
              <Image
                src="/linkedin-1.png"
                width={22}
                height={22}
                alt="LinkedIn"
                                className="cursor-pointer"

              />{" "}
            </a>
            <a>
              <Image
                src="/twitter-1.png"
                width={22}
                height={22}
                alt="Twitter"
                                className="cursor-pointer"

              />{" "}
            </a>
          </div>
          <div className="mt-10">
            <p className="text-[16px] ">©2026 Nafas.com</p>
          </div>
          <div className="mt-3.75">
            <p className="text-[16px] ">
              Nafas is a registered <br />
              trademark of Nafas.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px]  font-semibold">Courses</p>
          <p className="text-[16px] ">Classroom courses</p>
          <p className="text-[16px] ">Virtual classroom courses</p>
          <p className="text-[16px] ">Trainers</p>
          <p className="text-[16px] ">Video Courses</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px]  font-semibold">Services</p>
          <p className="text-[16px] ">Graphic Design</p>
          <p className="text-[16px] ">Web Dev</p>
          <p className="text-[16px] ">Mansory</p>
          <p className="text-[16px] ">Plumbing</p>
          <p className="text-[16px] ">Carpentry</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-[22px]  font-semibold">About us</p>
          <p className="text-[16px] ">Contact</p>
          <p className="text-[16px] ">Donators</p>
          <p className="text-[16px] ">Terms</p>
          <p className="text-[16px] ">Privacy</p>
          <p className="text-[16px] ">Help</p>
        </div>
      </div>
    </div>
  );
}
