"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/src/components/Footer";
export default function Trainers() {
  const coursearray = [
    {
      name: "The Three Musketeers",
      price: "$40.00",
      stars: "5",
      Person: "/one.png",
      icon: "/vector.png",
    },
    {
      name: "The Three Musketeers",
      price: "$40.00",
      stars: "5",
      Person: "/two.png",
      icon: "/vector.png",
    },
    {
      name: "The Three Musketeers",
      price: "$40.00",
      stars: "5",
      Person: "/three.png",
      icon: "/vector.png",
    },
    {
      name: "The Three Musketeers",
      price: "$40.00",
      stars: "5",
      Person: "/four.png",
      icon: "/vector.png",
    },
  ];
  return (
    <div>
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
            Nafas Trainers
            <br />
            For You{" "}
          </p>
        </div>
        <div className="bg-[url(/video.png)] w-full h-160 bg-cover mt-10.75"></div>
        <div>
          <div className="mt-14 pr-111.75 mb-27.75">
            <h1 className="text-[#0A033C] font-semibold text-[30px] mb-3.75">
              Course Details{" "}
            </h1>
            <p className="text-[16px] text-[#5D5A6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>

            <h1 className="text-[#0A033C] font-semibold text-[30px] mb-3.75 mt-6.25">
              Certification{" "}
            </h1>
            <p className="text-[16px] text-[#5D5A6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
            <h1 className="text-[#0A033C] font-semibold text-[30px] mb-3.75 mt-6.25">
              Who this course is for{" "}
            </h1>
            <p className="text-[16px] text-[#5D5A6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
            <h1 className="text-[#0A033C] font-semibold text-[30px] mb-3.75 mt-6.25">
              What you'll learn in this course:{" "}
            </h1>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <Image
                  src="/circle.png"
                  width={10}
                  height={10}
                  alt="bullet"
                  className="mt-1.5"
                />
                <span className="text-[16px] text-[#5D5A6F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/circle.png"
                  width={10}
                  height={10}
                  alt="bullet"
                  className="mt-1.5"
                />
                <span className="text-[16px] text-[#5D5A6F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/circle.png"
                  width={10}
                  height={10}
                  alt="bullet"
                  className="mt-1.5"
                />
                <span className="text-[16px] text-[#5D5A6F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/circle.png"
                  width={10}
                  height={10}
                  alt="bullet"
                  className="mt-1.5"
                />
                <span className="text-[16px] text-[#5D5A6F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/circle.png"
                  width={10}
                  height={10}
                  alt="bullet"
                  className="mt-1.5"
                />
                <span className="text-[16px] text-[#5D5A6F]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[#0A033C] font-semibold text-[45px] mb-10 mt-6.25">
            Similar Courses
          </h1>
          <div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-10 mb-20">
              {coursearray.map((course, index) => (
                <div key={index} className="flex flex-row gap-5 items-center">
                  <Image
                    src={course.Person}
                    height={100}
                    width={140}
                    alt={course.name}
                    className="rounded-[10px] object-cover"
                  />

                  <div className="flex flex-col flex-1">
                    <h3 className="text-[#0A033C] font-semibold text-[20px] mb-2">
                      {course.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(Number(course.stars))].map((_, i) => (
                        <span key={i} className="text-[#FFC107] text-[18px]">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-[#FF6652] font-semibold text-[20px]">
                      {course.price}
                    </p>
                  </div>

                  <button className=" p-3 rounded-[10px] cursor-pointer  ">
                    <Image
                      src={course.icon}
                      height={20}
                      width={20}
                      alt="cart"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
