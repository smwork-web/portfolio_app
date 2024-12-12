import { motion } from 'framer-motion';

interface Props {
  tech: {
    name: string;
    icon: string;
    proficiency: number;
  };
}

export const TechCard = ({ tech }: Props) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      className="p-4 rounded-lg bg-white/5 border border-white/10 transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{tech.icon}</span>
        <h4 className="text-lg font-medium text-white">{tech.name}</h4>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${tech.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <div className="mt-2 text-right text-sm text-white/60">
        {tech.proficiency}%
      </div>
    </motion.div>
  );
};