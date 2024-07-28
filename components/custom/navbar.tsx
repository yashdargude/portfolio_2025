"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/lightLogo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/navList";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitch from "./themeswitch";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <nav
      className={cn(
        "flex justify-between items-center px-6 md:px-12 lg:px-24 pt-12"
      )}
    >
      <Image
        src={logo}
        width={45}
        height={45}
        alt="Logo"
        className="cursor-pointer z-50"
        onClick={() => router.push("/")}
      />
      <ul className="gap-6 hidden md:flex">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "text-textPrimary text-md font-light hover-underline relative",
                pathname === href && "hover-static--underline"
              )}
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={
              "https://drive.google.com/file/d/1ZOhNYHCTEfb5SBcLvSbpU6xVp9ujshgZ/view?usp=drive_link"
            }
            target="_blank"
            className="bg-secondary px-2 py-1 border-[.5px] border-primary text-primary font-light"
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <ThemeSwitch />
      </div>
      <div className="flex md:hidden items-center gap-6">
        <div className=" block md:hidden">
          <ThemeSwitch />
        </div>
        <div
          className="z-50 cursor-pointer block md:hidden"
          onClick={handleToggle}
        >
          <div
            className={cn(
              "w-12 h-[.2rem] bg-primary mb-2 transition-all  cubic-bezier(.17,.67,.83,.67)",
              open && "rotate-45 translate-y-1"
            )}
          ></div>
          <div
            className={cn(
              "w-8 h-[.2rem] bg-primary mb-2 transition-all  cubic-bezier(.17,.67,.83,.67)",
              open && "hidden"
            )}
          ></div>
          <div
            className={cn(
              "w-4 h-[.2rem] bg-primary transition-all  cubic-bezier(.17,.67,.83,.67)",
              open && "-rotate-45 w-12 -translate-y-2"
            )}
          ></div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-30 fixed left-0 top-0 w-full h-[100%] origin-top bg-accent text-black p-10 "
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-raleway items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <motion.div
                        variants={mobileLinkVars}
                        className={cn(
                          "font-raleway font-normal text-textPrimary text-3xl hover-underline relative",
                          pathname === link.href && "hover-static--underline"
                        )}
                        onClick={handleToggle}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
