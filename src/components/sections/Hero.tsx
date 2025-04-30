import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-900/30" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-dark-900 to-transparent opacity-40" />
      
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-4 md:px-8 z-10 flex flex-col items-center text-center pt-16 md:pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="block">Développeur Full Stack</span>
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Blockchain
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              Pour une expérience numérique innovante et sécurisée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 mb-16"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir mes projets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Me contacter
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6"
        >
          <a 
            href="https://github.com/Srblx" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Profil GitHub"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/alexis-s-9b080a252/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Profil LinkedIn"
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: [0, 10, 0, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;