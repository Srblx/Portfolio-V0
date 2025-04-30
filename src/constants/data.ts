import { NavLink, Skill, Project, Experience } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Accueil', path: '#home' },
  { id: 'about', title: 'À propos', path: '#about' },
  { id: 'skills', title: 'Compétences', path: '#skills' },
  { id: 'projects', title: 'Projets', path: '#projects' },
  { id: 'experience', title: 'Expérience', path: '#experience' },
  { id: 'contact', title: 'Contact', path: '#contact' },
];

export const skills: Skill[] = [
  { id: '1', name: 'JavaScript', level: 0, category: 'frontend' },
  { id: '2', name: 'TypeScript', level: 0, category: 'frontend' },
  { id: '3', name: 'React', level: 0, category: 'frontend' },
  { id: '4', name: 'Next.js', level: 0, category: 'frontend' },
  { id: '5', name: 'Node.js', level: 0, category: 'backend' },
  { id: '6', name: 'NestJS', level: 0, category: 'backend' },
  { id: '7', name: 'Astro', level: 0, category: 'frontend' },
  { id: '8', name: 'GraphQL', level: 0, category: 'backend' },
  { id: '9', name: 'Solidity', level: 0, category: 'blockchain' },
  { id: '10', name: 'Web3.js', level: 0, category: 'blockchain' },
  { id: '11', name: 'Docker', level: 0, category: 'devops' },
  { id: '12', name: 'Minio', level: 0, category: 'other' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'WiseChain',
    description:
      "Plateforme d'éducation financière qui simplifie l'apprentissage de l'investissement. Grâce à des outils interactifs et des analyses en temps réel, WiseChain guide les utilisateurs dans leur parcours d'investissement, dans divers domaines.",
    tags: ['Next', 'Node.js', 'Mysql', 'Docker', 'Minio'],
    image: '/src/assets/svg/logo.svg',
    demoLink: 'https://wisechain.fr',
    featured: true,
  },
  {
    id: '2',
    title: 'Usine à Zombie',
    description:
      "Une DApp innovante de collection et de combat de zombies. Les joueurs peuvent collecter des cartes de zombies uniques, les fusionner pour créer des créatures plus puissantes, et participer à des combats stratégiques pour construire leur arsenal d'armes.",
    tags: ['Solidity', 'Web3.js', 'Node.js', 'Mysql', 'Docker', 'Minio'],
    image: '/src/assets/img/usine-zombie.png',
    codeLink: 'https://github.com/Srblx/CryptZombie-Smart-Contract',
    featured: true,
  },
  {
    id: '3',
    title: 'Azure escape',
    description:
      'Azure Escape est un jeu adressé aux 13-18 ans qui permet de former aux bonnes pratiques de gestion de crise de manière ludique. Avec un plateforme pour administrer les évènements, les participants et les résultats.',
    tags: ['React', 'Nest', 'Docker', 'SwiftUI'],
    image: '/src/assets/img/azure.png',
    demoLink: 'https://team-10-alert.alerte4sud.fr/',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: '0',
    role: 'Développeur Full Stack',
    company: 'Dev-id',
    period: '2024 - à présent',
    description:
      "Développement d'applications web complètes. Conception et mise en place d'architectures scalables, implémentation de fonctionnalités complexes et optimisation des performances. Collaboration étroite avec l'équipe produit pour livrer des solutions robustes.",
    technologies: ['React','Nest', 'Next.js', 'TypeScript', 'Docker'],
  },
  {
    id: '1',
    role: 'Développeur Backend',
    company: 'Dev-id',
    period: '2024 - 2025',
    description:
      "Développement et maintenance d'APIs RESTful avec NestJS, implémentation de microservices et optimisation des performances. Gestion de bases de données relationnelles et NoSQL, mise en place de conteneurisation avec Docker pour assurer la scalabilité des applications.",
    technologies: ['Nest', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL','MongoDB', 'MySql', 'Minio', 'Docker'],
  },
  {
    id: '2',
    role: " Développeur Frontend",
    company: 'Alert4Sud ( Hackathon)',
    period: '2024',
    description:
      "Création D'une solution pour sensibiliser les jeunes à la gestion de crise de manière ludique.",
    technologies: ['React', 'Nest', 'Docker', 'SwiftUI'],
  },
  {
    id: '3',
    role: 'Développeur Full Stack',
    company: 'AI4Sud (Hackathon)',
    period: '2024',
    description:
      "Création d'une solution evaluer la qualité de l'air dans les ports maritimes afin de proposer des solutions pour améliorer la qualité de l'air.",
    technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'ChatGPT', 'Ollama'],
  },
  {
    id: '4',
    role: 'Développeur Frontend',
    company: 'Dev-id',
    period: '2024 - 2025',
    description:
      "Développement d'interfaces utilisateur modernes avec React et TypeScript, implémentation de composants réutilisables et optimisation des performances front-end. Mise en place de tests unitaires et d'intégration, et collaboration étroite avec l'équipe UX/UI pour créer des expériences utilisateur exceptionnelles.",
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker'],
  },
  {
    id: '3',
    role: 'Développeur Full Stack',
    company: 'Les amis du vieux miramas',
    period: '2023',
    description:
      "Création d'interfaces utilisateur réactives et optimisation des performances front-end et back-end.",
    technologies: ['Symfony', 'Php', 'Tailwind'],
  },
];
