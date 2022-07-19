import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import NextJS from '../assets/nextJS.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Git from '../assets/git.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full sm:h-screen bg-[#001a1d] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div>
                <p className='text-4xl text-[#EAEAEA] font-poppins font-bold inline border-b-4 border-green-600 '>Skills</p>
                <p className='py-4 text-[#FF2E63]'>These are the technologies and tools I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="TailwindCSS icon" />
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJS} alt="ReactJS icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-32 mx-auto filter invert' src={NextJS} alt="NextJS icon" />
                    <p className='my-4'>NextJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="Git icon" />
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Skills