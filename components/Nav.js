import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-10'>
      <Link href='/'>
        <button className='text-lg font-medium'>Postify</button>
      </Link>
      <ul className='flex items-center gap-10'>
        <Link href={"/auth/login"} >
        <p className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</p>  
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
