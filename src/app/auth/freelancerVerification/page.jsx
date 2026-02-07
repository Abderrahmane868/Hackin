"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Verification() {
  return (
    <>
      <div className="min-h-screen bg-[#F7F5FA] flex flex-col">
        <div className="pt-8 px-8 md:px-16 lg:px-24 flex flex-row gap-x-2 items-center">
          <Image src="/icon.png" width={30} height={25} alt="Nafas Logo" />
          <h1 className="font-bold text-3xl text-[#0A033C]">NAFAS</h1>
        </div>

        <div className="flex-1 bg-[#F7F5FA] flex flex-col lg:flex-row items-center justify-between gap-12 px-8 md:px-16 lg:px-24 py-12">
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A033C] text-center lg:text-left leading-tight">
              Welcome to
              <br />
              Nafas Platform
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/OBJECTS.png"
                height={400}
                width={400}
                alt="Platform illustration"
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#0A033C]">
              Freelancers Verification
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="fullname"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Full name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Your full name"
                  className="border-2 border-gray-300 w-full h-14 rounded-xl px-4 text-gray-800 focus:border-[#9C4DF4] focus:outline-none focus:ring-2 focus:ring-[#9C4DF4]/20 transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="degree"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Main degree / Diploma
                </label>
                <input
                  id="degree"
                  type="text"
                  placeholder="Your main degree or diploma"
                  className="border-2 border-gray-300 w-full h-14 rounded-xl px-4 text-gray-800 focus:border-[#9C4DF4] focus:outline-none focus:ring-2 focus:ring-[#9C4DF4]/20 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="degree"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Subject / specialization
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject / specialization"
                  className="border-2 border-gray-300 w-full h-14 rounded-xl px-4 text-gray-800 focus:border-[#9C4DF4] focus:outline-none focus:ring-2 focus:ring-[#9C4DF4]/20 transition-all"
                />
              </div>
              <Link href="/Dashboards/freelancerProfile">
                <button
                  type="submit"
                  className="w-50 h-14 bg-[#9C4DF4] hover:bg-[#8a3de0] rounded-full text-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-8"
                >
                  Verify
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
