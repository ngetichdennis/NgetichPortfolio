"use client"
import React from 'react'
import Link from 'next/link'
import { motion} from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: 1,
    title: "Web Development",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
    tempus quisquam in est. Cum sociis natoque penatibus et magnis 
    dis parturient montes, nascetur ridiculus mus.`,
    href: ""
  },
  {
    num: 2,
    title: "UI/UX Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
    tempus quisquam in est. Cum sociis natoque penatibus et magnis 
    dis parturient montes, nascetur ridiculus mus.`,
    href: ""
  },
  {
    num: 3,
    title: "Digital Marketing",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
    tempus quisquam in est. Cum sociis natoque penatibus et magnis 
    dis parturient montes, nascetur ridiculus mus.`,
    href: ""
  },
  {
    num: 4,
    title: "SEO Optimization",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
    tempus quisquam in est. Cum sociis natoque penatibus et magnis 
    dis parturient montes, nascetur ridiculus mus.`,
    href: ""
  }
];



const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 cursor-pointer'>
      <div className='container mx-auto'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease:"easeIn"
            }
         }}
         className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service,index)=>{
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} 
                  className='w-[70px] h-[70px] rounded-full bg-white
                   group-hover:bg-accent transition-all 
                   duration-500 flex justify-center items-center 
                   hover:rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* heading */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                <p>{service.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
              )
          })}

        </motion.div>

      </div>
      
    </section>
  )
}

export default Services

