import { motion } from 'framer-motion';
import { Technology } from '../../types';

interface Props {
  tech: Technology;
  index: number;
}

export const TechItem = ({ tech, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
    >
      <span className="text-3xl mb-3">{tech.icon}</span>
      <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
        {tech.name}
      </h3>
    </motion.div>
  );
};