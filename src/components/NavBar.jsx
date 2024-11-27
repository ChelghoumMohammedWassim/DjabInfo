import React from 'react'
import logo from '../assets/Logo.svg'
import { FaLinkedin, FaGithub, FaFacebook, FaTwitterSquare } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {

  useGSAP(()=>{
    gsap.fromTo("#navBar", {y: -10 , opacity: 0}, {y: 0, opacity: 1, duration: 0.75 , ease: 'power2.in'})
  }, []);

  return (
    <nav id='navBar' className='mb-20 flex items-center justify-between py-6'>

        <div className='flex flex-shrink-0 items-center'>

            <img className='mx-2 w-20 h-auto' src={logo} alt='logo' />


        </div>


        <div className="flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.facebook.com/share/Woq3R4v8cjryvYV4/?mibextid=LQQJ4d"
              className="text-neutral-400 transition-all duration-300 hover:text-blue-600 hover:scale-125"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/djabi-nfo-7aa126335/"
              className="text-neutral-400 transition-all duration-300 hover:text-blue-700 hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-neutral-400 transition-all duration-300 hover:text-sky-400 hover:scale-125"
              aria-label="Twitter"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="https://github.com/ChelghoumMohammedWassim"
              className="text-neutral-400 transition-all duration-300 hover:text-gray-800 hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
        </div>



    </nav>
  )
}

export default NavBar
