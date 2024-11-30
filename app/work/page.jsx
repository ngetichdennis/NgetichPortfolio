
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
    category: "Front End",
    title: "Project 1",
    description: "This is a description for project 1.",
    stack: [
      { name: "React" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-1.com",
    github: "https://github.com/username/project1",
  },
  {
    num: 2,
    category: "Full Stack",
    title: "Project 2",
    description: "This is a description for project 2.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-2.com",
    github: "https://github.com/username/project2",
  },
  {
    num: 3,
    category: "Mobile App",
    title: "Project 3",
    description: "This is a description for project 3.",
    stack: [
      { name: "React Native" },
      { name: "Redux" },
      { name: "Expo" },
      { name: "Firebase" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-3.com",
    github: "https://github.com/username/project3",
  },
  {
    num: 4,
    category: "Front End",
    title: "Project 4",
    description: "This is a description for project 4.",
    stack: [
      { name: "Vue.js" },
      { name: "Vuex" },
      { name: "Bootstrap" },
      { name: "Axios" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-4.com",
    github: "https://github.com/username/project4",
  },
  {
    num: 5,
    category: "Backend",
    title: "Project 5",
    description: "This is a description for project 5.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-5.com",
    github: "https://github.com/username/project5",
  },
  {
    num: 6,
    category: "Front End",
    title: "Project 6",
    description: "This is a description for project 6.",
    stack: [
      { name: "Angular" },
      { name: "RxJS" },
      { name: "NgRx" },
      { name: "SCSS" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-6.com",
    github: "https://github.com/username/project6",
  },
  {
    num: 7,
    category: "Full Stack",
    title: "Project 7",
    description: "This is a description for project 7.",
    stack: [
      { name: "Django" },
      { name: "React" },
      { name: "Redux" },
      { name: "SQLite" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-7.com",
    github: "https://github.com/username/project7",
  },
  {
    num: 8,
    category: "Mobile App",
    title: "Project 8",
    description: "This is a description for project 8.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Firebase" },
      { name: "REST API" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-8.com",
    github: "https://github.com/username/project8",
  },
  {
    num: 9,
    category: "Front End",
    title: "Project 9",
    description: "This is a description for project 9.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "GraphQL" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-9.com",
    github: "https://github.com/username/project9",
  },
  {
    num: 10,
    category: "Backend",
    title: "Project 10",
    description: "This is a description for project 10.",
    stack: [
      { name: "Spring Boot" },
      { name: "Java" },
      { name: "MySQL" },
      { name: "Hibernate" },
    ],
    image: "/assets/denopic2.png",
    live: "https://live-link-10.com",
    github: "https://github.com/username/project10",
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
                <Link href={project.live} target="_blank">
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
                </Link>
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
