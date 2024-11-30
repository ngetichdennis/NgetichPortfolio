
"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNext,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMaterialUi,
  SiTailwindCss,
  SiNextdotjs,
} from "react-icons/si";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./../../components/ui/tooltip";
import { ScrollArea } from "./../../components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./../../components/ui/tabs";

const about = {
  title: "About",
  description: "This is a description",
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Dennis Ngetich",
    },
    {
      fieldName: "Profession",
      fieldValue: "Software Engineer",
    },
    {
      fieldName: "Location",
      fieldValue: "Nairobi, Kenya",
    },
    {
      fieldName: "Email",
      fieldValue: "ngetichdennis90@gmail.com",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description: "This is my description",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2020-2022",
    },
    {
      company: "Tech Corp",
      position: "Software Engineer",
      duration: "2018-2020",
    },
    {
      company: "Innovative Solutions",
      position: "Front-End Developer",
      duration: "2016-2018",
    },
    {
      company: "Creative Agency",
      position: "Junior Developer",
      duration: "2014-2016",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "This is my description",
  items: [
    {
      institution: "University of Nairobi",
      degree: "Bachelor of Science in Computer Science",
      duration: "2010-2014",
    },
    {
      institution: "Kisumu Polytechnic",
      degree: "Diploma in Computer Science",
      duration: "2008-2010",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "This is my description",
  items: [
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: "Expert",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Expert",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      level: "Expert",
    },
    {
      icon: <FaReact />,
      name: "React",
      level: "Expert",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      level: "Expert",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div>  
          <TabsContent value="experience">
            {/* Experience */}
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education">
            {/* Education */}
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            {/* Skills content here */}
            <div className="flex flex-col gap-[30px]">  
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.items.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent 
                              transition-all duration-200">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>

                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
              
                      </li>
                    )
                  })}
                </ul>
             
            </div>
          </TabsContent>
          <TabsContent value="about">
            {/* About content here */}
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
          
                <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info,index)=>{
                    return(
                      <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl" >{info.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
        
            </div>
          </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;

