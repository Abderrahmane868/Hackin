import Image from "next/image";
import SearchBar from "@/src/components/SearchBar";
import Carousel from "@/src/components/carousel";

export function HeroSection() {
  return (
    <section className="h-screen pt-15">
      <div className="MainContent flex flex-col items-center mx-auto w-full gap-12 py-8">
        <div className="max-w-300 mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-[#0A033C]">
            Give life through Nafas. A breath that can symbolize a fresh start.
          </h1>

          <p>
            Nafas, the platform where learning and working come together.
            Whether you want to learn a new skill, teach others, or offer your
            services as a freelancer, Nafas gives you the tools to grow and
            succeed. But here's the difference: every action you take has an
            impact. Join a community of learners, creators, and doers and help
            in rebuilding Gaza.
          </p>
        </div>

        <div>
          <SearchBar />
        </div>
        <button className="text-center w-100 p-6 m-5  mx-auto text-[#FF6652] font-medium bg-white rounded-2xl shadow-[0_0_10px_2px_rgba(255,0,0,0.7)] hover:shadow-[0_0_15px_4px_rgba(255,0,0,0.9)] transition-shadow">
          Donate to Gaza
        </button>
      </div>
    </section>
  );
}

export function GazaSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-12 py-10">
      <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
        Discover Gaza
      </h1>
      <div>
        <Carousel />
      </div>
      <div className="max-w-300 mx-auto text-center space-y-6">
        <p className="text-xl">
          Gaza is a land of resilience, creativity, and hope. Despite years of
          challenges, its people continue to dream, create, and build a brighter
          future.
        </p>
      </div>
      <div className="flex   justify-center items-center w-full max-w-150 mx-auto">
        <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
          Discover Gaza
        </button>
      </div>
    </section>
  );
}
export function LearnerSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-12 py-10"></section>
  );
}

export function AboutUsSection() {
  return (
    <section className=" aboutUs h-screen">
      <div className="max-w-300 mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
          About Us
        </h1>
        <div className="flex flex-row gap-x-4 justify-center items-center pt-0 mt-0">
          <p className="font-bold text-xl w-1/2">
            Nafas, the platform where learning and working come together.
            Whether you want to learn a new skill, teach others, or offer your
            services as a freelancer, Nafas gives you the tools to grow and
            succeed. But here's the difference: every action you take has an
            impact. Join a community of learners, creators, and doers and help
            in rebuilding Gaza.
          </p>
          <div>
            <Image src="/aboutUs.png" width={500} height={500} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
