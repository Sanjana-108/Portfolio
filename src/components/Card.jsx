import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Card = ({id,title,image,skills,repoLink,liveLink}) => {
  return (
    <div className=''>
      <div className='flex flex-col gap-y-2 border-[2px] p-5 rounded-md border-[#040829]'>
        <img src={image} alt='' className='w-[500px] h-auto object-fill'></img>
        <p className='text-2xl font-semibold text-[#040829]'>{title}</p>
        <p className='text-xl font-medium'>Skills:<span>{skills}</span></p>
        <p className='text-lg font-normal flex gap-2'>Repo Link: <span className='text-white text-base'><button className='rounded-md bg-[#011321] py-1 px-2 flex items-center gap-1'><Link to={repoLink} className='flex items-center gap-1'>Click Here <FaArrowRight/></Link></button></span></p>
        <p className='text-lg font-normal flex gap-3'>Live Link: <span className='text-white text-base'><button className='rounded-md bg-[#011321] py-1 px-2 flex items-center gap-1'><Link to={liveLink} className='flex items-center gap-1'>Click Here <FaArrowRight/></Link></button></span></p>
     
      </div>
    </div>
  )
}

export default Card