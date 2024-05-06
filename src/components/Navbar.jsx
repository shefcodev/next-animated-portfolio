'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { links, socials } from '@/constants';
import NavLink from './NavLink';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevValue) => !prevValue);
  };

  return (
    <div className='h-full flex-between wrapper text-lg'>
      {/* logo */}
      <div className='flex md:hidden lg:flex w-1/3'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex-center'
        >
          <span className='text-white mr-1'>shefco</span>
          <span className='w-12 h-8 rounded bg-white text-black flex-center'>
            .dev
          </span>
        </Link>
      </div>
      {/* menu */}
      <div className='md:hidden'>
        <button
          className='w-10 h-8 flex flex-col justify-between relative z-50'
          onClick={toggleMenu}
        >
          {new Array(3).fill(1).map((_, index) => (
            <div
              key={index}
              className={`w-10 h-1 rounded ${
                openMenu ? 'bg-white' : 'bg-black'
              }`}
            ></div>
          ))}
        </button>
        {/* menu list */}
        {openMenu && (
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
            {links.map(({ url, title }, index) => (
              <Link key={index} href={url}>
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* responsive link */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        {links.map(({ url, title }, index) => (
          <NavLink key={index} url={url} title={title} />
        ))}
      </div>
      {/* responsive links */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        {socials.map(({ src, alt }, index) => (
          <Link key={index} href='/'>
            <Image src={src} alt={alt} width={24} height={24} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
