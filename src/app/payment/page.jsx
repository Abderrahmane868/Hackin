"use client"
import Link from "next/link";
import Image from "next/image"
import { useState } from "react"

export default function Payment(){
  const [checked1,setChecked1] = useState(false) ;  
  const click1 = () => {
    setChecked1(!checked1) 
  }
  const [checked2,setChecked2] = useState(false) ;  
  const click2 = () => {
    setChecked2(!checked2) 
  }
  const [checked3,setChecked3] = useState(false) ;  
  const click3 = () => {
    setChecked3(!checked3)  
  }
  return(
    <div >
      <div className="pl-110.5 pr-110.5 ">
        <div className="bg-[#FDF9F0] h-screen rounded-[40px] pt-12.5 pb-12.5 pl-6 pr-6">
        <p className="font-bold text-xl text-gray-900 mb-6">Contact details</p>
        <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-row gap-8.25">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-900 mb-1 block">First Name</label>
            <input type="text" className="w-full h-12 rounded border border-gray-300 bg-white px-3"></input>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-900 mb-1 block">Last Name</label>
            <input type="text" className="w-full h-12 rounded border border-gray-300 bg-white px-3"></input>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-900 mb-1 block">Email</label>
          <input type="text" className="w-full h-12 rounded border border-gray-300 bg-white px-3"></input>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900 mb-1 block">Phone Number</label>
          <input type="text" className="w-full h-12 rounded border border-gray-300 bg-white px-3"></input>
        </div>
</div>
<p className="font-bold text-xl text-gray-900 mb-6">Payment Methods</p>
<div className="flex items-center gap-3 mb-2">
<input readOnly type="radio" checked={checked1} onClick={() => click1()} className="h-5 w-5 accent-red-500  "></input> 
<div>
<p className="font-semibold text-gray-900">Credit/Debit Cards</p>
<p className="text-sm text-gray-600">Pay with your Credit / Debit Card</p>
</div>
<Image src="/pay.png" width={92} height={27} alt="pay" className="ml-auto" />
</div>
<div className="flex items-center gap-3 mb-2">
<input readOnly checked={checked2} onClick={() => click2()} type="radio" className=" accent-red-500 h-5 w-5"></input>  
<div>
<p className="font-semibold text-gray-900">Direct Bank Transfer</p>
<p className="text-sm text-gray-600">Make payment directly through bank account.</p>
</div>
</div>
<div className="flex items-center gap-3 mb-8">
<input readOnly checked={checked3} onClick={() => click3()} type="radio" className= " accent-red-500 h-5 w-5"></input> 
<div>
<p className="font-semibold text-gray-900">Other payment methods</p>
<p className="text-sm text-gray-600">Make payment through Gpay, Paypal, Paytm etc </p>
</div>
<Image src="/pay-2.png" width={119} height={27} alt="pay" className="ml-auto" />
</div>
<div className="flex flex-row justify-between gap-4">
  <Link href="/Main">
<button className="w-32 h-12 border-2 border-red-500 text-base font-medium text-red-500 rounded">Back</button>
</Link>
<button className="w-32 h-12 bg-red-500 text-base font-medium text-white rounded">Pay  $100</button>
</div>
</div>
    </div>
    </div>
  )
}