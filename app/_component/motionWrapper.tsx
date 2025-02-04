"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationWrapperProps {
  direction: number;
  children: ReactNode;
  classes?:string;
}

export default function AnimationWrapper({ children, direction ,classes=""}: AnimationWrapperProps) {
  return (
    <motion.div
      className={classes}
      initial={{
        opacity: 0,
        x: direction % 2 === 0 ? 50 : -50, // If even, slide from right; if odd, from left
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
