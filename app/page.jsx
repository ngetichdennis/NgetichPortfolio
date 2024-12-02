"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./../components/Social";
import Photo from "@/components/Photo";
// import Stats from "@/components/Stats";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="texl-xl font-bold">Full-Stack Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Dennis Ngetich</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I have a strong expertise in crafting robust and scalable
              full-stack web applications, combining a deep understanding of
              both frontend and backend technologies to deliver seamless and
              user-friendly solutions. My proficiency spans a diverse range of
              programming languages and modern frameworks, enabling me to tackle
              complex development challenges and create impactful applications
              tailored to meet specific user needs. I am committed to staying
              up-to-date with the latest industry trends, ensuring that my
              solutions are not only efficient but also innovative and
              future-proof.
            </p>
            {/* button and socials */}
            <div>
              <a
                href="/assets/DENNIS KIPKIRUI NGETICH RESUME1.pdf"
                download="Dennis Ngetich Resume"
                target="blank"
           
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 boarder boarder-accent rounded-full flex justify-center items-center text-accent
            text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
}

export default Home;
