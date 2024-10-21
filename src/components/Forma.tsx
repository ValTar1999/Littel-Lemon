import React, { useState } from 'react';

import Button from './Button';


const Form = () => { // New Reservation component
  const [name, setName] = useState('John Doe'); // State for name with default value
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // State for date with default value
  const [time, setTime] = useState('12:00'); // State for time with default value
  const [submitted, setSubmitted] = useState(false); // New state to track form submission
  const [fadeOut, setFadeOut] = useState(false); // State for fade out effect

  const handleSubmit = (e: React.FormEvent) => { // Added handleSubmit function
    e.preventDefault();
    setFadeOut(true); // Start fade out
    setTimeout(() => {
      setSubmitted(true); // Set submitted to true after fade out
    }, 300); // Match this duration with the CSS transition duration
    console.log({ name, date, time });
  };

  return (
    <div className="p-4 container max-w-xl mx-auto h-dvh flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold">Your Reservation</h2>
      {!submitted ? ( // Conditional rendering of the form
        <form className={`mt-4 space-y-4 w-full transition-opacity duration-300 ease-in ${fadeOut ? 'opacity-0' : 'opacity-100'}`} onSubmit={handleSubmit}> {/* Added transition classes */}
          <div>
            <label className="block mb-2" htmlFor="name">Name:</label> {/* Добавлен htmlFor для доступности */}
            <input 
              id="name" // Добавлен id для соответствия с htmlFor
              type="text" 
              className="border p-2 w-full rounded" 
              value={name} // Controlled input
              onChange={(e) => setName(e.target.value)} // Update state on change
              required // Добавлено требование для заполнения поля
            />
          </div>
          <div className="">
            <label className="block mb-2" htmlFor="date">Date:</label> {/* Добавлен htmlFor для доступности */}
            <input 
              id="date" // Добавлен id для соответствия с htmlFor
              type="date" 
              className="border p-2 w-full rounded" 
              value={date} // Controlled input
              onChange={(e) => setDate(e.target.value)} // Update state on change
              required // Добавлено требование для заполнения поля
            />
          </div>
          <div className="">
            <label className="block mb-2" htmlFor="time">Time:</label> {/* Добавлен htmlFor для доступности */}
            <input 
              id="time" // Добавлен id для соответствия с htmlFor
              type="time" 
              className="border p-2 w-full rounded" 
              value={time} // Controlled input
              onChange={(e) => setTime(e.target.value)} // Update state on change
              required // Добавлено требование для заполнения поля
            />
          </div>
          <Button label="Reserve" type="submit"/> {/* Added type="submit" to Button */}
        </form>
      ) : ( // Render the card if submitted
        <div className="mt-4 p-4 border rounded shadow-lg bg-white transition-opacity duration-300 ease-in opacity-100"> {/* Added transition classes */}
          <h3 className="font-bold text-lg">Reservation Details</h3>
          <p className="mt-2"><strong>Name:</strong> {name}</p>
          <p className="mt-1"><strong>Date:</strong> {date}</p>
          <p className="mt-1"><strong>Time:</strong> {time}</p>
        </div>
      )}
    </div>
  );
};

export default Form; // Export the new component
