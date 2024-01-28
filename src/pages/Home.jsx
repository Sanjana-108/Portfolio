import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className='w-11/12 max-w-full mx-auto text-[#060a29] pb-9'>
    <div className='lg:pt-32 pt-[200px]'></div>
      <p className='text-lg font-semibold'>Welcome to my portfolio.</p>
      <h1 className='text-6xl font-bold'>
      Hi! I'm <span className='text-[#000317]'>Sanjana Katiyar</span>
      </h1>
      <p className='text-2xl font-medium text-[#000317]'>
       I'm a MERN Stack Developer
      </p>
      <p className='text-xl mt-2'>
          I am a passionate web developer navigating through a landscape of diverse projects and cutting-edge tools. My journey involves crafting elegant solutions, embracing new frameworks, and a relentless commitment to continuous improvement. Let's connect and explore the exciting possibilities in the world of code.
      </p>

        <div className='rounded-md bg-[#011321] w-fit mt-3 text-white py-2 px-12 hover:scale-110 transition-all duration-200'>
            <button className='flex items-center gap-2'><Link to='https://drive.google.com/file/d/1jkln0nsTsDx99uxuX6wShP5opaYafBOG/view?usp=sharing'>Download Resume</Link>  <FaArrowRight  /></button>
        </div>
        <div className='flex gap-12 mt-5 text-5xl   items-start '>

        <Link to='https://github.com/Sanjana-108'>
        <FaGithub  className='text-[#f0294d] transition-all duration-200 hover:scale-110'/>
        </Link>

        <Link to='https://www.linkedin.com/in/sanjana-katiyar-91b97a253/'>
            <FaLinkedin  className='text-[#0961ed] transition-all duration-200 hover:scale-110'/>
        </Link>

       
        <Link to='https://www.instagram.com/sanjanak_19/'>
        <FaInstagramSquare  className='text-[#f0294d] transition-all duration-200 hover:scale-110'/>
        </Link>
        
        </div>
    </div>

  )
}

export default Home