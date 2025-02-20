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
    link: "https://billify-nu.vercel.app/",
    image: pr1,
    alt: "Billify project",
  },
  {
    title: "FindYourGuide",
    link: "https://findguide.vercel.app/",
    image: pr4,
    alt: "Campus Notes project",
  },
  {
    title: "GreenGridin",
    link: "https://greengridin.vercel.app/",
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
