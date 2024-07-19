import { motion } from "framer-motion";
import aboutIMG from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return <div className=" pb-4">
    <h2 className="my-20 text-center text-4xl text-purple-400 lg:text-5xl">About<span className="text-violet-700">ME</span></h2>
    <div className="flex flex-wrap">
        <div className="lg:flex items-center justify-center w-full  lg:p-8">
            <motion.div
            whileInView={{opacity:1, x:0}}  initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:1.1}}
            className="items-center justify-center">
                <img className="rounded-3xl ml-4" src={aboutIMG} alt="Coding" />
            </motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0 , x:100}} transition={{duration:0.5}} 
            className="w-full lg:w-1/2">
                <div className="flex ">
                    <p className="text-justify px-4 lg:px-10 lg:ml-10 max-w-xl py-6 "> <br /> {ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
    </div>;

  
};

export default About
