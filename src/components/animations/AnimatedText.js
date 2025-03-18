import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, type = "heading", className = "" }) => {
  // Split the text into an array of letters
  const letters = Array.from(text);

  // Animation configuration
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // For headings, animate each letter
  if (type === "heading") {
    return (
      <motion.h1
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: 'inline-block', marginRight: letter === ' ' ? '0.3em' : '0' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h1>
    );
  }

  // For paragraphs, animate the whole text at once
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  );
};