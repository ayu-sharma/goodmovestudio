import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="py-2 px-6 bg-transparent w-60 md:w-full">
      <Link href="/">
        <Image src="/images/logo.png" alt="Company Logo" width={180} height={50} />
      </Link>
    </nav>
  );
};

export default Navbar;
