'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef();
  const text = 'Say Hello';

  const sendEmail = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);

    console.log(
      // process.env.NEXT_PUBLIC_SERVICE_ID,
      // process.env.NEXT_PUBLIC_TEMPLATE_ID,
      process.env.NEXT_PUPLIC_AUTH_KEY
    );

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUPLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSuccess(true);
        },
        (error) => {
          setIsError(true);
          formRef.current.reset();
        }
      );
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className='h-full flex flex-col lg:flex-row wrapper'>
        <div className='h-1/2 lg:h-full lg:w-1/2 flex-center text-6xl'>
          <div className=''>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👨‍💻
          </div>
        </div>

        <form
          className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
          ref={formRef}
          onSubmit={sendEmail}
        >
          <span>Dear Shefcodev,</span>
          <textarea
            rows={6}
            className='bg-transparent border-b-2 border-black outline-none resize-none'
            name='user_message'
          ></textarea>
          <span>My email address is</span>
          <input
            type='text'
            className='bg-transparent border-b-2 border-black outline-none'
            name='user_email'
          ></input>
          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
            Send
          </button>
          {isSuccess ? (
            <span className='text-green-600 font-semibold'>
              Your message have been sent successfully!
            </span>
          ) : isError ? (
            <span className='text-red-600 font-semibold'>
              Something went wrong!
            </span>
          ) : (
            ''
          )}
        </form>
      </section>
    </motion.div>
  );
};

export default ContactPage;
