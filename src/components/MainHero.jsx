
import React from 'react'
import { animate, delay, motion } from "framer-motion"
import { HERO_CONTENT } from '../constants'
import profilepic from '../assets/IMG_1799.jpg'
const container =(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,opacity:1,transition:{duration:0.5 , delay:delay}
    }
})
const MainHero = () => {
  return  <div className=' pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-center lg:ml-100'>
                <motion.h1 variants={container(0.3)}
                 initial="hidden" animate="visible" 
                className='pb-16 text-6xl text-[#412f83] tracking-tight lg:mt-16 lg:text-9xl' id='name'>Shruti Gitte
                </motion.h1>
                
                <motion.span variants={container(0.6)}
                 initial="hidden" animate="visible"
                 className='bg-gradient-to-r from-pink-500 via-purple-500 to-purple-800 bg-clip-text text-4xl tracking-tight text-transparent lg:text-5xl'>Full Stack Developer
                 </motion.span>
                
                <motion.p variants={container(0.9)} 
                initial="hidden" animate="visible"
                className='my-2 max-w-xl py-6 font-medium tracking-tighter text-violet-700'>
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img initial={{x:100,opacity:0}} animate={{x:-100,opacity:1}} transition={{duration:0.8,delay:1.2}}
                className='rounded-xl mt-5' src={profilepic} height={600} width={500} alt="" />
            </div>
        </div>
    </div>
      
    </div>
  
}

export default MainHero
