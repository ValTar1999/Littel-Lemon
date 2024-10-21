import React, { useState } from 'react';

import Logo from '../asets/logo.e68246686f716ff6e5d8.png';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between items-center p-4 text-white container mx-auto max-w-7xl">
        <img className="w-auto h-20 object-contain" src={Logo} alt="" />
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle mobile menu"> {/* Mobile menu button */}
          {isOpen ? ( // Conditional rendering for open/close SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <ul 
          role="menu"
          className={`absolute left-0 top-24 w-full bg-gray-800 text-white mt-2 rounded shadow-md ${isOpen ? 'block' : 'hidden'} md:inline-flex md:static md:justify-end md:space-x-4 md:bg-transparent md:shadow-none`} 
        >
          <li role="none"><a href="/" role="menuitem" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a></li> {/* Updated for smooth scroll */}
          <li role="none"><a href="#about" role="menuitem" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a></li> {/* Updated for smooth scroll */}
          <li role="none"><a href="#menu" role="menuitem" onClick={(e) => { e.preventDefault(); handleScroll('menu'); }}>Menu</a></li> {/* Updated for smooth scroll */}
          <li role="none"><a href="/reservation-form" role="menuitem">Reservations</a></li> {/* Updated for semantics */}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu; // Ensure this is exported
