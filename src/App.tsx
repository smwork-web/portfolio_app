import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Experience } from './components/sections/Experience';
import { SimpleTechStack } from './components/sections/SimpleTechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <Background />
      <Navbar />
      <main className="min-h-screen text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
          className="container mx-auto px-4 pt-32"
        >
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ML & Generative AI Engineer
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Crafting the future through artificial intelligence and machine learning
            </p>
          </div>
          <SimpleTechStack />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      </main>
    </>
  );
}

export default App;