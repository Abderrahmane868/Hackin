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
function Main() {
  return (
    <>
      <div className="MainPage bg-[#F7F5FA]">
        <NavBar />
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
