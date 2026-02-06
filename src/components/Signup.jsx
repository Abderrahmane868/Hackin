"use client"
import { useState } from "react"
import Image from "next/image" 

export default function Signup(){
  const [showPassword, setShowPassword] = useState(false) 
  
  const toggle = () => {
    setShowPassword(!showPassword)
  }
  
  return (
    <>
    <div className=" flex flex-col bg-[#F7F5FA]">
      <div className="pt-10.75 flex flex-row gap-x-1.5 ml-18">  
        <Image alt="book" src="/icon.png"  width={30} height={25}  />
        <h1 className="font-semibold text-3xl text-[#0A033C]">
          NAFAS
        </h1>
      </div> 
      <div className=" flex flex-row justify-between pt-16 pb-16 pr-10.5 pl-17" > 
        <div>
          <h1 className="text-[56px] font-bold text-[#0A033C]"> <span>Welcome to</span><br></br>
            Nafas Platform</h1>
          <Image alt="image" src="/OBJECTS.png" height={452} width={456} />
        </div>
        <div className="bg-white border rounded-3xl h-218 border-[#666666] pt-12 pb-35.5 pl-22 pr-37.5 ">  
          <h1 className="text-4xl text-[#333333] font-semibold mb-8"> 
            Sign up now
          </h1> 
          <div className="mb-11.75 flex flex-row gap-x-4"> 
            <div className="flex flex-col">
              <label className="text-[#666666] text-sm mb-2">First name</label>
              <input id="first"  type="text" className="h-14 border rounded-xl border-[#666666] px-4 focus:outline-0"></input>
            </div>
            <div className="flex flex-col">
              <label className="text-[#666666] text-sm mb-2">Last name</label>
              <input id="last"  type="text" className="border-[#666666] border h-14 rounded-xl px-4 focus:outline-0"></input>
            </div>
          </div>
          
          <div className="mb-11.75 flex flex-col">
            <label className="text-[#666666] text-sm mb-2">Email address</label>
            <input id="email"  type="email" className="border-[#666666] border w-full h-14 rounded-xl px-4 focus:outline-0"></input>
          </div>
          
          <div className="mb-11.75 flex flex-col">
            <label className="text-[#666666] text-sm mb-2">ID number</label>
            <input id="id"  type="text" className="border-[#666666] border w-full h-14 rounded-xl px-4 focus:outline-0"></input>
          </div>
          
          <div className="mb-11.75 flex flex-col">
            <label className="text-[#666666] text-sm mb-2">Phone number</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-x-2">
                <span className="text-xl"><Image src="/PS.png" width={36} height={26} alt="palestine"  /></span>
                <span className="text-[#333333]">+970</span>
              </div>
              <input id="number" type="text" className="border-[#666666] border w-full h-14 rounded-xl pl-24 pr-4 focus:outline-0"></input>
            </div>
          </div>
          
          <div className="mb-6 flex flex-col">
            <label className="text-[#666666] text-sm mb-2">Password</label>
            <div className="relative">
              <input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                className="border-[#666666] border w-full h-14 rounded-xl px-4 pr-12 focus:outline-0"
              />
              <button
                type="button"
                onClick={toggle}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#333333] transition-colors cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  {!showPassword && (
                    <line x1="3" y1="3" x2="21" y2="21"></line>
                  )}
                </svg>
              </button>
            </div>
            <p className="text-xs text-[#666666] mt-2">Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </div>
          
          <div className="flex flex-row justify-between items-center mt-8">
            <button className="w-41 h-16 cursor-pointer bg-[#9C4DF4] hover:bg-[#8a3de0] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 rounded-[40px] text-[22px] font-medium text-white">Sign up</button>
            <p className="text-[16px] text-[#666666]">Already have an account? <span className="text-[#9C4DF4] underline cursor-pointer">Log in</span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}