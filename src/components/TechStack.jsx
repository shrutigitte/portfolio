import { delay, motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{y:[10,-10],
    transition:{duration:duration , ease: "linear" , repeat:Infinity , repeatType:"reverse" }
}})
const TechStack = () => {
  return  <div className="pb-24 ">

    <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1.5}}
    className="text-center my-20 text-purple-700 text-4xl lg:text-5xl">TechStack
    </motion.h2>

    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
     className="flex flex-wrap items-center justify-center gap-1">

        <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate"
        className="rounded-2xl border-4 border-purple-400 lg:p-4">
            <RiReactjsLine className="text-7xl text-violet-600"/>
        </motion.div>

        <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate"
        className="rounded-2xl border-4 border-purple-400 lg:p-4">
            <TbBrandNextjs className="text-7xl text-amber-300"/>
        </motion.div>

        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate"
        className="rounded-2xl border-4 border-purple-400 lg:p-4">
            <SiMongodb className="text-7xl text-green-600"/>
        </motion.div>
        
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
        className="rounded-2xl border-4 border-purple-400 lg:p-4">
            <FaNodeJs className="text-7xl text-blue-600"/>
        </motion.div>
    </motion.div>
      
    </div>
  
}

export default TechStack
