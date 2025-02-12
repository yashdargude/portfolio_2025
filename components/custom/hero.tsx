"use client";
import Image from "next/image";
import profileImg from "@/public/yash.png";
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import BoxReveal from "../ui/boxreveal";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 lg:gap-0  pt-16">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <div>
          <BoxReveal boxColor="var(--primary)">
            <span className="bg-secondary px-2 py-1 border-[.5px] border-primary border-dashed inline-block font-light text-primary mb-4 text-sm md:text-md">
              Developing solutions, Delivering results
            </span>
          </BoxReveal>
        </div>
        <BoxReveal boxColor="var(--primary)">
          <h1 className="text-4xl md:text-6xl font-normal md:font-light font-raleway text-primary leading-[3rem] md:leading-[5rem] mb-4">
            Crafting Experiences  That Connect
          </h1>
        </BoxReveal>
        <BoxReveal boxColor="var(--primary)">
          <p className="text-textPrimary text-md md:text-lg font-light tracking-widest max-w-96 text-justify mb-12">
            Hi, I’m Yash Dargude, a full stack developer from India. I’m
            passionate about creating innovative web solutions and have
            experience leading diverse projects. I’m always eager to tackle new
            challenges and improve my skills.
          </p>
        </BoxReveal>

        <BoxReveal boxColor="var(--primary)">
          <div className="flex items-center  gap-8">
            <Button
              Icon={FiMail}
              className="bg-transparent border-textMuted text-textPrimary gap-6"
              iconClass="text-textMuted"
              path="mailto:yashdargude567@gmail.com"
              blank={true}
            >
              Mail me now
            </Button>
            <Button
              Icon={FiDownload}
              className="gap-6"
              path="https://drive.google.com/file/d/1-8VALGPBb1Fm5Kk59ukP0FGe27PwFq7G/view?usp=sharing"
              blank={true}
            >
              Resume
            </Button>
          </div>
        </BoxReveal>
      </div>
      <div className="flex items-center justify-center  pl-0 relative order-1 md:order-2">
        {/* main grid box */}
        <div className="w-[2px] h-[25rem] md:h-[43rem] bg-blueOpacity-30 absolute left-14 -top-24 lg:left-16 lg:-top-24"></div>
        <div className="w-[22rem] md:w-[43rem] h-[2px] bg-blueOpacity-30 absolute left-0 top-0 sm:left-0 sm:top-0"></div>
        <div className="w-[2px] h-[25rem] md:h-[43rem] bg-blueOpacity-30 absolute right-12 -top-12 sm:-right-2 2xl:right-[5.5rem] sm:-top-12"></div>
        <div className="w-[22rem] md:w-[43rem] h-[2px] bg-blueOpacity-30 absolute -right-2 bottom-0 sm:right-0 sm:bottom-0"></div>
        {/* second grid box */}
        <div className="w-[2px] h-[25rem] md:h-[43rem] bg-blueOpacity-20 absolute left-8 -top-12 md:left-0 md:-top-12"></div>
        <div className="w-[22rem] md:w-[43rem] h-[2px] bg-blueOpacity-20 absolute -left-8 top-8 md:-left-12 md:top-12 -z-10"></div>
        <div className="w-[2px] h-[25rem] md:h-[43rem] bg-blueOpacity-20 absolute right-24  -top-12 md:right-36  md:-top-12 -z-10"></div>
        <div className="w-[22rem] md:w-[43rem] h-[2px] bg-blueOpacity-20 absolute right-8 -bottom-8 md:right-8 md:-bottom-12"></div>

        {/* image */}
        <div className="bg-blue-50 bg-opacity-50 border-2 border-blueOpacity-50  border-shadow-custom w-[70%] md:w-[80%] ">
          <Image
            src={profileImg}
            width={400}
            height={400}
            alt="profile image"
            className=""
          />
        </div>
      </div>
      <div className="h-[60rem]  dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-big-blue-500/[0.2] flex items-center justify-center absolute right-0 top-0 w-full md:w-[65%] -z-10"></div>
    </section>
  );
}
