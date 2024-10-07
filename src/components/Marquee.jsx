import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43]  rounded-3xl'>
        <div className=' text border-t-2 border-b-2 border-zinc-300 display: flex overflow-hidden whitespace-nowrap '>

          <motion.h2 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear", repeat:Infinity ,duration:5 }} className='text-[22vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold -mb-15 pt-1'>We are ochi </motion.h2> 
          <motion.h2 initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear", repeat:Infinity ,duration:5 }} className='text-[22vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold -mb-15 pt-1'>We are ochi </motion.h2>
          

        </div>



        </div>
  )
}

export default Marquee
