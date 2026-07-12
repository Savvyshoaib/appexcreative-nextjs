"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { pageTransition } from "@/lib/animations";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
