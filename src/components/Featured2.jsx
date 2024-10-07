import React from 'react'

function Featured2() {
  return (
    <div className='w-full py-20 '>
        <div className='w-full  px-20 border-b-[1px] border-zinc-700 pb-20'>
           
        </div>
    <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10  '>
          <div className='cardcontainer relative  w-1/2 h-[75vh]  '>
          <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
          {"FYDE".split("").map((item,index)=>(
            <span >{item}</span>
            ))}
          </h1>
             <div className='card w-full h-full rounded-xl overflow-hidden'>
               <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg' alt='' />
             </div>
          </div>
          <div className='cardcontainer relative rounded-xl w-1/2 h-[75vh] '>
          <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  text-7xl font-["FoundersGrotesk"] -mb-10 leading-none tracking-tighter'>
          {"VISE".split("").map((item,index)=>(
            <span >{item}</span>
            ))}
          </h1>
          <div className='card w-full h-full bg-zinc-900 rounded-xl overflow-hidden'>
          <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png' alt='' />
             </div>
          </div>

        </div>
     </div>
    
    
    </div>
  )
}

export default Featured2