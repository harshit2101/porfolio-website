import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-t from-[#001a1d] via-[#001a1d] to-black">
      <div>
        <h1 className="text-green-500 text-6xl pl-8 pt-6 font-comforter font-bold">
          HV
        </h1>
        {/* <img className="filter invert w-20" src={logo} alt='Logo Image' /> */}
      </div>

      <ul className="hidden md:flex text-[#EAEAEA] font-poppins text-2xl">
        <li className="p-6 hover:text-[#FF2E63]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-6 hover:text-[#FF2E63]">
        <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-6 hover:text-[#FF2E63]">
        <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-6 hover:text-[#FF2E63]">
        <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="p-6 hover:text-[#FF2E63]">
        <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={clickHandler} className="md:hidden text-white z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen font-mono text-white bg-gradient-to-t from-[#001a1d] via-[#01181a] to-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-4xl hover:text-[#EAEAEA]">
        <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-5 text-4xl hover:text-[#EAEAEA]">
        <Link onClick={clickHandler} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-5 text-4xl hover:text-[#EAEAEA]">
        <Link onClick={clickHandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-4xl hover:text-[#EAEAEA]">
        <Link onClick={clickHandler} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-5 text-4xl hover:text-[#EAEAEA]">
        <Link onClick={clickHandler} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden sm:flex fixed flex-col top-[35%] sm:right-0 lg:left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center lg:ml-[-100px] lg:hover:ml-[-10px] sm:mr-[-100px] sm:hover:mr-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex sm:flex-row-reverse lg:flex-row justify-between items-center w-full font-bold font-mono text-[#EAEAEA]"
              href="https://www.linkedin.com/in/harshit-verma-0a009421b/"
              target='_blank'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center lg:ml-[-100px] lg:hover:ml-[-10px] sm:mr-[-100px] sm:hover:mr-[-10px] duration-300 bg-green-600">
            <a
              className="flex sm:flex-row-reverse lg:flex-row justify-between items-center w-full font-bold font-mono text-[#EAEAEA] filter invert"
              href="https://github.com/harshit2101"
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center lg:ml-[-100px] lg:hover:ml-[-10px] sm:mr-[-100px] sm:hover:mr-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex sm:flex-row-reverse lg:flex-row justify-between items-center w-full font-bold font-mono text-[#EAEAEA]"
              href="mailto:harshitverma.2101.hv@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a4851]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
