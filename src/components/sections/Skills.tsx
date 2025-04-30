import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants/data';
import { FaReact, FaNodeJs, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiSolidity, SiWeb3Dotjs, SiMinio } from 'react-icons/si';
import { TbBrandAstro } from 'react-icons/tb';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    case 'backend':
      return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
    case 'blockchain':
      return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30';
    case 'devops':
      return 'from-orange-500/20 to-red-500/20 border-orange-500/30';
    case 'other':
      return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30';
    default:
      return 'from-primary-500/20 to-secondary-500/20 border-primary-500/30';
  }
};

const getCategoryTextColor = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'from-blue-400 to-cyan-400';
    case 'backend':
      return 'from-purple-400 to-pink-400';
    case 'blockchain':
      return 'from-emerald-400 to-teal-400';
    case 'devops':
      return 'from-orange-400 to-red-400';
    case 'other':
      return 'from-yellow-400 to-amber-400';
    default:
      return 'from-primary-400 to-secondary-400';
  }
};

const getSkillIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'react':
      return <FaReact className="w-6 h-6" />;
    case 'typescript':
      return <SiTypescript className="w-6 h-6" />;
    case 'next.js':
      return <SiNextdotjs className="w-6 h-6" />;
    case 'node.js':
      return <FaNodeJs className="w-6 h-6" />;
    case 'nestjs':
      return <SiNestjs className="w-6 h-6" />;
    case 'astro':
      return <TbBrandAstro className="w-6 h-6" />;
    case 'solidity':
      return <SiSolidity className="w-6 h-6" />;
    case 'web3.js':
      return <SiWeb3Dotjs className="w-6 h-6" />;
    case 'docker':
      return <FaDocker className="w-6 h-6" />;
    case 'minio':
      return <SiMinio className="w-6 h-6" />;
    default:
      return <FaDatabase className="w-6 h-6" />;
  }
};

const SkillCard: React.FC<{ name: string; category: string }> = ({ name, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
      }}
      className={`relative p-6 bg-gradient-to-br ${getCategoryColor(category)} backdrop-blur-sm rounded-xl border border-white/5 hover:border-opacity-50 transition-all duration-300 group flex flex-col items-center gap-3`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(category)} rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
      <div className="relative z-10 text-3xl">
        {getSkillIcon(name)}
      </div>
      <span className={`relative text-sm font-medium bg-gradient-to-r ${getCategoryTextColor(category)} bg-clip-text text-transparent text-center`}>
        {name}
      </span>
    </motion.div>
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
    <section id='skills' className='py-24 bg-gradient-to-b from-dark-900/50 to-dark-900/80 relative overflow-hidden'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent opacity-50" />
      <div className='container mx-auto px-4 md:px-8 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
            Compétences Techniques
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full'></div>
          <p className='text-white/70 dark:text-white/70 max-w-3xl mx-auto text-lg'>
            Technologies et outils maîtrisés au fil de mon parcours
          </p>
        </motion.div>

        <div className='mb-12 flex flex-wrap justify-center gap-3'>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-[16px] transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${getCategoryTextColor(category.id)} text-white shadow-lg shadow-primary-500/20`
                  : 'bg-dark-800/50 text-white/70 hover:bg-dark-700/50 hover:text-white/90'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} name={skill.name} category={skill.category} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className='mt-16 text-center'
        >
          <h3 className='text-xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
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
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className='px-4 py-2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm text-white/80 rounded-full text-[16px] border border-primary-500/30 transition-all duration-300'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
