import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Loader from './components/layout/Loader.jsx';
import CustomCursor from './components/shared/CustomCursor.jsx';
import ScrollProgress from './components/shared/ScrollProgress.jsx';
import DeveloperPortal from './components/shared/DeveloperPortal.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Projects from './sections/Projects.jsx';
import Sectors from './sections/Sectors.jsx';
import Process from './sections/Process.jsx';
import Team from './sections/Team.jsx';
import TechStack from './sections/TechStack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import useLenis from './hooks/useLenis.js';
import useGsapReveals from './hooks/useGsapReveals.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();
  useGsapReveals();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void text-white selection:bg-ion/30 selection:text-white">
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>
      <CustomCursor />
      <ScrollProgress />
      <DeveloperPortal />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Process />
        <Projects />
        <Team />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </motion.main>
    </div>
  );
}
