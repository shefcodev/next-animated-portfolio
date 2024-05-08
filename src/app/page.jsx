'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className='flex flex-col h-full wrapper lg:flex-row'>
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center gap-8'>
          <h1 className='text-4xl font-bold md:text-6xl'>
            Create Digital Experiences, Designing Tomorrow.
          </h1>
          <p className='md:text-xl'>
            Welcome to my digital canvas, where innovations amd creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflects
            my commitment to excellence.
          </p>
          <div className='flex gap-4'>
            <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
              View My Work
            </button>
            <button className='p-4 rounded-lg ring-1 ring-black'>
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
3;
