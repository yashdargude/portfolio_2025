"use client";

import React from "react";
import { Heading } from "./heading";
import { TbBrandFramer, TbBrandFramerMotion } from "react-icons/tb";
import { IoCopyOutline, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLocationArrow,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TechStack } from "../ui/infinitemovingicons";
import { AiOutlineHtml5 } from "react-icons/ai";
import BoxReveal from "../ui/boxreveal";

const icons = [
  { icon: AiOutlineHtml5, name: "html" },
  { icon: FaCss3Alt, name: "css" },
  { icon: IoLogoJavascript, name: "javascript" },
  { icon: FaNodeJs, name: "nodejs" },
  { icon: FaReact, name: "reactjs" },
  { icon: RiNextjsFill, name: "nextjs" },
];

const iconsTwo = [
  { icon: RiTailwindCssFill, name: "tailwind" },
  { icon: SiShadcnui, name: "shadcn" },
  { icon: FaFigma, name: "figma" },
  { icon: SiExpress, name: "express" },
  { icon: FaGithub, name: "github" },
  { icon: FaGitAlt, name: "git" },
];

const iconsThree = [
  { icon: SiNpm, name: "npm" },
  { icon: TbBrandFramerMotion, name: "framer" },
  { icon: SiTypescript, name: "ts" },
  { icon: SiMongodb, name: "mongodb" },
  { icon: SiMysql, name: "mysql" },
  { icon: FaBootstrap, name: "bootstrap" },
];

export const Skills = () => {
  return (
    <section className="pb-36 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="flex flex-col justify-center ">
        <Heading>My tech stack</Heading>
        <BoxReveal>
          <p className="text-textPrimary text-md md:text-lg font-light tracking-widest text-justify mb-10">
            My diverse skill set fuels my web development approach. With
            expertise in various technologies and a commitment to continuous
            learning, I create innovative, user-focused solutions and deliver
            impactful results.
          </p>
        </BoxReveal>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <TechStack
          items={icons}
          direction="right"
          speed="slow"
          className="w-full md:w-[80%]"
        />
        <TechStack
          items={iconsTwo}
          direction="left"
          speed="slow"
          className="w-full md:w-[80%]"
        />
        <TechStack
          items={iconsThree}
          direction="right"
          speed="slow"
          className="w-full md:w-[80%]"
        />
      </div>
    </section>
  );
};
