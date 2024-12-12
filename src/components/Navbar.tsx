import { motion } from 'framer-motion';
import { Brain, Code, Home, Layers, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Layers, label: 'Experience', href: '#experience' },
  { icon: Code, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height && id) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4"
    >
      <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10">
        <Brain className="h-6 w-6 text-blue-500" />
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 transition-colors ${
              activeSection === item.href.slice(1)
                ? 'text-blue-400'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};