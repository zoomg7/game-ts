import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>About Us</Link>
      <Link href={'/'}>Contact Us</Link>
    </nav>
  );
};

export default Nav;