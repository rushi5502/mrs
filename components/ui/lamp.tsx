"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

 
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center h-screen w-full rounded-md z-0",
        className
      )}
    >
      {/* Central light effect */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left gradient */}
        <motion.div
          initial={{ opacity: 0, width: "15rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-[35rem] w-[30rem] bg-gradient-conic 
          from-orange-500 via-transparent to-transparent dark:from-orange-400 dark:via-transparent dark:to-transparent
          [--conic-position:from_70deg_at_center_top] opacity-60"
        >
          <div className="absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
          <div className="absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
        </motion.div>

        {/* Right gradient */}
        <motion.div
          initial={{ opacity: 0, width: "15rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-[35rem] w-[30rem] bg-gradient-conic 
          from-transparent via-transparent to-orange-500 dark:from-transparent dark:via-transparent dark:to-orange-400
          [--conic-position:from_290deg_at_center_top] opacity-60"
        >
          <div className="absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
          <div className="absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        </motion.div>

        {/* Central glow */}
        <div className="absolute inset-auto z-50 h-26 w-[28rem] -translate-y-1/2 rounded-full 
        bg-orange-500 dark:bg-orange-400 opacity-50 blur-3xl"></div>

        {/* Smaller central light */}
        <motion.div
          initial={{ width: "0rem" }}
          whileInView={{ width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-26 w-64 -translate-y-[10rem] rounded-full 
          bg-orange-400 dark:bg-orange-300 blur-2xl opacity-70"
        ></motion.div>

        {/* Line effect */}
        {/* <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] 
          bg-orange-400 dark:bg-orange-300"
        ></motion.div> */}
      </div>

      {/* Child content */}
      <div className="relative z-50 flex flex-col items-center px-5 -translate-y-40">
        {children}
      </div>
    </div>
  );
};
