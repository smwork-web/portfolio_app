import { motion } from 'framer-motion';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <div className="relative h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-white/80 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </motion.a>
          )}
          <motion.a
            href={project.link?.replace(/\/$/, '') + '/github'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:border-blue-500/50 transition-colors"
          >
            <Github className="w-4 h-4" />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};