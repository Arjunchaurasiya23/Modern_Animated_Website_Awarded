import React from 'react'

function Cards() {
  return (
    <div className='flex items-center mt-20  px-20 w-full h-screen bg-zinc-100 gap-5 '>

      <div className ='cardcontainer w-1/2 h-[50vh]'>
        <div className = 'card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'> 
          <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />   
           <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>&copy;Arjun</button>
          </div>
      </div>

      <div className='cardcontainer flex gap-5 rounded-xl w-1/2 h-[50vh] '>
         <div className='relative rounded-xl w-1/2 h-full bg-zinc-800 flex items-center justify-center'> 
           <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' /> 
           <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>RATING 5 ON CLUTCH</button>
         </div>
         <div className=' relative rounded-xl w-1/2 h-full bg-zinc-800  flex items-center justify-center overflow-hidden'>
          <img className='w-32 overflow-hidden' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>   
          <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>BUSSINESS WITH ARJUN</button>
            </div>
      </div>

    </div>
  )
}

export default Cards