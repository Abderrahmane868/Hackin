"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
export default function Signup() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    password: "",
    email: "",
  });

  async function addUser() {
    const req = await fetch("http://127.0.0.1:8000/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSignup = () => {
    if (
      !user.nom ||
      !user.prenom ||
      !user.email ||
      !user.telephone ||
      !user.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(user));
  };

  return (
    <>
      <div className="bg-[#F7F5FA] flex flex-col pb-10 ">
        <div className="pt-8 flex flex-row gap-x-1.5 ml-8">
          <Image src="/icon.png" width={30} height={25} alt="Nafas Logo" />
          <h1 className="font-semibold text-3xl ">NAFAS</h1>
        </div>
        <div className="bg-[#F7F5FA] flex flex-row justify-evenly gap-0 pt-16 px-8">
          <div>
            <h1 className="text-[56px] font-bold ">
              {" "}
              <span>Welcome to</span>
              <br></br>
              Nafas Platform
            </h1>
            <Image
              src="/shit.png"
              height={452}
              width={456}
              alt="Welcome illustration"
            />
          </div>
          <div className="bg-white border rounded-3xl border-[#666666] pt-12 pb-12 px-12 max-w-xl">
            <h1 className="text-[32px] font-medium mb-8">Sign up now</h1>
            <div className="mb-6 flex flex-row gap-x-4">
              <div className="flex flex-col">
                <label className="text-[#666666] text-sm mb-2">
                  First name
                </label>
                <input
                  type="text"
                  className="h-14 border rounded-xl border-[#666666] px-4"
                  value={user.nom}
                  onChange={(e) => setUser({ ...user, nom: e.target.value })}
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="text-[#666666] text-sm mb-2">Last name</label>
                <input
                  type="text"
                  className="border-[#666666] border h-14 rounded-xl px-4"
                  value={user.prenom}
                  onChange={(e) => setUser({ ...user, prenom: e.target.value })}
                ></input>
              </div>
            </div>

            <div className="mb-6 flex flex-col">
              <label className="text-[#666666] text-sm mb-2">
                Email address
              </label>
              <input
                type="email"
                className="border-[#666666] border w-full h-14 rounded-xl px-4"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></input>
            </div>

            <div className="mb-6 flex flex-col">
              <label className="text-[#666666] text-sm mb-2">ID number</label>
              <input
                type="text"
                className="border-[#666666] border w-full h-14 rounded-xl px-4"
              ></input>
            </div>

            <div className="mb-6 flex flex-col">
              <label className="text-[#666666] text-sm mb-2">
                Phone number
              </label>
              <input
                type="text"
                className="border-[#666666] border w-full h-14 rounded-xl px-4"
                value={user.telephone}
                onChange={(e) =>
                  setUser({ ...user, telephone: e.target.value })
                }
              ></input>
            </div>

            <div className="mb-6 flex flex-col">
              <label className="text-[#666666] text-sm mb-2">Password</label>
              <input
                type="password"
                className="border-[#666666] border w-full h-14 rounded-xl px-4"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></input>
              <p className="text-xs text-[#666666] mt-2">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>

            <div className="flex flex-row justify-between items-center mt-8">
              <Link href={"/"}>
              <button
                className="w-41 h-16 cursor-pointer bg-[#EDCE73] rounded-[40px] text-[22px] font-medium text-white"
                onClick={() => {
                  handleSignup();
                  addUser();
                  localStorage.setItem("isAuth", true);
                }}
              > Sign up</button>
              </Link>
              
               
              <p className="text-[16px] text-[#666666]">
                Already have an account?
                <Link href="/auth/signin">
                  <span className="underline cursor-pointer">Log in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
