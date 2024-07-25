"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
interface Navprops {

}

const Navbar: React.FC<Navprops> = () => {

  

  return <header className="w-full bg-green-500 text-white p-4 fixed top-0 left-0 z-50">
  <nav className="container mx-auto flex justify-between">
    <div className="flex items-center space-x-4">
      <Link href="/" className="text-xl font-bold">
        Home
      </Link>
      <Link href="/users" className="text-xl">
        View Users
      </Link>
      <Link href="/users/add" className="text-xl">
        Add User
      </Link>
      <Link href="/partner" className="text-xl">
        Partner
      </Link>
    </div>
  </nav>
</header>;
};

export default Navbar;
