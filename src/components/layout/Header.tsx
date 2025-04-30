import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/data';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'py-3 bg-dark-800/80 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'}
      `}
    >
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a 
          href="#home" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"
        >
          dev<span className="text-white dark:text-white">.portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li key={link.id} whileHover={{ y: -2 }}>
                <a 
                  href={link.path} 
                  className="text-white/80 hover:text-white dark:text-white/80 dark:hover:text-white text-sm transition-colors"
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            className="ml-4 text-white p-1" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-md md:hidden"
          >
            <div className="flex justify-end p-4">
              <button 
                className="text-white p-1" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full pb-20 gap-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * parseInt(link.id) }}
                >
                  <a 
                    href={link.path} 
                    className="text-white text-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;