import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-1  text-white'>
        <div className='textstructure mt-40 px-20'>    {/*  We have one textstructure and inside the array with map and map kr rhe div masker ko*/}
        {["We Create","Eye Opening","Presentation"].map( (item,index)=>{
            return (
            <div className='masker'>
              <div className='w-fit flex items-center'>
                {index === 1 && ( 
                <motion.div 
                 initial= {{width:0}} 
                 animate={{width:"8vw"}} 
                 transition ={{ease: [0.76,0, 0.24, 1], duration:1}}  
                 className='mr-2 nr-5 w-[6vw] h-[3.8vw] realtive -top-[1vw] bg-red-500 rounded-md'></motion.div>)}
                <h1 className='flex items-center uppercase text-[5.5vw] h-full leading-[5vw] tracking-tighter font-["FoundersGrotesk"] font-bold'>
                 {item} 
                </h1>
            </div>
          </div>
        );
        })}
       </div>
<div className='border-t-2 border-zinc-500 mt-32 flex justify-between item-center px-20 py-6'>
   {["For public and private compines","From the first pitch to IPO"].map( (item,index)=>(
      <p className='text-md font-light tracking-tight leading-none'>{item}</p>
   ))}
  <div className='start flex items-center gap-5'>
    <div className='px-6 py-1 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div> 
    <div className='w-8 h-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
        <span className=' rotate-[45deg] '><FaArrowUp /></span>
    </div>
  </div>
  
</div>

    </div>
  );
}

export default LandingPage