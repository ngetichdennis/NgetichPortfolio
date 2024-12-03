
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Project Data
const projects = [
  {
    num: 1,
    category: "Full-Stack",
    title: "BookaDoctor",
    description: "Full Stack web application allowing patients to book appointments with various categories of doctors based on their medical needs.",
    stack: [
      { name: "NextJs" },
      { name: "Strapi" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
      { name: "Flask" },
    ],
    image: "/work/DOCTORPNG.PNG",
    live: "https://live-link-1.com",
    github: "https://github.com/ngetichdennis/doctor_booking",
  },
  {
    num: 2,
    category: "Full Stack",
    title: "Mazingira",
    description: "Full Stack web application for donors to contribute to organizations of their choice.",
    stack: [
      { name: "React Js" },
      { name: "Redux,Context" },
      { name: "Flask" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/denopic2.png",
    live: "/work/Mazingiraapp.PNG",
    github: "https://github.com/ngetichdennis/Mazingira",
  },
  {
    num: 3,
    category: "Front End",
    title: "PixelHive",
    description: "Web application for users to store and categorize images in personalized galleries.",
    stack: [
      { name: "ReactJs" },
      { name: "ChackraUI" },
      { name: "Formik" },
    ],
    image: "/work/pixelhive.PNG",
    live: "https://live-link-4.com",
    github: "https://github.com/ngetichdennis/Gallery-App",
  },
  {
    num: 4,
    category: "Backend",
    title: "LandPro",
    description: "Land management system enabling users to query land information through a user-friendly command line interface (CLI).",
    stack: [
      { name: "Flask" },
      { name: "SQLAlchemy" },

    ],
    image: "/work/landpro.PNG",
    live: "https://live-link-5.com",
    github: "https://github.com/ngetichdennis/LandPro",
  },
  {
    num: 5,
    category: "Full Stack",
    title: "Delica Foods",
    description: "Food management system allowing users to browse and order preferred food items.",
    stack: [
      { name: "ReactJS" },
      { name: "Flask" },
      { name: "CSS3" },
    ],
    image: "/work/delica.PNG",
    live: "https://live-link-6.com",
    github: "https://github.com/ngetichdennis/food-ordering-management-system",
  },
  {
    num: 6,
    category: "Full Stack",
    title: "Amazon Clone",
    description: "MERN stack web application replicating the core functionality of the Amazon e-commerce platform",
    stack: [
      { name: "ReactJs" },
      { name: "Redux,Context" },
      { name: "Firebase(No SQL)" },
      { name: "ExpressJs" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-2.com",
    github: "https://github.com/ngetichdennis/amazon-clone",
  },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (projects[activeIndex]) {
      setProject(projects[activeIndex]);
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex % projects.length; // For looped slides
    setActiveIndex(currentIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info Section */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  // Check if item is an object and render its `name` property
                  <li key={index} className="text-xl text-accent">
                    {typeof item === "object" ? item.name : item}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                {/* <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* GitHub Button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              loop={true}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
