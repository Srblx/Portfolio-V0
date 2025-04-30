import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants/data';
import Card from '../ui/Card';

const SkillBar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-sm font-medium text-white'>{name}</span>
      </div>
      <div className='w-full bg-dark-700 rounded-full h-2.5'>
        <motion.div
          className='bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full'
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'devops', label: 'DevOps' },
    { id: 'other', label: 'Autres' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id='skills' className='py-24 bg-dark-900/50'>
      <div className='container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Compétences Techniques
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6'></div>
          <p className='text-white/70 dark:text-white/70 max-w-3xl mx-auto text-lg'>
            Technologies et outils maîtrisés au fil de mon parcours
          </p>
        </motion.div>

        <div className='mb-12 flex flex-wrap justify-center gap-2'>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-[16px] transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700/50 text-white/70 hover:bg-dark-600/50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <Card className='p-6'>
            {filteredSkills
              .slice(0, Math.ceil(filteredSkills.length / 2))
              .map((skill) => (
                <SkillBar key={skill.id} name={skill.name} />
              ))}
          </Card>
          <Card className='p-6'>
            {filteredSkills
              .slice(Math.ceil(filteredSkills.length / 2))
              .map((skill) => (
                <SkillBar key={skill.id} name={skill.name} />
              ))}
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='mt-16 text-center'
        >
          <h3 className='text-xl font-semibold mb-4'>
            Compétences Additionnelles
          </h3>
          <div className='flex flex-wrap justify-center gap-3'>
            {[
              'Éco-conception',
              'Optimisation Performance',
              'SEO',
              'Méthodologie Agile',
              'CI/CD',
              'Tests',
              'Documentation',
              'UI/UX Design',
              'Design Responsive',
            ].map((skill, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-dark-800/50 text-white/80 rounded-full text-[16px]'
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
