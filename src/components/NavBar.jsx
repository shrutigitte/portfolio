
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const NavBar = () => {
  return <nav className='mb-20 flex items-center justify-between py-2 h-10'>
    <div className='flex flex-shrink-0 items-center' >
        {/* <h3 className='mx-2 mt-4 font-medium italic text-2xl text-violet-800 font-medium '>SG</h3> */}
    </div>
    <div className='m-8 mt-15 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/shruti-gitte-159506227/" target='_blank'><FaLinkedin/></a> 
        <a href="https://github.com/shrutigitte" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/shrutigitte/" target='_blank'><FaInstagram/></a>
    </div>
  </nav> ;
    

}

export default NavBar
