import React from 'react';
import Button from './Button'; // Import the Button component

import img1 from '../asets/img1.jpg'

const Header = () => {
  return (
    <header className="bg-blue-950 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:max-w-lg mb-4 md:mb-0">
            <h2 className="text-5xl font-bold text-white">Little Lemon</h2>
            <p className="text-gray-400 text-base py-4">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button label="Click Me" />
          </div>
          <img src={img1} alt="Description of the image" className="w-full h-auto max-w-72 max-h-52 rounded-md object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
