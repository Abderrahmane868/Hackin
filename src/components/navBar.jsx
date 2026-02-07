import Image from "next/image";
import "./navBar.css";
import Link from "next/link";
function NavBar() {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center  ">
            <div className="flex items-center gap-2 pl">
              <div className="flex gap-1">
                <Image
                  src="/icon.png"
                  width={30}
                  height={25}
                  alt="Nafas Logo"
                />
              </div>
              <span className="text-2xl font-bold text-blue-900">Nafas</span>
            </div>

            <div className="flex gap-8 align-middle ml-auto">
              <a
                href="#home"
                className="text-[#EDCE73] font-medium transition cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#0A033C] font-medium transition cursor-pointer"
              >
                About us
              </a>
              <a
                href="#gaza"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition cursor-pointer"
              >
                discover Gaza
              </a>
              <a
                href="#learner"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition cursor-pointer"
              >
                Service
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition cursor-pointer"
              >
                Course
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition cursor-pointer"
              >
                Charity($)
              </a>
            </div>
            <div className="mx-6">
              <Link href="/auth/signin">
                <button className="ml-auto bg-[#EDCE73]  px-6 py-2 rounded-lg text-white font-medium hover:bg-yellow-500 transition-all duration-300">
                  sign in
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="ml-4 bg-[#0A033C]  px-6 py-2 rounded-lg text-white font-medium hover:bg-gray-800 transition-all duration-300">
                  sign up
                </button>
              </Link>
            </div>

            <button className="ml-auto  px-6 py-2  text-[#0A033C] font-medium ">
              My account
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
