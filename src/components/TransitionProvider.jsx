'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathname}
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'
      >
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[50px] sm:rounded-b-[150px] z-30'
          animate={{ height: '0vh' }}
          exit={{ height: '150vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[50px] sm:rounded-t-[150px] bottom-0 z-30'
          initial={{ height: '150vh' }}
          animate={{
            height: '0vh',
            transition: { delay: 2, duration: 0.8 },
          }}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <main className='h-[calc(100vh-6rem)]'>{children}</main>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
