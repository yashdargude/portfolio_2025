"use client";

import React from "react";
import { Heading } from "./heading";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import dotGrid from "@/public/dotgrid.png";
import BoxReveal from "../ui/boxreveal";

export default function Brief() {
  return (
    <section className="pb-36 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="flex flex-col justify-center">
        <Heading>About me in brief</Heading>
        <BoxReveal>
          <p className="text-textPrimary text-md md:text-lg font-light tracking-widest text-justify mb-10">
            Hi, I’m Yash Dargude, a Full-Stack Developer from India! I
            specialize in building scalable, high-performance web applications
            with a strong focus on problem-solving, system design, and user
            experience. Passionate about innovation and continuous learning, I
            thrive in collaborative environments, solving complex challenges and
            delivering impactful solutions. Whether optimizing APIs for speed or
            architecting robust backend systems, I aim to create efficient,
            scalable, and user-friendly applications that drive meaningful
            results. Let’s build something amazing together! 🚀
          </p>
        </BoxReveal>
        <div>
          <BoxReveal>
            <Button Icon={FaArrowRight} className="gap-6">
              Read more
            </Button>
          </BoxReveal>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center ">
        <Image
          src={dotGrid}
          width={500}
          height={500}
          alt="grid image"
          className=""
        />
      </div>
    </section>
  );
}
