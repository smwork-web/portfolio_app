import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { ExperienceCard } from '../ui/ExperienceCard';
import { NeuralNetwork } from '../effects/NeuralNetwork';

export const Experience = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <NeuralNetwork />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container relative mx-auto px-4 z-10"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};