import React from 'react'
import aboutIMG from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(()=>{

        gsap.fromTo("#header", {opacity: 0, y: 50},{opacity: 1, y: 0, duration: 1.5});

        gsap.fromTo(
            "#aboutImage",
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.5,
              scrollTrigger: {
                trigger: "#aboutImage",
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );


        gsap.fromTo(
      "#aboutDescription",
      { opacity: 0, y: 50 },
      {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
            trigger: "#aboutDescription",
            start: "top 80%",
            toggleActions: "play none none reverse",
            },
        }
        );
        gsap.fromTo("#aboutDescription", {opacity: 0}, { opacity: 1, duration:2});
    }, []);

  return (
    <div className='border-b border-neutral-900 pb-4'>

        <h2 id='header' className='my-20 text-center text-4xl'>À propos <span className='text-neutral-500'>de nous</span></h2>

        <div className='flex flex-wrap'>

            <div className='w-full lg:w-1/2 lg:p-8'>
            
                <div id='aboutImage' className='flex items-center justify-center'>
                    <img className='rounded-2xl' height={500} width={500} src={aboutIMG} alt='' />
                </div>

            </div>

            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p id='aboutDescription' className='my-2 max-w-xl py-6 lg:text-xl'>{ABOUT_TEXT}</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
