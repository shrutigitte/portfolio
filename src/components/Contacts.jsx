import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="pb-20">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}}
      className="text-4xl lg:text-5xl text-purple-700 text-center my-20">Get in Touch
      </motion.h2>

      <div className="text-center">
        <a href="tel:+918506022170" 
        className="my-4 text-fuchsia-600 font-medium"> <p className="text-blue-500 font-normal">Mobile:-</p> {CONTACT.phoneNo}
        </a> <br />
        <a href="mailto:shrutigitte@gmail.com" target="_blank" className="text-fuchsia-600 font-medium border-b border-fuchsia-600"> <span className=" text-blue-500 " >email:-</span> {CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contacts
