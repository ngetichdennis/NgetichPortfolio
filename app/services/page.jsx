"use client"
import React from 'react'
import Link from 'next/link'
import { motion} from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: 1,
    title: "Web Development",
    description: `Accomplished Software Engineer with a strong foundation in full stack web development, specializing in building 
and deploying scalable applications using JavaScript frameworks such as ReactJS and NextJS, and back-end 
technologies like Python, Java, Flask, and SQL. Skilled in integrating cloud solutions with AWS and Google 
Cloud, and proficient in managing databases with MySQL and PostgreSQL to ensure seamless data flow and 
system performance. Adept at contributing to all phases of the software development lifecycle, delivering highquality, efficient code, and utilizing version control systems like Git to maintain project integrity. Eager to bring 
expertise, contributing to the development of high-volume, low-latency applications for mission-critical 
systems.`,
    href: ""
  },
  {
    num: 2,
    title: "SEO Optimization",
    description: `I am an SEO Developer with a strong focus on enhancing website visibility and performance in search engine rankings. I specialize in implementing technical SEO strategies, optimizing site speed, improving mobile responsiveness, and integrating structured data to ensure compliance with search engine guidelines. With expertise in keyword research and analytics tools like Google Search Console and Google Analytics, I craft solutions that drive organic traffic and improve user engagement. My goal is to create search-engine-friendly websites that deliver measurable results and sustainable growth.`,
    href: ""
  },
  {
    num: 3,
    title: "GIS Service",
    description: `I am a GIS Expert with extensive experience in leveraging Geographic Information Systems to analyze, visualize, and manage spatial data. I specialize in creating detailed maps, conducting geospatial analysis, and developing solutions that integrate GIS technologies for decision-making and problem-solving. With proficiency in tools like ArcGIS, QGIS, and remote sensing software, I excel in transforming complex spatial data into actionable insights. My work is driven by a passion for innovation and sustainability, aimed at delivering impactful solutions for urban planning, environmental management, and other geospatial challenges.`,
    href: ""
  },
  {
    num: 4,
    title: "Engineering Survey",
    description: `I am an Engineering Surveyor skilled in providing precise geospatial measurements and data essential for engineering and construction projects. I specialize in conducting topographic surveys, setting out construction sites, and monitoring structural alignments using advanced surveying equipment like Total Stations, GPS, and laser scanners. With a keen eye for detail and a commitment to accuracy, I ensure that projects are executed with precision and adhere to design specifications. My expertise supports successful infrastructure development, land assessment, and project management in diverse engineering fields..`,
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
                <p className='text-white/60'>{service.description}</p>
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

