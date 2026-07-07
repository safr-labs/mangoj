'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.4,
  yOffset = 15,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Premium calm cubic-bezier easing
      }}
    >
      {children}
    </motion.div>
  );
}
