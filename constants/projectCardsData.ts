import pr1 from "@/public/billify.png";
import pr2 from "@/public/campusnotes.png";
import pr3 from "@/public/greengridin.png";
import pr4 from "@/public/findyourguide.png";
import { StaticImageData } from "next/image";

export type projectData = {
  title: string;
  link: string;
  image: StaticImageData;
  alt: string;
};

export const projectList: projectData[] = [
  {
    title: "Billify",
    link: "https://example1.com",
    image: pr1,
    alt: "Billify project",
  },
  {
    title: "Campus Notes",
    link: "https://example2.com",
    image: pr2,
    alt: "Campus Notes project",
  },
  {
    title: "GreenGridin",
    link: "https://example3.com",
    image: pr3,
    alt: "GreenGridin project",
  },
  // {
  //   title: "FindYourGuide",
  //   link: "https://example4.com",
  //   image: pr4,
  //   alt: "FindYourGuide project",
  // },
];
