import React from 'react';
import { motion } from 'framer-motion';

const DragHandle = ({ onDragEnd }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-16 cursor-grab"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.05}
      onDragEnd={onDragEnd}
      dragListener 
    >
      <div className="w-10 h-1.5 bg-gray-600 rounded-full mx-auto mt-4"></div>
    </motion.div>
  );
};

export default DragHandle;