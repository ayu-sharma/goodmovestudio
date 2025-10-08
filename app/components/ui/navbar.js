import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="py-2 px-6">
      <Image
        src="/images/logo.png"
        alt="Company Logo"
        className='cursor-pointer'
        width={180}
        height={50}
      />
    </nav>
  );
};

export default Navbar;

