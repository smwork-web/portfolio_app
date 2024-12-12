import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Neural Image Generator",
    description: "A state-of-the-art image generation model using diffusion techniques. Achieves high-quality results with efficient training.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    technologies: ["PyTorch", "Python", "React", "FastAPI"],
    link: "https://github.com/username/neural-image-gen"
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion system using transformer architecture. Supports multiple programming languages.",
    image: "https://images.unsplash.com/photo-1673845532890-a414f3f4d030",
    technologies: ["Transformers", "TypeScript", "Python", "Redis"],
    link: "https://github.com/username/ai-code-assistant"
  },
  {
    title: "Reinforcement Learning Framework",
    description: "A scalable framework for training and deploying RL agents in complex environments.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    technologies: ["Python", "TensorFlow", "Docker", "MongoDB"],
    link: "https://github.com/username/rl-framework"
  }
];