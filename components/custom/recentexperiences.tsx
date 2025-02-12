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
        {/* Proacure Corp Experience */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
          <BoxReveal>
            <Link
              href={"https://www.proacure.com/"}
              className="text-xl md:text-3xl font-raleway tracking-wider text-primary underline font-light"
            >
              Full Stack Developer Intern at Proacure
            </Link>
          </BoxReveal>
          <BoxReveal>
            <span className="text-lg md:text-2xl font-raleway text-primary italic font-light">
              Oct 2024 - Jan 2025 | California, USA (Remote)
            </span>
          </BoxReveal>
        </div>
        <BoxReveal>
          <p className="text-textPrimary text-md md:text-lg font-light tracking-widest text-justify mt-6 mb-12">
            Developed a <strong>scalable, multi-threaded backend</strong> using
            FastAPI and Python, integrated with PostgreSQL via SQLAlchemy for
            efficient data management. Built a responsive React.js frontend with
            Tailwind CSS, optimizing performance and development workflows.
            <br />
            Implemented Redis-based caching, improving API response times by
            80%, and contributed to an AI-driven document processing system
            using OpenAI’s GPT-4.0-mini. Developed a Retrieval-Augmented
            Generation (RAG) model for unstructured document parsing. Integrated
            QuickBooks Online (OAuth 2.0) to automate invoice tracking and
            deployed the system on AWS EC2 with S3 storage for scalability.
            <br />
            <br />
            <strong>
              Tech Stack: React, Tailwind CSS, Python, FastAPI, PostgreSQL,
              OpenAI GPT-4, AWS EC2
            </strong>
          </p>
        </BoxReveal>

        {/* View All Button */}
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
