"use client";

import React from "react";
import { Heading } from "./heading";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import BoxReveal from "../ui/boxreveal";

export const RecentExperiences = () => {
  return (
    <section className="pb-36 w-full">
      <Heading>Recent Experiences</Heading>
      <div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
          <BoxReveal>
            <Link
              href={"/"}
              className="text-xl md:text-3xl font-raleway tracking-wider text-primary underline font-light"
            >
              Full stack web developer intern at Sasefied
            </Link>
          </BoxReveal>
          <BoxReveal>
            <span className="text-lg md:text-2xl font-raleway text-primary italic font-light">
              June 2024 - Present
            </span>
          </BoxReveal>
        </div>
        <BoxReveal>
          <p className="text-textPrimary text-md md:text-lg font-light tracking-widest text-justify mt-6 mb-12">
            Leading the development of a supply chain management system, I focus
            on creating robust tracking solutions for transactions and
            stakeholders. My role includes managing user and transaction data,
            implementing mailing functionalities, and ensuring comprehensive
            documentation. I collaborate effectively with stakeholders to align
            the product with business needs while driving continuous improvement
            in software architecture and development practices.
          </p>
        </BoxReveal>
        <div className="flex justify-end">
          <BoxReveal>
            <Button Icon={FaArrowRight} className="gap-6">
              View All
            </Button>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};
