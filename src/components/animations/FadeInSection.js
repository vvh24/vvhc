import React from 'react';
import { motion } from 'framer-motion';

// This component will animate children when they enter the viewport
export const FadeInSection = ({ children, delay = 0, direction = null }) => {
  // Define animation variants based on direction
  let variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Add directional animations if specified
  if (direction === 'up') {
    variants.hidden = { ...variants.hidden, y: 50 };
    variants.visible = { ...variants.visible, y: 0 };
  } else if (direction === 'down') {
    variants.hidden = { ...variants.hidden, y: -50 };
    variants.visible = { ...variants.visible, y: 0 };
  } else if (direction === 'left') {
    variants.hidden = { ...variants.hidden, x: -50 };
    variants.visible = { ...variants.visible, x: 0 };
  } else if (direction === 'right') {
    variants.hidden = { ...variants.hidden, x: 50 };
    variants.visible = { ...variants.visible, x: 0 };
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};