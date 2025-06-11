import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WhiskeyGlass from './WhiskeyGlass';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cream-300 bg-opacity-30 z-0">
        <div className="absolute inset-0 opacity-5 bg-whiskey-texture bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-6rem)] py-12">
          
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-900">
                <span className="block">Distilling</span>
                <span className="block">Your Brand's</span>
                <span className="block">Essence</span>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl font-accent text-primary-700 max-w-xl leading-relaxed">
                Premium digital marketing solutions crafted with precision, 
                character, and depth — just like a fine whiskey.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#services" className="btn-primary">
                  <span>Our Services</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <WhiskeyGlass />
              <motion.div
                className="absolute top-[-10%] left-[15%] w-20 h-20 rounded-full bg-primary-600 bg-opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-[10%] right-[5%] w-32 h-32 rounded-full bg-secondary-500 bg-opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream-500 to-transparent"></div>
      <div className="absolute -bottom-5 left-0 w-full h-12">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cream-500"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;