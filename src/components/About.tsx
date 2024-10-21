import React from 'react';
import img2 from '../asets/img2.jpg'; // Import the new image
import img3 from '../asets/img3.jpg'; // Import the new image

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:max-w-md mb-4 md:mb-0 text-left">
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="text-gray-600 text-base py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="md:flex-col md:flex-row gap-4 relative size-full max-w-md hidden md:flex"> 
          <img src={img2} alt="About Image" className="w-full h-auto max-w-xs rounded-md object-cover absolute -top-4 right-0" />
          <img src={img3} alt="About Image" className="w-full h-auto max-w-xs rounded-md object-cover absolute -bottom-4 left-0" />
        </div>
      </div>
    </section>
  );
};

export default About;
