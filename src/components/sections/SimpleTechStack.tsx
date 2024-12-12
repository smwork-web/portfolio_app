import { motion } from 'framer-motion';
import { TechItem } from '../ui/TechItem';
import { mainTechnologies } from '../../data/main-technologies';

export const SimpleTechStack = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Core Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {mainTechnologies.map((tech, index) => (
            <TechItem key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};