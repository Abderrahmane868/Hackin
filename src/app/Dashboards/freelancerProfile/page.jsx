import Image from "next/image";

export default function Freelancerprofile() {
  const students = [
    {
      photo: "/profilephoto.png",
      name: "Prashant Kumar Singh",
      date: "25/2/2023",
      country: "India",
      title: "Understanding concept of react",
      chat: "chat",
    },
    {
      photo: "/profilephoto.png",
      name: "Prashant Kumar",
      date: "25/2/2023",
      country: "Russia",
      title: "Understanding concept of react",
      chat: "chat",
    },
  ];

  return (
    <div className="  flex flex-row gap-x-8 bg-[#f9f9fa]">
      <div className="pt-8 pl-11.75 pr-11.75 bg-white">
        <div className="flex flex-row items-center mb-12">
          <Image src="/logo.png" height={20} width={30} alt="logo" />
          <p className="font-bold ml-2.25 text-[16px] text-[#0A033C]">Nafas</p>
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <p className="font-semibold text-[16px] text-[#3F3F3F]">Overview</p>
          <button className=" cursor-pointer flex items-center gap-2 text-[#0A033C] text-[16px] hover:text-[#FF6652] pt-2 pb-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </button>
          <button className="cursor-pointer flex items-center gap-2 text-[#0A033C] text-[16px] hover:text-[#FF6652] pt-2 pb-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Inbox
          </button>
          <button className="cursor-pointer flex items-center gap-2 text-[#0A033C] text-[16px] hover:text-[#FF6652] pt-2 pb-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Courses
          </button>
          <button className="cursor-pointer flex items-center gap-2 text-[#0A033C] text-[16px] hover:text-[#FF6652] pt-2 pb-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            Tasks
          </button>
          <button className="cursor-pointer flex items-center gap-2 text-[#0A033C] text-[16px] hover:text-[#FF6652] pt-2 pb-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Group
          </button>
        </div>
      </div>

      <div className="pt-8 w-full bg-white">
        <input
          className="w-full h-14 border border-gray-500 rounded-2xl focus:outline-0 pl-3"
          placeholder="Search your course here ..."
        ></input>
        <div className="bg-[url(/container.png)] w-full h-45.25 bg-contain pt-5 pl-6 bg-no-repeat ">
          <p className="text-white text-[12px]">ONLINE COURSE</p>
          <p className="pt-5 font-semibold text-white text-[24px]">
            Apply your skills into <br />
            concrete projects
          </p>
        </div>
        <p className="text-[16px] font-medium pt-6 pb-5 text-[#0A033C]">
          Your Projects
        </p>
        <div className="bg-[url(/group.png)] bg-cover bg-center bg-no-repeat h-100 w-full "></div>
        <p className="text-[16px] font-medium  pb-5 text-[#0A033C]">
          Your Clients
        </p>

        <div className="bg-white">
          {students.map((student, index) => (
            <div key={index} className="flex items-center p-4 border-b">
              <Image
                src={student.photo}
                height={40}
                width={40}
                alt={student.name}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-medium text-[14px]">{student.name}</p>
                <p className="text-[12px] text-gray-500">{student.date}</p>
              </div>
              <p className="ml-auto text-[14px]">{student.country}</p>
              <p className="ml-8 text-[14px]">{student.title}</p>
              <button className="ml-8 bg-[#FFE8E8] text-[#FF6652] px-4 py-1 rounded-full cursor-pointer text-[12px] font-medium">
                {student.chat}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 bg-white pl-20.25 pr-20.25 text-center flex items-center flex-col">
        <pre className="text-[#0A033C] font-medium text-[16px] font-serif">
          Your profile
        </pre>
        <Image
          src="/profilephoto.png"
          height={72}
          width={72}
          alt="profile photo"
          className="pt-9 pb-4"
        />
        <p className="text-[16px] text-[#0A033C]">Good morning Prashat</p>
        <p className="text-[12px] pb-16 text-[#3F3F3F]">
          Continue your journey and achieve your target
        </p>
        <div className="flex flex-row justify-between  w-full pb-9">
          <Image
            src="/btn.png"
            height={40}
            width={40}
            alt="btn"
            className="cursor-pointer"
          />
          <Image
            src="/btn1.png"
            height={40}
            width={40}
            alt="btn"
            className="cursor-pointer"
          />
          <Image
            src="/btn1.png"
            height={40}
            width={40}
            alt="btn"
            className="cursor-pointer"
          />
        </div>
        <p className="font-semibold text-[16px] text-[#3F3F3F] pb-2.5">
          SETTINGS
        </p>
        <button className="flex items-center gap-2 text-[#3F3F3F] font-medium text-[16px] pb-2.5">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </button>
        <button className="flex items-center gap-2 text-[#F13E3E] font-medium text-[16px]">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
