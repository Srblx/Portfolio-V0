import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-800/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À Propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 dark:text-white/70 max-w-3xl mx-auto text-lg">
            Développeur passionné créant des expériences numériques innovantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Card className="overflow-hidden aspect-[4/5] w-full max-w-md mx-auto" hoverEffect={false}>
                <img 
                  src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg" 
                  alt="Portrait du développeur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              </Card>
              <div className="absolute inset-0 border-2 border-primary-500/50 rounded-xl -translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent inline-block">
              Développeur Full Stack
            </h3>
            <p className="text-white/80 dark:text-white/80 mb-6 leading-relaxed">
              Avec plus de 5 ans d'expérience en développement web, je me spécialise dans la création 
              d'applications performantes qui résolvent des problèmes concrets.
            </p>

            <p className="text-white/80 dark:text-white/80 mb-6 leading-relaxed">
              Mon parcours dans la tech a débuté avec le développement front-end, puis s'est rapidement 
              étendu à l'ensemble de la stack. Je suis passionné par l'innovation technologique et son 
              potentiel pour transformer les industries.
            </p>

            <p className="text-white/80 dark:text-white/80 mb-8 leading-relaxed">
              Je m'engage à créer des solutions web efficaces, accessibles et éco-responsables 
              qui offrent une expérience utilisateur exceptionnelle tout en minimisant l'impact environnemental.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Localisation</h4>
                <p className="text-white/70">Paris, France</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Langues</h4>
                <p className="text-white/70">Français, Anglais</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Formation</h4>
                <p className="text-white/70">Master en Informatique</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Intérêts</h4>
                <p className="text-white/70">UX, DevOps, IA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;