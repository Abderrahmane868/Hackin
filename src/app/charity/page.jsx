"use client";
import Image from "next/image";
import Link from "next/link";
import CharityNavBar from "../../components/charityNavBar";
import Footer from "@/src/components/Footer";
function Charity() {
  return (
    <div>
      <CharityNavBar />
      <div className="display h-screen w-full flex flex-row justify-center pt-0 mt-0 bg-[url('/charity.png')] bg-cover bg-center ">
        <div className="flex  items-center ml-6">
          <div className="font-bold text-xl w-1/2">
            <h2 className="h-00 text-4xl pb-5 text-red-600">Nafas</h2>
            <p className="pb-10">
              Gaza needs hope. Every day, families face challenges that no one
              should endure. Your donation provides food, shelter, medical care,
              and rebuilding support to those who need it most. Every
              contribution, big or small, brings relief, dignity, and a chance
              to rebuild lives. Stand with Gaza. Give hope. Make a difference.
            </p>
            <Link href="/auth/signup">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
          Giving help to those who need it
        </h1>
        <div className="bg-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?1"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Community Spaces, Schools, And Local Infrastructure
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$256,200</span>
                <span className="text-gray-400">$500,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?2"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Food And Basic Necessities For Families
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$50,124</span>
                <span className="text-gray-400">$100,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?3"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Emergency Relief And Community Support
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$28,200</span>
                <span className="text-gray-400">$64,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?4"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Medical And Emergency Support
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$50,200</span>
                <span className="text-gray-400">$100,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?5"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Access To Clean Water And Sanitation
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$1,124</span>
                <span className="text-gray-400">$10,400</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/3"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
                <a className="text-red-400 text-sm">See detail</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <img
                src="https://picsum.photos/400/250?6"
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-800 mb-3">
                Rebuilding Homes And Temporary Shelters
              </h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">$530,200</span>
                <span className="text-gray-400">$1,000,000</span>
              </div>

              <div className="w-full bg-gray-200 h-1.5 rounded mb-4">
                <div className="bg-red-400 h-1.5 rounded w-1/2"></div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm">
                  Donate now
                </button>
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
