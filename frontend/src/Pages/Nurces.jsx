import React from 'react';
import Nurse from "../assets/nurse.jpeg"; // Import the image

const Nurces = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center mx-5 my-5 p-5 border-black transition-all duration-500 ease-in-out transform hover:scale-105" 
      style={{ backgroundImage: `url(${Nurse})` }}
    >
      {/* Removed dark overlay to make the image look brighter */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold animate-fadeIn">
        <h1>Welcome to the Nurces Page</h1>
      </div>
    </div>
  );
};

export default Nurces;
