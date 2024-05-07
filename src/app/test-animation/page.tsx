'use client';

import { motion } from 'framer-motion';

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: { delay: 5, duration: 7 },
    },
    variant2: {
      x: 100,
      y: -300,
      rotate: 90,
    },
  };

  return (
    <div className='flex-center h-full'>
      <motion.div
        className='w-96 h-96 bg-red-400 rounded'
        // initial={{ x: -100 }}
        variants={variants}
        animate='variant1'
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
