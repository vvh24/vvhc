import React from 'react';
import { motion } from 'framer-motion';

export const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-1">
        <span>{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="progress" 
          initial={{ width: "0%" }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          data-percent={`${percentage}%`}
        />
      </div>
    </div>
  );
};