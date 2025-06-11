import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, GlassWaterIcon } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative whiskey swirl pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary-500 blur-[100px] transform -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-600 blur-[80px] transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 bg-primary-800 text-secondary-500 text-sm font-medium rounded-full mb-6">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-cream-500">Crafted with Precision, <br />Served with Passion</h2>
            
            <p className="text-lg font-accent mb-8 text-cream-300 leading-relaxed">
              At MaltandMedia, we approach digital marketing with the same care, 
              precision, and patience as master distillers crafting a fine whiskey. 
              Each strategy is meticulously developed, each campaign thoughtfully executed, 
              and each result carefully measured.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Industry-specific expertise and insights",
                "Tailored strategies for your unique brand",
                "Data-driven approach with measurable results",
                "Collaborative process with transparent communication"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-secondary-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-cream-300">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#services" className="inline-block px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-medium rounded-lg transition-colors">
                Explore Our Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
              {/* 3D whiskey glass scene with animated elements */}
              <div className="absolute inset-0 rounded-2xl bg-primary-800 shadow-2xl overflow-hidden">
                {/* Glass texture overlay */}
                <div className="absolute inset-0 opacity-30 bg-whiskey-texture bg-cover bg-center mix-blend-overlay"></div>
                
                {/* Content inside the "glass" */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <GlassWaterIcon size={40} className="text-secondary-500 mb-6" />
                  <h3 className="font-display text-2xl font-semibold text-cream-500 mb-4">Our Philosophy</h3>
                  <p className="text-cream-300 leading-relaxed">
                    "The best marketing doesn't feel like marketing. Like a perfectly balanced whiskey, 
                    it creates an experience that resonates, lingers, and leaves a lasting impression."
                  </p>
                </div>
                
                {/* Animated whiskey swirl */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary-600/40 to-transparent rounded-b-2xl">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-secondary-400/20"
                    animate={{ 
                      y: [0, 5, 0],
                      scaleX: [1, 1.02, 0.98, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;