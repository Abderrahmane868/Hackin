import Image from "next/image";
import SearchBar from "@/src/components/SearchBar";
import Carousel from "@/src/components/carousel";
import Link from "next/link";
export function HeroSection() {
  return (
    <section id="home" className="h-screen pt-15">
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
  const slides = [
    "/carouselpic/y1.webp",
    "/carouselpic/y2.jpeg",
    "/carouselpic/y3.jpg",
  ];
  return (
    <section
      id="gaza"
      className="h-screen flex flex-col items-center justify-center gap-12 py-10"
    >
      <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
        Discover Gaza
      </h1>
      <div>
        <Carousel slides={slides} />
      </div>
      <div className="max-w-300 mx-auto text-center space-y-6">
        <p className="text-xl">
          Gaza is a land of resilience, creativity, and hope. Despite years of
          challenges, its people continue to dream, create, and build a brighter
          future.
        </p>
      </div>
      <div className="flex   justify-center items-center w-full max-w-150 mx-auto">
        <button
          className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded"
          href="https://www.google.com/maps/place/Gaza"
        >
          Discover Gaza
        </button>
      </div>
    </section>
  );
}

export function AboutUsSection() {
  return (
    <section id="about" className=" aboutUs h-screen">
      <div className="max-w-300 mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-15">
          About Us
        </h1>
        <div className="flex flex-row gap-x-4 justify-center items-center gap-4 pt-0 mt-0">
          <p className="font-bold text-xl w-1/2 mr-20">
            Nafas, the platform where learning and working come together.
            Whether you want to learn a new skill, teach others, or offer your
            services as a freelancer, Nafas gives you the tools to grow and
            succeed. But here's the difference: every action you take has an
            impact. Join a community of learners, creators, and doers and help
            in rebuilding Gaza.
          </p>
          <div>
            <Image
              src="/Group 7634.png"
              width={350}
              height={350}
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export function LearnerSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-12 pt-20">
      <div className="max-w-300 mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
          Learner
        </h1>
        <div className="flex flex-row justify-center items-center pt-0 mt-0">
          <div className="font-bold text-xl w-1/2">
            <h2 className="h-00 text-4xl pb-5">
              Build Your Future with Your Own Hands!
            </h2>
            <p className="pb-10">
              As a Learner, you gain practical skills that lead to real
              opportunities. From vocational trades to digital skills, Nafas
              connects you with experienced trainers and hands-on learning paths
              designed for the real world. Your growth doesn't stop with you —
              every skill you learn helps build a stronger future for Gaza.
            </p>
            <Link href="/auth/signup">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
                get Started
              </button>
            </Link>
          </div>
          <div>
            <Image src="/learner.png" width={500} height={500} alt="Learner" />
          </div>
        </div>
      </div>
    </section>
  );
}
export function Trainer() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-12 pt-20">
      <div className="max-w-300 mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
          Learner
        </h1>
        <div className="flex flex-row justify-center items-center pt-0 mt-0">
          <div>
            <Image src="/trainner.png" width={400} height={400} alt="Trainer" />
          </div>
          <div className="font-bold text-xl w-1/2">
            <h2 className="h-00 text-4xl pb-5">
              Train Today. Change Tomorrow.
            </h2>
            <p className="pb-10">
              As a Trainer, your knowledge becomes a force for change. Teach
              practical skills, mentor motivated learners, and earn while making
              a meaningful difference. On Nafas, every lesson you share helps
              empower individuals and contributes directly to rebuilding
              communities in Gaza.
            </p>
            <Link href="/auth/verification">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
                Join as a trainer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Freelancer() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-12 pt-20">
      <div className="max-w-300 mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">
          Freelancer
        </h1>
        <div className="flex flex-row justify-center items-center pt-0 mt-0">
          <div className="font-bold text-xl w-1/2">
            <h2 className="h-00 text-4xl pb-5">Put Your Skills to Work</h2>
            <p className="pb-10">
              As a Freelancer, you turn your skills into real work. Showcase
              your services, connect with clients, and get paid for your
              expertise — all while supporting a greater cause. Every project
              you complete on Nafas helps fund learning, employment, and
              rebuilding efforts in Gaza.
            </p>
            <Link href="/auth/signup">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded">
                Become a freelance
              </button>
            </Link>
          </div>
          <div>
            <Image src="/learner.png" width={500} height={500} alt="Learner" />
          </div>
        </div>
      </div>
    </section>
  );
}
export function Charity() {
  const meserable = [
    "/carouselpic/y1.webp",
    "/carouselpic/y2.jpeg",
    "/carouselpic/y3.jpg",
  ];
  return (
    <section
      id="gaza"
      className="h-screen flex flex-col items-center justify-center gap-12 py-10 "
    >
      <h1 className="text-5xl font-bold text-[#0A033C] pt-15 pb-0">charity</h1>
      <div>
        <Carousel slides={meserable} />
      </div>
      <div className="max-w-300 mx-auto text-center space-y-6">
        <p className="text-xl">
          Gaza is a land of resilience, creativity, and hope. Despite years of
          challenges, its people continue to dream, create, and build a brighter
          future.
        </p>
      </div>
      <div className="flex   justify-center items-center w-full max-w-150 mx-auto">
        <button
          className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-15 w-70  bg-purple-500 text-white rounded"
          href="https://www.google.com/maps/place/Gaza"
        >
          More details
        </button>
      </div>
    </section>
   
  );
}
