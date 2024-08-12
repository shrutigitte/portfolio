import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="pb-20">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}
      className="text-4xl lg:text-5xl text-purple-700 text-center my-20">Get in Touch
      </motion.h2>

      <div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
      className="tracking-tighter text-center">
        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
        className="my-4 text-fuchsia-600 font-medium"> <span className="text-blue-500 font-normal">MobileNo:-</span> {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:shrutigitte@gmail.com" target="_blank" className="text-fuchsia-600 font-medium border-b border-fuchsia-600"> <span className="font-normal text-blue-500 border-none" >email:-</span> {CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contacts
