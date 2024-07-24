import React from 'react'
import { motion } from 'framer-motion';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}
      className="my-20 text-center text-4xl lg:text-5xl text-purple-700">Projects
      </motion.h2>

      <div className="px-3">{PROJECTS.map((project,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
            className="w-full lg:w-1/4">
            <img src={project.image} className="mb-6 lg:pr-10" alt={project.title} />
            </motion.div>

            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}}
            className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-fuchsia-600">{project.title}</h6>
                <p className="mb-4 text-violet-500">{project.description}</p>
                {project.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 rounded bg-purple-100 text-blue-600 font-medium text-sm px-2 py-1">{tech}</span>
                ))}
            </motion.div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects
