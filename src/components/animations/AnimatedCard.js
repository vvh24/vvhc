import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};