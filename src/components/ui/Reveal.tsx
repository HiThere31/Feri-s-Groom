"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { createRevealVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={createRevealVariants(delay)}
    >
      {children}
    </motion.div>
  );
}
