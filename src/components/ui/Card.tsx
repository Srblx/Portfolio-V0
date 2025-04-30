import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-xl 
        bg-white/5 backdrop-blur-sm 
        border border-white/10
        shadow-lg
        dark:bg-dark-800/50 dark:border-dark-700/50
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;