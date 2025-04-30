import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../constants/data';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'Next', label: 'Next' },
    { id: 'React', label: 'React' },
    { id: 'Nest', label: 'Nest' },
    { id: 'Web3.js', label: 'Web3' },
    { id: 'Solidity', label: 'Blockchain' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 bg-dark-800/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projets en Vedette
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
            Une vitrine de mes travaux récents et projets personnels
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700/50 text-white/70 hover:bg-dark-600/50'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`grid gap-8 max-w-6xl mx-auto ${
              filteredProjects.length === 1 
                ? 'grid-cols-1 max-w-2xl' 
                : filteredProjects.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark-900/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        {project.demoLink && (
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500 transition-colors duration-200"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.codeLink && (
                          <a 
                            href={project.codeLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500 transition-colors duration-200"
                            aria-label="View source code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary-500 text-xs px-2 py-1 rounded text-white">
                        En Vedette
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-dark-700/50 text-white/80 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;