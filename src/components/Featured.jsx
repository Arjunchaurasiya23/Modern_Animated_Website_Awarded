import { motion } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'

function Featured() {
const [isHovering, setHovering] = useState(false);

  
  return (
    <div className='w-full py-20 '>
        <div className='w-full  px-20 border-b-[1px] border-zinc-700 pb-20'>
           <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>
    <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10  '>
          <div 
          onMouseEnter={()=> setHovering(true)} 
          onMouseLeave={()=> setHovering(false)} 
          className='cardcontainer relative  w-1/2 h-[75vh]' >

          <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
           <h1 className='absolute flex overflow-hidden text-[#D22B2B] right-full translate-x-1/2 top-1/2 translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
             {"ARJUN-FYDE".split("").map((item,index)=>(
             <motion.span 
             initial={{y:"100%"}} 
             animate={isHovering ? {y:"0"}:{y:"100%"}} 
             transition={{ease:[0.22,1,0.36,1], delay:index*.06}}
             className= "inline-block" >{item}</motion.span>
            ))}
          </h1>
          </h1>
             <div className='card w-full h-full rounded-xl overflow-hidden'>
               <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='' />
             </div>
          </div>
          <div className='cardcontainer relative rounded-xl w-1/2 h-[75vh] '>
          <div className='absolute text-[#CDEA68] right-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
             <h1 className='absolute overflow-hidden flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
               {"CHAURASIA".split("").map((item,index)=>(
               <motion.span 
               initial={{y:"100%"}} 
               animate={isHovering ? {y:"100%"}:{y:"0"}} 
               transition={{ease:[0.22,1,0.36,1], delay:index*.06}}
               className= "inline-block" >{item}</motion.span>
               ))}
             </h1>
          </div>
          <div className='card w-full h-full  rounded-xl overflow-hidden'>
          <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='' />
             </div>
          </div>

        </div>
     </div>
    
    
    </div>
  )
}

export default Featured