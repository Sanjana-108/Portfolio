import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div className='max-w-full w-11/12 mx-auto'>
    <div className='lg:pt-32 pt-[300px]'>
      <div className='text-4xl flex items-center gap-2 justify-center text-center text-[#011321] font-semibold'>
        <h1>Qualifications</h1>
        <MdCastForEducation  className='text-[#011321]'/>
      </div>
      <div className='mt-10 flex lg:flex-row flex-col gap-7 justify-between pb-9'>
        <div className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Btech</span></p>
          <p className='text-xl text-[#294052] font-medium'>
          My specialization in my graduation program is Electronics and Communication Engineering in which I have secured 9.76 cgpa out of 10 and i got third rank in ECE 2K19 Batch in UIET CSJM University for which i got a Bronze Medal and Certificate of Merit.
          
          </p>
          <a className=' flex items-center gap-2 rounded-md bg-[#011321] w-fit mt-3 text-white py-2 px-12 hover:scale-110 transition-all duration-200'  href="https://drive.google.com/file/d/1ppkYkQu6nAXi3gJDP_ptBe2Lszcb4xCq/view">Download</a>

          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>9.76 cgpa</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'> UIET CSJM University Kanpur</span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#c]'>2019-2023</span><SlCalender /></p>
        </div>
        <div  className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Intermediate</span></p>
          <p className='text-xl text-[#294052] font-medium'>
         I have done my pre-university education program in Physics, Chemistry and Maths in which I have secured 85.2%.
          </p>
          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>85.2%</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'> Kailas Saraswati Inter College</span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#294052]'>2017-2018</span><SlCalender /></p>
        </div>
        <div  className='border-[2px] p-2 border-[#011321] rounded-md'>
          <p className='text-2xl font-semibold text-[#011321]'>Course: <span className='text-[#294052]'>Highschool</span></p>
          <p className='text-xl text-[#294052] font-medium'>
          I have done my SSC education in Physics, Chemistry and Maths in which I have secured 92.33%.
          </p>
          <p className='text-2xl font-semibold text-[#011321]'>Grade: <span className='text-[#294052]'>92.33%</span></p>
          <p className='text-2xl font-semibold text-[#011321]'>College: <span  className='text-[#294052]'>Kailas Saraswati Inter College </span></p>
          <p className='text-2xl font-semibold text-[#011321] flex items-center gap-1'>Year: <span className='text-[#294052]'>2015-2016</span><SlCalender /></p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Education