import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Profile.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

    useGSAP(()=>{
        gsap.fromTo("#name", {opacity: 0}, {opacity: 1, duration: 3});
        gsap.fromTo("#profileImage", {x: 50, opacity: 0}, {x:0 ,opacity: 1, duration: 1.5});
        gsap.fromTo("#headline", {opacity: 0}, {opacity: 1, duration:5, ease: "sine.in"});
        gsap.fromTo("#description", {x:-100 ,opacity: 0}, {x: 0, opacity: 1, duration:1.5});
    }, []);

  return (
    <div className=' pb-4 lg:mb-35'>

        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2'>

                <div className=' flex flex-col items-center lg:items-start'>

                    <h1 id='name' className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>DjabInfo</h1>

                </div>

                <span id='headline' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Service Informatique
                </span>

                <p id='description'  className='my-2 max-w-xl py-6 font-light tracking-tight lg:text-xl'>
                    {HERO_CONTENT}
                </p>
            
            </div>


            <div className='w-full lg:w-1/2 lg:p-8'>
            
                <div id='profileImage' className='flex justify-center rounded-xl'>
                    <img src={profilePic} alt='' height={500} width={500} className='rounded-xl'/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Hero
