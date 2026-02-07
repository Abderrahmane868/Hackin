"use client";
import Image from "next/image";
import Link from "next/link";
import CharityNavBar from "../../components/charityNavBar";
import Footer from "../../components/Footer";
function Charity() {
  return (
    <div>
      <CharityNavBar /> 
      <div className="display h-screen w-full flex flex-row justify-center pt-0 mt-0 bg-[url('/charity.png')] bg-cover bg-center ">
     <div>
       <Link href="/Main"> 
            <Image
              src="/back.png"
              height={70}
              width={70}
              alt="back"
              className=" cursor-pointer mb-30"
            />
          </Link> 
        <div className="flex  items-center ml-6">
          
          <div className="font-bold text-xl w-1/2">
            <h2 className="h-00 text-4xl pb-5 text-red-600">Nafas</h2>
            <p className="pb-10 text-white"> 
              Gaza needs hope. Every day, families face challenges that no one
              should endure. Your donation provides food, shelter, medical care,
              and rebuilding support to those who need it most. Every
              contribution, big or small, brings relief, dignity, and a chance
              to rebuild lives. Stand with Gaza. Give hope. Make a difference.
            </p>
            <Link href="/payment">
              <button className="bg-linear-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0 pl-44.25">
          Giving Help To Those<br/> Who Need It 
        </h1>
        <div className="bg-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img1.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
Community spaces, schools, and local infrastructure              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img2.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
                 Food and basic necessities for families
              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img3.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
massive invasion of Palestine, war in the Gaza strip              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

           <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img4.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
Medical and emergency support              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>
             <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img5.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
Access to clean water and sanitation              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>
 <div className="bg-white rounded-xl shadow p-4 items-center  content-center justify-center flex flex-col">
             <Image src="/img6.png" height={232} width={312} alt="gaza"  />
              <h3 className="font-semibold text-gray-800 mb-3">
Rebuilding homes and temporary shelters              </h3>

              <div className="flex flex-row justify-between text-sm mb-2 w-full "> 
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center flex-row w-full ">
                                <Link href="/payment">

                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                </Link>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Charity;
