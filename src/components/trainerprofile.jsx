import Image from "next/image";


export default function Trainerprofile(){
  return(
    <div>
      <div>
          <div className="flex flex-row items-center">
                <Image src="/logo.png" height={20} width={30} alt="logo" />
                <p className="font-bold ml-2.25 text-[16px] text-[#0A033C]">Nafas</p> 
              </div>
              <div>
                <p className="font-semibold text-[16px] text-[#3F3F3F]">Overview</p>
              </div>
      </div>
    </div>
  )
}