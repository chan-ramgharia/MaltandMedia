import React from 'react';
import { motion } from 'framer-motion';

const WhiskeyGlass = () => {
  return (
    <div className="relative w-full h-full">
      {/* Glass body - 3D effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] md:w-[200px] md:h-[240px]"
        animate={{ rotateY: [0, 10, 0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glass top ellipse */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] md:w-[160px] md:h-[35px] rounded-full bg-cream-500 bg-opacity-50 backdrop-blur-sm border-2 border-white border-opacity-20"></div>

        {/* Glass body */}
        <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[120px] h-[180px] md:w-[140px] md:h-[200px] rounded-b-full bg-cream-300 bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-20 overflow-hidden">
          {/* Whiskey liquid */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-primary-600 bg-opacity-70">
            {/* Liquid surface sheen */}
            <div className="absolute top-0 left-0 w-full h-[10px] bg-secondary-400 bg-opacity-30"></div>
            
            {/* Bubbles */}
            <motion.div 
              className="absolute top-[40%] left-[20%] w-[8px] h-[8px] rounded-full bg-cream-300 bg-opacity-60"
              animate={{ y: [0, -20], opacity: [0.7, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.div 
              className="absolute top-[30%] left-[70%] w-[6px] h-[6px] rounded-full bg-cream-300 bg-opacity-60"
              animate={{ y: [0, -15], opacity: [0.7, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, delay: 1 }}
            />
            <motion.div 
              className="absolute top-[50%] left-[40%] w-[5px] h-[5px] rounded-full bg-cream-300 bg-opacity-60"
              animate={{ y: [0, -25], opacity: [0.7, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Glass stem */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30px] h-[20px] bg-cream-300 bg-opacity-30 backdrop-blur-sm border-2 border-white border-opacity-20"></div>

        {/* Glass base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-[10px] w-[70px] h-[20px] rounded-full bg-cream-300 bg-opacity-40 backdrop-blur-sm border-2 border-white border-opacity-20"></div>
        
        {/* Ice cube */}
        <motion.div 
          className="absolute top-[50px] left-[55px] w-[30px] h-[30px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-40"
          animate={{ rotate: [0, 10, -5, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Reflections */}
        <div className="absolute top-[40px] left-[40px] w-[20px] h-[80px] bg-white bg-opacity-10 rounded-full blur-sm transform rotate-45"></div>
      </motion.div>

      {/* Company name integrated into design */}
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-primary-900 font-display font-bold text-xl md:text-2xl tracking-wide">Malt<span className="text-secondary-600">&</span>Media</span>
        </motion.div>
      </div>
    </div>
  );
};

export default WhiskeyGlass;