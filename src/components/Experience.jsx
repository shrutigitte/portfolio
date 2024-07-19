import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (<div className="pb-4">

    <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}
    className="text-4xl lg:text-5xl my-20 text-center text-purple-700">Experience
    </motion.h2>

    <div>
        {EXPERIENCES.map((experience,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}
                className="w-full lg:w-1/4">
                    <p className="text-purple-700 mb-2 text-sm font-medium">{experience.year}</p>
                </motion.div>

                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 text-purple-500 font-semibold">
                        {experience.role} - <span className="text-violet-500 text-sm">{experience.company}</span>
                    </h6>
                    <p className=" text-fuchsia-600 mb-4">{experience.description}</p>
                    {experience.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 mt-4 rounded text-sm font-medium text-blue-600 px-2 py-1 bg-purple-100">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
  </div>
  );
};

export default Experience
