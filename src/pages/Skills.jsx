import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='w-11/12 max-w-full '>
   
    <div className='flex text-8xl flex-wrap gap-28 items-center justify-center lg:pt-32 pt-[200px]  mx-auto mb-9'>
    
      <div className=' rounded-full bg-white p-4 '>
      <FaHtml5 className='text-[#eb4213] '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <IoLogoCss3 className='text-[#11adc2] '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <SiTailwindcss className='text-[#56bfe8] ' />
      </div>
      <div className=' rounded-full bg-white p-4'>
      <IoLogoJavascript className='text-[#f0da16]  '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <FaReact className='text-[#42c5ed]  '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <SiExpress className='text-[#041033] '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <FaNode className='text-[#22ab39] '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <BiLogoMongodb className='text-[#0a5216] '/>
      </div>
      <div className=' rounded-full bg-white p-4'>
      <SiRedux className='text-[#8a0fbf] '/>
      </div>
    </div>
    <div className='mt-10 mx-auto text-center text-4xl text-[#011321]'>
      <h1>Other Tools</h1>
    </div>
    <div className='text-8xl flex flex-wrap gap-28 items-center justify-center mt-10 pb-9'>
      <div className=' rounded-full bg-white p-4'>
      <SiPostman className='text-[#fa3e0f]' />
      </div>
      <div className=' rounded-full bg-white p-4'>
      <BiLogoVisualStudio className='text-[#3862a1]' />
      </div>
      <div className=' rounded-full bg-white p-4'>
      <FaGithub />
      </div>
    </div>
    </div>
  )
}

export default Skills