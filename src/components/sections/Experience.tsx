import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../constants/data';
import Card from '../ui/Card';

const ExperienceCard: React.FC<{ experience: any; index: number }> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="relative p-6 h-full">
        <div className="mb-4">
          <span className="text-xs text-primary-400">{experience.period}</span>
          <h3 className="text-xl font-bold mt-1">{experience.role}</h3>
          <p className="text-white/70">{experience.company}</p>
        </div>
        <p className="text-white/80 text-sm mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {experience.technologies.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-dark-700/50 text-white/80 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
            Mon parcours professionnel dans l'industrie technologique
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500/70 via-primary-700/40 to-primary-900/20"></div>
          
          <div className="space-y-12 md:space-y-0">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="md:grid md:grid-cols-2 md:gap-8 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-800 z-10"></div>
                
                {index % 2 === 0 ? (
                  <>
                    <div className="md:pr-12 mb-8 md:mb-16">
                      <ExperienceCard experience={experience} index={index} />
                    </div>
                    <div className="md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:pr-12 hidden md:block"></div>
                    <div className="md:pl-12 mb-8 md:mb-16">
                      <ExperienceCard experience={experience} index={index} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Éducation</h3>
          <Card className="inline-block p-6 max-w-lg mx-auto">
            <div className="mb-2">
              <h4 className="text-lg font-bold">Simplon X Dev-id</h4>
              <p className="text-primary-400 text-sm">Simplon, Marseille</p>
            </div>
            <p className="text-white/90 text-sm">
              Spécialisé la formation des métiers de la tech.
              <br />
              Développeur web et web mobile / Concepteur développeur d'applications 
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;