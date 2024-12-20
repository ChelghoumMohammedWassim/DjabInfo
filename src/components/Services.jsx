import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const elements = serviceRefs.current; // Avoid recalculating references.
    const animations = [];
  
    // Batch animations with reduced calculations per frame.
    elements.forEach((el) => {
      const animation = gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8, // Slightly shorter duration for snappier effects.
          ease: 'power2.out', // A less resource-intensive ease function.
          scrollTrigger: {
            trigger: el,
            start: 'top 85%', // Trigger slightly earlier to improve perceived smoothness.
            toggleActions: 'play none none reverse',
          },
        }
      );
      animations.push(animation);
    });
  
    return () => {
      animations.forEach((animation) => animation.kill()); // Cleanup animations on component unmount.
    };
  }, []);
  

  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl">Services</h2>

      <div>
        {SERVICES.map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={service.image}
                height={150}
                width={150}
                alt={service.title}
                loading="lazy"
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{service.title}</h6>
              <p className="mb-4 text-neutral-400">{service.description}</p>
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
