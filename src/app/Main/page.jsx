import Image from "next/image";
import NavBar from "@/src/components/navBar";
import SearchBar from "@/src/components/SearchBar";
import Carousel from "@/src/components/carousel";
function Main() {
  return (
    <>
      <div className="MainPage min-h-screen bg-[#F7F5FA]">
        <NavBar />
        <div className="MainContent flex flex-col items-center mx-auto w-full gap-12 py-8">
          <button className="text-center w-100 p-6 m-5  mx-auto text-[#FF6652] font-medium bg-white rounded-2xl">
            Donate to Gaza
          </button>
          <div className="max-w-300 mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-[#0A033C]">
              Give life through Nafas. A breath that can symbolize a fresh
              start.
            </h1>

            <p>
              Nafas, the platform where learning and working come together.
              Whether you want to learn a new skill, teach others, or offer your
              services as a freelancer, Nafas gives you the tools to grow and
              succeed. But here’s the difference: every action you take has an
              impact. Join a community of learners, creators, and doers and help
              in rebuilding Gaza.
            </p>
          </div>
          <div className="flex justify-between w-full max-w-150 mx-auto">
            <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] w-50 h-15 px-4 py-2 bg-purple-500 text-white rounded">
              Get started
            </button>
            <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] px-4 py-2 bg-purple-500 text-white rounded">
              Join as a trainner
            </button>
            <button className="bg-gradient-to-r from-[#9C4DF4] to-[#5B2D8E] px-4 py-2 bg-purple-500 text-white rounded">
              Become a freelancer
            </button>
          </div>
          <div>
            <SearchBar />
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
