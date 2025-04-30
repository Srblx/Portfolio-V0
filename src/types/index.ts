export interface NavLink {
  id: string;
  title: string;
  path: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: "frontend" | "backend" | "blockchain" | "devops" | "other";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export type ThemeMode = "dark" | "light";