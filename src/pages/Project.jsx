import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { FaArrowTrendUp } from "react-icons/fa6";

const Project = (props) => {
  const projects=props.projects
  return (
    <div className='w-11/12 max-w-full mx-auto pb-9 overflow-hidden'>
    <div className='lg:pt-32 pt-[200px]'></div>
    <div className=' w-full flex flex-wrap justify-between gap-5 gap-y-20'>
      {
        projects.map((project)=>{
          return (
            <Card key={project.id} {...project}/>
          )
        })
      }
      </div>
      <h1 className='text-2xl font-semibold mt-11 text-center'>for more visit :</h1>
      <button className='rounded-md py-3 px-10 mx-auto flex mt-3 text-2xl font-semibold bg-[#011321] text-white  w-fit'><Link to='https://github.com/Sanjana-108' className='flex items-center gap-4'>Github <FaArrowTrendUp /></Link></button>
    </div>
  )
}

export default Project