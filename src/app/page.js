import Image from "next/image";
import Signup from "./auth/signup/page";
import Signin from "./auth/signin/page";
import Verification from "../components/Verification";
import Courses from "../components/courses";
import Trainers from "../components/trainers";
import Main from "./Main/page";
export default function Home() {
  return (
    <>
    <Trainers />  
    </>
  );
}
