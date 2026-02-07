"use client";
import NavBar from "../../components/navBar";
import "./page.css";
import {
  HeroSection,
  GazaSection,
  AboutUsSection,
  LearnerSection,
  Trainer,
  Freelancer,
  Charity,
} from "./MainSections";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Main() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
  }, []);

  return (
    <>
      <div className="MainPage bg-[#F7F5FA]">
        {isAuth == true ? (
          <div className="flex flex-row justify-between  gap-4 p-5 items-center h-20 ">
            <div className="flex flex-row">
              <Image src="/logo.png" height={20} width={40} alt="logo" />
              <p className="font-semibold text-[30px] text-[#0A033C]">Nafas</p>
            </div>
            <div className="flex flex-row gap-4">
              <Link href="/Dashboards/Profile">
                <button className="text-center cursor-pointer h-8.5 w-45 bg-[#FF6652] text-white text-[16px] rounded-[10px] px-4">
                  My account
                </button>
              </Link>
              <button
                className="cursor-pointer h-8.5 w-auto bg-[#FF6652] text-white text-[16px] rounded-[10px] px-4 "
                onClick={() => {
                  localStorage.setItem("isAuth", false);
                  window.location.reload(); 
                }}
              >
                Logout 
              </button>
            </div>
          </div>
        ) : (
          <NavBar /> 
        )}

        <HeroSection />

        <AboutUsSection />
        <GazaSection />
        <LearnerSection />
        <Trainer />
        <Freelancer />
        <Charity />
        <section className="h-10"></section>
        <Footer />
      </div>
    </>
  );
}
export default Main;
