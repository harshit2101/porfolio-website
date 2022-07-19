import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#001a1d] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-[#EAEAEA] font-poppins font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p className="text-[#7D8E95]">Hi. I'm Harshit, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building web applications that can improve
              the lives of those around me. What would you do if you had
              a Frontend expert available at your fingertips?</p>  
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
