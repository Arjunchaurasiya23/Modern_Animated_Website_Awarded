import React from 'react'

function About() {
  return (
    <div className='w-full py-8 bg-[#CDEA68] text-black rounded-3xl leading-none '>
    
           <h1 className='px-20 text-[3.5vw] text-balance py-8 font-["Neue_Montreal"] leading-[3.5vw] '> Ochi is a strategic presentation agency for forward-thinking businesses that need to <h1 className='underline hover:underline-offset-4' >raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.  </h1></h1>
        
        
        <div className=' px-20 w-full py-5 text-[1.7vw] text-balance font-["Neue_Montreal"] leading-[3vw] border-t-[2px] border-[#a1b562] ' >
            <div className='flex border-[#a1b562]'>
            <p className='text-right' > What you can expect :</p>
            <br/>
            <br/>
            </div>

            <div className='flex text-left leading-none'>
            <p > We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <br/>
            <p > We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <br/>
    
        </div>
        <div className='w-1/2 px-20 py-5 w-full  border-t-[1px] border-[#a1b562] flex gap-10 items-center '>
        <div className='w-1/2'>
             <h1 className='text-[3vw] font-semibold'>Our approach</h1>
             <button className=' flex gap-10 items-center  mt-6 border-double uppercase dark:md:hover:bg-fuchsia-600 rounded-full bg-black text-white py-5 px-5 checked:bg-blue-500'> read more
               <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-red-600 rounded-3xl'></div> 
        
        </div>

    </div>
  );
}

export default About