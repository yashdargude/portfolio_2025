import React from "react";
import darkLogo from "@/public/darkLogo.png";
import Link from "next/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiPhoneCall } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="flex flex-col items-center px-6 md:px-12 lg:px-24 pt-24 pb-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 w-full">
          <Link href={"/"}>
            <Image src={darkLogo} width={80} height={80} alt="logo" />
          </Link>
          <ul className="flex flex-col ">
            <li className="text-background text-lg font-light flex items-center  gap-4">
              <FiMail className="h-4 w-4" />
              <Link href={"mailto:yashdargude567@gmail.com"} target="blank">
                yashdargude567@gmail.com
              </Link>
            </li>
            <li className="text-background text-lg font-light flex items-center  gap-2">
              <PiPhoneCall className="h-4 w-4" />
              <Link href={"tel:+91-7038109240"}>+91-7038109240</Link>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href={"https://www.linkedin.com/in/yash-dargude-326a9622a/"}
              className="bg-background px-4 py-2 flex gap-2 items-center"
              target="blank"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </Link>
            <Link
              href={"/"}
              className="bg-background px-4 py-2 flex gap-2 items-center"
              target="blank"
            >
              <FaTwitter />
              <span>Twitter</span>
            </Link>
            <Link
              href={"/"}
              className="bg-background px-4 py-2 flex gap-2 items-center"
              target="blank"
            >
              <RiInstagramFill />
              <span>Instagram</span>
            </Link>
            <Link
              href={"https://github.com/yashdargude/"}
              className="bg-background px-4 py-2 flex gap-2 items-center"
              target="blank"
            >
              <FaGithub />
              <span>Github</span>
            </Link>
          </div>
        </div>
        <div className="h-[.1rem] max-w-5xl items-center w-full bg-background mt-24"></div>
        <h5 className="text-white text-sm italic mt-12 font-light">
          &copy; 2025 Yash Dargude, All Rights Reserved
        </h5>
      </div>
    </footer>
  );
};
