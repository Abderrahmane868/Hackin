"use client";
import Footer from "./Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function FreelanceCourses() {
  const [visible, setVisible] = useState("both");
  const both = () => {
    setVisible("both");
  };
  const classroom = () => {
    setVisible("classroom");
  };
  const online = () => {
    setVisible("online");
  };
  const coursesarray = [
    {
      image: "/1.png",
      name: "Web & Mobile Development",
      description:
        "HTML, CSS, JavaScript, React, Flutter, Node.js, API integration.",
      location: "online",
    },
    {
      image: "/2.png",
      name: "Graphic Design & Visual Identity",
      description:
        "Adobe Photoshop, Illustrator, UI design, branding, typography.",
      location: "online",
    },
    {
      image: "/3.png",
      name: "Architecture & Sustainable Reconstruction",
      description:
        "AutoCAD, SketchUp, 3D modeling, urban planning, structural engineering.",
      location: "classroom",
    },
    {
      image: "/4.png",
      name: "Translation & International Communication",
      description:
        "Arabic/English translation, subtitling, technical writing, proofreading.",
      location: "online",
    },
    {
      image: "/5.png",
      name: "Digital Marketing & Social Strategy",
      description:
        "SEO, social media management, content strategy, Google Ads, copywriting.",
      location: "online",
    },
    {
      image: "/6.png",
      name: "E-Learning & Online Tutoring",
      description:
        "Moodle design, digital pedagogy, educational content creation.",
      location: "online",
    },
    {
      image: "/7.png",
      name: "Digital Craft & Cultural Heritage",
      description:
        "Website development, database management, digital archiving.",
      location: "classroom",
    },
    {
      image: "/8.png",
      name: "Data Analysis & Project Management",
      description:
        "Advanced Excel, SQL, data visualization, Agile methodology.",
      location: "online",
    },
    {
      image: "/9.png",
      name: "Renewable Energy & Low-Tech Engineering",
      description:
        "Solar panel installation, electrical maintenance, water filtration, circuit design.",
      location: "classroom",
    },
  ];

  const trainersarray = [
    {
      name: "Ahmed Ben Ali",
      rating: 5,
      photo: "/trainer1.png",
      profession: "Physics",
    },
    {
      name: "James Nusaybah",
      rating: 5,
      photo: "/trainer2.png",
      profession: "Maths",
    },
    {
      name: "Mohamed Salah",
      rating: 5,
      photo: "/trainer3.png",
      profession: "Web dev",
    },
    {
      name: "Ali Tabti",
      rating: 5,
      photo: "/trainer4.png",
      profession: "CyberSecurity",
    },
    {
      name: "Mustapha Al Khalili",
      rating: 5,
      photo: "/trainer5.png",
      profession: "Electrical",
    },
    {
      name: "Ramez Djalal",
      rating: 5,
      photo: "/trainer6.png",
      profession: "Plumbing",
    },
    {
      name: "David Ramma",
      rating: 5,
      photo: "/trainer7.png",
      profession: "Mansory",
    },
    {
      name: "Khalid Khaldi",
      rating: 5,
      photo: "/trainer8.png",
      profession: "Carpentry",
    },
  ];
  return (
    <div className="pl-20 pr-20">
      <div className="pl-20 pr-20  bg-[url(/BG.png)]  bg-cover bg-no-repeat ">
        <div className="flex flex-row justify-between items-center h-20 ">
          <div className="flex flex-row">
            <Image src="/logo.png" height={20} width={40} alt="logo" />
            <p className="font-semibold text-[30px] text-[#0A033C]">Nafas</p>
          </div>
          <button className="cursor-pointer  h-8.5 w-45 bg-[#FF6652] text-white text-[16px] rounded-[10px] ">
            My account
          </button>
        </div>
        <div
          className="w-full h-px mb-10"
          style={{
            background:
              "linear-gradient(90deg, #EDCE73 0%, rgba(237, 206, 115, 0.5) 100%)",
          }}
        ></div>
        <div className="   justify-center items-center content-center h-67.5 w-full rounded-[20px] bg-[url(/Imge.png)] bg-cover bg-no-repeat">
          <Link href="/">
            <Image
              src="/back.png"
              height={70}
              width={70}
              alt="back"
              className="-mt-12 cursor-pointer"
            />
          </Link>

          <p className="text-[45px]  pl-39.75   font-semibold text-[#0A033C]">
            Skill Up for Gaza
            <br />
            For You{" "}
          </p>
        </div>

        <div className="mr-30 ml-30 mt-5 mb-10 flex flex-row justify-between text-[16px] text-[#0A033C]">
          <button
            onClick={() => both()}
            className={`cursor-pointer h-15 w-38 rounded-[20px]  ${visible === "both" ? "bg-[#EDCE73] shadow-[0px_15px_50px_0px_#FF665233] text-white" : ""}`}
          >
            All courses
          </button>
          <button
            onClick={() => classroom()}
            className={`cursor-pointer h-15 w-38 rounded-[20px]  ${visible === "classroom" ? "bg-[#EDCE73] shadow-[0px_15px_50px_0px_#FF665233] text-white" : ""}`}
          >
            Classroom courses
          </button>
          <button
            onClick={() => online()}
            className={`cursor-pointer h-15 w-38 rounded-[20px] ${visible === "online" ? "bg-[#EDCE73] shadow-[0px_15px_50px_0px_#FF665233] text-white" : ""}`}
          >
            Online courses
          </button>
          <button className="cursor-pointer h-15 w-38">More courses</button>
        </div>
        <h1 className="text-[30px] font-semibold text-[#0A033C]">Courses</h1>
        <div className="flex relative flex-row  flex-wrap  ">
          {coursesarray.map(
            (arr, index) =>
              (arr.location === visible || visible === "both") && (
                <div
                  key={index}
                  className={`hover:shadow-[0px_50px_80px_0px_rgba(0,0,0,0.05)]  w-72.5 h-82.25 pl-3.75 pr-3.75 rounded-[15px]   pt-7.5 pb-25  flex flex-col justify-center text-center content-center items-center mt-10
    `}
                >
                  <Image
                    src={arr.image}
                    height={50}
                    width={50}
                    alt={arr.name}
                    className="pb-5"
                  />
                  <p className="pb-3.75 text-[25px] text-[#0A033C]">
                    {arr.name}
                  </p>
                  <p className="text-[16px] text-[#5D5A6F]">
                    {arr.description}
                  </p>
                </div>
              ),
          )}
        </div>
        <h1 className="text-[30px] font-semibold text-[#0A033C] mt-10 mb-5">
          Trainers
        </h1>
        <div className="flex flex-row justify-between items-center mb-5">
          <input
            className="rounded-[10px] h-15 w-2/3 focus:outline-0 pl-4 border border-gray-300"
            placeholder="Search Trainer"
          ></input>
          <button className="bg-[#EDCE73] text-white items-center w-35.75 h-11.5 cursor-pointer rounded-[10px]">
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {trainersarray.map((trainer, index) => (
            <div
              key={index}
              className="flex flex-row items-center bg-white rounded-[15px] p-5 h-33.25  shadow-lg"
            >
              <Image
                src={trainer.photo}
                height={103}
                width={160}
                alt={trainer.name}
                className="rounded-[10px] mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-[20px] font-semibold text-[#0A033C]">
                  {trainer.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-[18px]">
                    {"★".repeat(trainer.rating)}
                  </span>
                </div>
                <p className="text-[16px] text-[#EDCE73]">
                  {trainer.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
