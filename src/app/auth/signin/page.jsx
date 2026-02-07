"use client";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
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
                src="/shit.png"
                height={400}
                width={400}
                alt="Platform illustration"
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#333333]">
              Sign in
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-2 border-gray-300 w-full h-14 rounded-xl px-4 text-gray-800 focus:border-[#9C4DF4] focus:outline-none focus:ring-2 focus:ring-[#9C4DF4]/20 transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-gray-600 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="border-2 border-gray-300 w-full h-14 rounded-xl px-4 text-gray-800 focus:border-[#9C4DF4] focus:outline-none focus:ring-2 focus:ring-[#9C4DF4]/20 transition-all"
                />
                <button
                  type="button"
                  className="text-sm cursor-pointer text-[#9C4DF4] hover:text-[#8a3de0] text-right mt-2 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full h-14 bg-[#EDCE73] hover:bg-[#d7bc6b] rounded-full text-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-8"
              >
                Sign in
              </button>

              <p className="text-center text-base text-gray-600 mt-6">
                Don't have an account?{" "}
                <Link href="/auth/signup">
<span className="text-[#9C4DF4] font-semibold hover:text-[#8a3de0] underline cursor-pointer transition-colors">
                  Sign up
                </span>
                </Link>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
