import React from 'react';
import Image from 'next/image'

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header style={{ backgroundColor: 'white' }} className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href='/experience' className="mr-5 hover:text-gray-900">Experience</a>
            <a href='/project' className="mr-5 hover:text-gray-900">Projects</a>
            <a href='/research' className="mr-5 hover:text-gray-900">Research</a>
            <a href='/blogs' className="mr-5 hover:text-gray-900">Blog</a>
            <a href='/gallery' className="hover:text-gray-900">Gallery</a>
            </nav>
            <a href='/' className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image src="/RitikMehta.jpg" height={10} width={40} style={{borderRadius: '50%', overflow: 'hidden', border: '2px solid black', display: 'inline-block'}} alt='logo' />
            <span className="ml-3 text-xl">Ritik Mehta</span>
            </a>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <a href='/contact'>
              Contact Me 
              </a>
            </button>
            </div>
        </div>
    </header>

  );
};

export default Navbar;