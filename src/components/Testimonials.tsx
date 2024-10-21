import React from 'react';

const testimonialsData = [
  {
    name: 'Anthony',
    rating: '4.5 / 5',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFudGhvbnl8ZW58MHx8fHwxNjYyMjY5MjY0&ixlib=rb-1.2.1&q=80&w=400', // Example image
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.',
  },
  {
    name: 'Mary',
    rating: '4 / 5',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', // Example image
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.',
  },
  {
    name: 'John',
    rating: '4.5 / 5',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxzYXJhaHxlbnwwfHx8fDE2NjIyNjkyNjQ&ixlib=rb-1.2.1&q=80&w=400', // Example image
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.',
  },
  {
    name: 'Sarah',
    rating: '5 / 5',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxzYXJhaHxlbnwwfHx8fDE2NjIyNjkyNjQ&ixlib=rb-1.2.1&q=80&w=400', // Example image
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Testimonials</h2>
        <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:max-w-xs w-full">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
              <p className="text-yellow-500 text-center">{testimonial.rating}</p>
              <p className="text-gray-600 text-center">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
