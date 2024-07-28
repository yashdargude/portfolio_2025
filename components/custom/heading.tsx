import { cn } from "@/lib/utils";
import React from "react";
import BoxReveal from "../ui/boxreveal";

interface headingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<headingProps> = ({ children, className }) => {
  return (
    <BoxReveal>
      <h4
        className={cn(
          "text-primary text-3xl md:text-5xl font-raleway mb-16",
          className
        )}
      >
        {children}
      </h4>
    </BoxReveal>
  );
};
