"use client";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "./heading";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { projectData } from "@/constants/projectCardsData";
import { projectList } from "@/constants/projectCardsData";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import BoxReveal from "../ui/boxreveal";

export const RecentProjects = () => {
  return (
    <section className="pb-36 w-full">
      <Heading>Recent Projects</Heading>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-16">
        {projectList.map((project) => {
          return (
            <Card
              image={project.image}
              link={project.link}
              alt={project.alt}
              title={project.title}
              key={project.link}
            />
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button Icon={FaArrowRight} className="gap-6">
          View All
        </Button>
      </div>
    </section>
  );
};

const Card = ({ image, alt, link, title }: projectData) => {
  return (
    <Link href={link} passHref target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-4 py-6 px-6 bg-secondary min-w-72 max-w-[22rem] justify-center project-shadow-custom border-[1px] border-primary transition-all delay-75 ease-linear ">
        <div className="grid place-items-center">
          <Image
            src={image}
            width={320}
            height={320}
            alt={alt}
            className="border-[.5px] border-primary"
          />
        </div>
        <div className="flex justify-between pt-6">
          <h5 className="text-2xl font-bold tracking-wider underline text-black">
            {title}
          </h5>
          <IoArrowForwardCircleOutline className="w-6 h-6 text-primary cursor-pointer" />
        </div>
      </div>
    </Link>
  );
};
