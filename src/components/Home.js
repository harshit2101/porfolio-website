import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-[#001a1d] w-full h-screen pt-10"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF2E63] text-[18px]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-poppins font-bold text-[#EAEAEA]">Harshit Verma</h1>
        <h2 className="text-3xl sm:text-4xl font-medium text-[#7D8E95]">I'm a Frontend Developer</h2>
        <p className="py-4 max-w-[600px] text-white">
          A Frontend Developer exploring different tools and frameworks.
          Currently, focused on learning and building responsive web
          applications.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
            <button className="text-[#EAEAEA] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#011216] hover:scale-105">View Work <HiArrowNarrowRight className="ml-2"/></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
