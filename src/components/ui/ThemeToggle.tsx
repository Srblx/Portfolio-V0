import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 p-2 rounded-full bg-dark-800/50 backdrop-blur-sm text-white dark:bg-dark-700/50 hover:bg-dark-700/70 dark:hover:bg-dark-600/70"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon size={20} className="text-primary-300" />
        ) : (
          <Sun size={20} className="text-secondary-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;