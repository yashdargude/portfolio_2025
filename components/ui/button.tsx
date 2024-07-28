"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Children, FC } from "react";
import { IconType } from "react-icons";
import { FiMail } from "react-icons/fi";

interface buttonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  Icon?: IconType;
  iconClass?: string;
  path?: string;
  blank?: boolean; // Opens link in a new tab or window  (default: false)
}

const Button: FC<buttonProps> = ({
  className,
  onClick,
  children,
  disabled,
  Icon,
  loading,
  iconClass,
  path,
  blank = false,
}) => {
  return (
    <Link
      href={path ? path : "/"}
      target={blank ? "_blank" : ""}
      className={cn(
        "flex bg-secondary text-primary text-sm tracking-widest justify-between px-2 py-3 min-w-24 md:min-w-64 border-[.5px] border-primary items-center",
        className
      )}
    >
      {children}
      {Icon ? <Icon className={cn("w-5 h-5", iconClass)} /> : ""}
    </Link>
  );
};

export { Button };
