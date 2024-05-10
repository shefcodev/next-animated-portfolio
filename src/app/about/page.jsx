'use client';

import { motion } from 'framer-motion';
import { skills } from '../../constants';

const AboutPage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className='h-full overflow-y-scroll'>
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48'>
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              Welcome to my digital canvas, where innovations and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflects
              my commitment to excellence. Welcome to my digital canvas, where
              innovations amd creativity converge. With a keen eye for
              aesthetics and a mastery of code, my portfolio showcases a diverse
              collection of projects that reflects my commitment to excellence.
            </p>
            <span className='italic'>
              Welcome to my digital canvas, where innovations amd creativity
              converge.
            </span>
            <div className='self-end'>
              <p className='text-2xl font-thin italic'>_shefco_</p>
            </div>
            <button className='w-fit border-2 border-gray-500 px-3 py-5 rounded-full font-normal'>
              |
            </button>
          </div>

          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>SKILLS</h1>
            <div className='flex flex-wrap gap-4'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
                >
                  {skill}
                </div>
              ))}
            </div>
            <button className='w-fit border-2 border-gray-500 px-3 py-5 rounded-full font-normal'>
              |
            </button>
          </div>

          <div className='flex flex-col gap-12 justify-center pb-48'>
            <h1 className='font-bold text-2xl'>EXPERIENCE</h1>

            <div>
              <div className='flex justify-between'>
                <div className='w-1/3'>
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit'>
                    Senior JavaScript Engineer
                  </div>
                  <div className='p-3 text-sm italic'>
                    My current employment way better than the position before
                  </div>
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    2024 - present
                  </div>
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Apple
                  </div>
                </div>

                <div className='w-1/6 flex-center'>
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                <div className='w-1/3'></div>
              </div>

              <div className='flex justify-between'>
                <div className='w-1/3'></div>

                <div className='w-1/6 flex-center'>
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit'>
                    Senior JavaScript Engineer
                  </div>
                  <div className='p-3 text-sm italic'>
                    My current employment way better than the position before
                  </div>
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    2024 - present
                  </div>
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Apple
                  </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='w-1/3'>
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit'>
                    Senior JavaScript Engineer
                  </div>
                  <div className='p-3 text-sm italic'>
                    My current employment way better than the position before
                  </div>
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    2024 - present
                  </div>
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Apple
                  </div>
                </div>

                <div className='w-1/6 flex-center'>
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                <div className='w-1/3'></div>
              </div>
            </div>
          </div>
        </div>
        <div className=''></div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
