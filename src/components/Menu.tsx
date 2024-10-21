import React from 'react';

import Button from '../components/Button';

import img4 from '../asets/img4.jpg';
import img5 from '../asets/img5.jpg';
import img6 from '../asets/img6.jpg';



const specials = [
  {
    name: "Greek Salad",
    price: "$10.00",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: img4, // Updated image URL for Greek Salad
  },
  {
    name: "Bruschetta",
    price: "$6.79",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: img5 // Updated image URL for Bruschetta
  },
  {
    name: "Lemon Dessert",
    price: "$8.50",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: img6 // Updated image URL for Lemon Dessert
  },
];

const Menu = () => {
  return (
    <section className="py-20" id="menu">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">This week specials!</h2>
          <div className="flex justify-around flex-wrap">
            {specials.map((item, index) => (
              <div key={index} className="border rounded-lg shadow-lg p-4 m-4 md:w-72 bg-white flex flex-col justify-between w-full">
                <div className="">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <h3 className="text-xl font-semibold mt-2">{item.name} {item.price}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <Button label="Order a delivery"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
