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
            I&apos;m a web developer from India with a strong passion for
            crafting innovative solutions and leading diverse projects. My keen
            problem-solving skills, collaborative mindset, and commitment to
            excellence drive me to tackle new challenges with enthusiasm. I’m
            dedicated to continuous learning and delivering high-quality
            results, always striving to exceed expectations and make a
            meaningful impact.
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
