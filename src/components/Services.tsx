import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenLine, LineChart, Palette, Globe, Layers, GlassWater as GlassWine } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Content Creation",
    description: "Compelling storytelling and engaging content that captures your brand's unique voice and resonates with your audience.",
    icon: PenLine,
    delay: 0.1
  },
  {
    id: 2,
    title: "Ads Optimization",
    description: "Maximize your ROI with data-driven ad campaigns tailored to your target audience and business goals.",
    icon: LineChart,
    delay: 0.2
  },
  {
    id: 3,
    title: "Branding & Identity",
    description: "Distinctive visual language and messaging that sets you apart and builds lasting connections with your customers.",
    icon: Palette,
    delay: 0.3
  },
  {
    id: 4,
    title: "Website Design",
    description: "Custom, responsive websites that combine stunning aesthetics with seamless functionality and optimal user experience.",
    icon: Globe,
    delay: 0.4
  },
  {
    id: 5,
    title: "Social Media Management",
    description: "Comprehensive management of your social media presence to grow your audience, boost engagement, and strengthen your brand online.",
    icon: Layers,
    delay: 0.5
  },
  {
    id: 6,
    title: "Automation Services",
    description: "Streamline your workflows and marketing processes with cutting-edge automation solutions for efficiency and scalability.",
    icon: GlassWine,
    delay: 0.6
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-cream-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream-500 to-transparent z-10"></div>
      
      {/* Background whiskey glass pattern - very subtle */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5">
        <GlassWine size={400} className="text-primary-900" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 bg-secondary-500 bg-opacity-20 text-primary-900 text-sm font-medium rounded-full">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6"
          >
            Services That Elevate Your Brand
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-700 font-accent"
          >
            Like a perfectly aged whiskey, we blend creativity and strategy to create marketing solutions with character, depth, and impact.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const Icon = service.icon;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: service.delay
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cream-300"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-16 h-16 rounded-lg bg-primary-600 bg-opacity-10 flex items-center justify-center mb-6">
        <Icon size={32} className="text-primary-900" />
      </div>
      <h3 className="text-xl font-display font-semibold text-primary-900 mb-4">{service.title}</h3>
      <p className="text-primary-700">{service.description}</p>
    </motion.div>
  );
};

export default Services;