import { motion } from 'framer-motion';
import { techStacks } from '../../data/tech-stack';
import { TechCard } from '../ui/TechCard';

export const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 max-w-4xl mx-auto"
        >
          {techStacks.map((stack, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6 text-white/90">{stack.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stack.items.map((item, itemIndex) => (
                  <TechCard key={itemIndex} tech={item} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};