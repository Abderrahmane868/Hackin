import Image from "next/image";
import SearchBar from "../../components/SearchBar";
import Carousel from "../../components/carousel";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen py-16 relative flex items-center justify-center justifyцентр" 
    >
      <div className="absolute top-0 left-0 opacity-20">
        <Image
          src="/Pattern.png"
          width={150}
          height={150}
          alt="Pattern decoration"
        />
      </div>
      <div className="MainContent flex flex-col items-center mx-auto w-full gap-10 py-8">
        <div className="max-w-250 mx-auto text-center space-y-5">
          <h1 className="text-4xl font-bold text-[#0A033C]">
            Give life through Nafas. A breath that can symbolize a fresh start.
          </h1>

          <p className="text-base">
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
        <Link href="/charity">
          <button className="text-center w-80 p-5 m-4 mx-auto text-[#FF6652] font-medium bg-white rounded-2xl shadow-[0_0_10px_2px_rgba(255,0,0,0.7)] hover:shadow-[0_0_15px_4px_rgba(255,0,0,0.9)] transition-shadow">
            Donate to Gaza
          </button>
        </Link>
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
      className="min-h-screen flex flex-col items-center justify-center gap-10 py-20 relative transition-all duration-500"
    >
      <div className="absolute top-20 right-5 opacity-20">
        <Image
          src="/Pattern.png"
          width={140}
          height={140}
          alt="Pattern decoration"
        />
      </div>
      <h1 className="text-4xl font-bold text-[#0A033C] mb-8">Discover Gaza</h1>
      <div>
        <Carousel slides={slides} />
      </div>
      <div className="max-w-250 mx-auto text-center space-y-5">
        <p className="text-lg">
          Gaza is a land of resilience, creativity, and hope. Despite years of
          challenges, its people continue to dream, create, and build a brighter
          future.
        </p>
      </div>
      <div className="flex justify-center items-center w-full max-w-140 mx-auto">
        <a
          href="https://www.google.com/maps/place/Gaza"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-14 w-60 bg-purple-500 text-white rounded flex items-center justify-center px-5 py-3"
        >
          Discover Gaza
        </a>
      </div>
    </section>
  );
}

export function AboutUsSection() {
  return (
    <section
      id="about"
      className="aboutUs min-h-screen py-20 relative flex items-center justify-center transition-all duration-500"
    >
      <div className="absolute bottom-10 right-10 opacity-25">
        <Image
          src="/Pattern.png"
          width={120}
          height={120}
          alt="Pattern decoration"
        />
      </div>
      <div className="max-w-250 mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#0A033C] mb-10">About Us</h1>
        <div className="flex flex-row gap-x-4 justify-center items-center gap-4">
          <p className="font-bold text-lg w-1/2 mr-16">
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
              width={320}
              height={320}
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
    <section
      className="min-h-screen flex flex-col items-center justify-center gap-10 py-20 transition-all duration-500"
      id="learner"
    >
      <div className="absolute top-50 right-0 ">
        <Image src="/pattern.png" width={180} height={180} alt="Freelancer" />
      </div>
      <div className="max-w-250 mx-auto text-center space-y-5">
        <h1 className="text-4xl font-bold text-[#0A033C] mb-15">Learner</h1>
        <div className="flex flex-row justify-center items-center">
          <div className="font-bold text-lg w-1/2">
            <h2 className="h-00 text-3xl pb-4">
              Build Your Future with Your Own Hands!
            </h2>
            <p className="pb-8 font-normal">
              As a Learner, you gain practical skills that lead to real
              opportunities. From vocational trades to digital skills, Nafas
              connects you with experienced trainers and hands-on learning paths
              designed for the real world. Your growth doesn't stop with you —
              every skill you learn helps build a stronger future for Gaza.
            </p>
            <Link href="/learnerPage">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-14 w-60 bg-purple-500 text-white rounded">
                get Started
              </button>
            </Link>
          </div>
          <div>
            <Image src="/learner.png" width={420} height={420} alt="Learner" />
          </div>
        </div>
      </div>
    </section>
  );
}
export function Trainer() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 py-20 relative transition-all duration-500">
      <div className="absolute bottom-20 left-10 opacity-25">
        <Image
          src="/Pattern.png"
          width={150}
          height={150}
          alt="Pattern decoration"
        />
      </div>
      <div className="max-w-250 mx-auto text-center space-y-5">
        <h1 className="text-4xl font-bold text-[#0A033C] mb-6">Trainer</h1>
        <div className="flex flex-row justify-center items-center">
          <div>
            <Image src="/trainner.png" width={360} height={270} alt="Trainer" />
          </div>
          <div className="font-bold text-lg w-1/2 pt-0">
            <h2 className="h-00 text-3xl pb-0">
              Train Today. Change Tomorrow.
            </h2>
            <p className="pb-8 font-normal">
              As a Trainer, your knowledge becomes a force for change. Teach
              practical skills, mentor motivated learners, and earn while making
              a meaningful difference. On Nafas, every lesson you share helps
              empower individuals and contributes directly to rebuilding
              communities in Gaza.
            </p>
            <Link href="/auth/verification">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-14 w-60 bg-purple-500 text-white rounded">
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
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 py-20 transition-all duration-500">
      <div className="absolute bottom-0 left-0 opacity-30">
        <Image src="/pattern.png" width={180} height={180} alt="Freelancer" />
      </div>
      <div className="max-w-250 mx-auto text-center space-y-5">
        <h1 className="text-4xl font-bold text-[#0A033C] mb-15">Freelancer</h1>
        <div className="flex flex-row justify-center items-center">
          <div className="font-bold text-lg w-1/2">
            <h2 className="h-00 text-3xl pb-5">Put Your Skills to Work</h2>
            <p className="pb-8 font-normal">
              As a Freelancer, you turn your skills into real work. Showcase
              your services, connect with clients, and get paid for your
              expertise — all while supporting a greater cause. Every project
              you complete on Nafas helps fund learning, employment, and
              rebuilding efforts in Gaza.
            </p>
            <Link href="/freelancerPage">
              <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-14 w-60 bg-purple-500 text-white rounded">
                Become a freelance
              </button>
            </Link>
          </div>
          <div>
            <Image
              src="/freelance.png"
              width={420}
              height={420}
              alt="Freelancer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export function Charity() {
  const meserable = [
    "/carouselpic2/y1.avif",
    "/carouselpic2/y2.jpg",
    "/carouselpic2/y3.jpeg",
  ];
  return (
    <section
      id="charity"
      className="min-h-screen flex flex-col items-center justify-center gap-10 py-20 relative transition-all duration-500"
    >
      <div className="absolute top-10 left-10 opacity-20">
        <Image
          src="/Pattern.png"
          width={140}
          height={140}
          alt="Pattern decoration"
        />
      </div>
      <h1 className="text-4xl font-bold text-[#0A033C] mb-8">charity</h1>
      <div>
        <Carousel slides={meserable} />
      </div>
      <div className="max-w-250 mx-auto text-center space-y-5">
        <p className="text-lg">
          Charity for Gaza is a lifeline for innocent civilians.
        </p>
      </div>
      <div className="flex justify-center items-center w-full max-w-140 mx-auto">
        <Link href="/charity">
          <button className="bg-gradient-to-r from-[#FF6652] to-[#993D31] h-14 w-60 bg-purple-500 text-white rounded">
            More details
          </button>
        </Link>
      </div>
    </section>
  );
}
