import NavBar from "@/src/components/navBar";
import "./page.css";
import {
  HeroSection,
  GazaSection,
  AboutUsSection,
  LearnerSection,
} from "./MainSections";

function Main() {
  return (
    <>
      <div className="MainPage bg-[#F7F5FA]">
        <NavBar />
        <HeroSection />

        <AboutUsSection />
        <GazaSection />
        <LearnerSection />
      </div>
    </>
  );
}
export default Main;
