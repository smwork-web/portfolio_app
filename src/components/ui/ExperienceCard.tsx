import { motion } from 'framer-motion';
import { Experience } from '../../types';

interface Props {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: Props) => {
  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.3
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg" />
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
          <div className="text-blue-400">{experience.company}</div>
          <div className="text-white/60">{experience.period}</div>
        </div>
        <p className="text-white/80 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={techVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};