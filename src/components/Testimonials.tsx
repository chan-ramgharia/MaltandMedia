import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Glasses as GlassFull, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alexandra Rivera",
    title: "CEO, Horizon Tech",
    quote: "MaltandMedia transformed our digital presence completely. Their strategic approach to content and branding helped us stand out in a crowded tech market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Marketing Director, Artisan Foods",
    quote: "Working with the MaltandMedia team feels like having premium marketing expertise on tap. Their branding work gave us the distinctive edge we needed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Founder, Boutique Retreats",
    quote: "The website they designed for us captures the essence of our luxury brand perfectly. The attention to detail and customer service is exceptional.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-cream-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary-900 to-transparent"></div>
      
      <div className="absolute top-20 left-10 opacity-10">
        <GlassFull size={200} className="text-primary-900" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-secondary-500 bg-opacity-20 text-primary-900 text-sm font-medium rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-700 font-accent">
            Hear from businesses that have experienced the MaltandMedia difference.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
              inView={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index, inView }: { testimonial: any, index: number, inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-white rounded-xl shadow-lg p-8 border border-cream-300 relative"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Quote size={32} className="absolute top-6 right-6 text-secondary-500 opacity-30" />
      
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-secondary-500 text-secondary-500" />
        ))}
      </div>
      
      <p className="text-primary-700 mb-6 font-accent leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-medium">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-display font-semibold text-primary-900">{testimonial.name}</h4>
          <p className="text-sm text-primary-700">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;