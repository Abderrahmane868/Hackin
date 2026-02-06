import Image from "next/image";
import "./navBar.css";
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
                href="/dashboard"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                About us
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                discover Gaza
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                Service
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                Course
              </a>
              <a
                href="#"
                className="text-[#0A033C] font-medium hover:text-blue-700 transition"
              >
                Charity($)
              </a>
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
