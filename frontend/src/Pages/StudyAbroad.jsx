import React, { useState, useEffect } from "react";
import Abroad from "../assets/abroad.jpeg"; 
import Astrelia from "../assets/austrelia.jpeg"; 
import Canada from "../assets/canada.jpeg"; 
import Germany from "../assets/germany.jpeg"; 
import Italy from "../assets/italy.jpeg"; 
import NewZealand from "../assets/newzealand.jpeg"; 
import UK from "../assets/uk.jpeg"; 
import US from "../assets/us.jpeg"; 
import map from "../assets/map.jpeg"; 

const StudyAbroad = () => {
  const [studentCounseled, setStudentCounseled] = useState(0);
  const [courses, setCourses] = useState(0);
  const [universities, setUniversities] = useState(0);

  useEffect(() => {
    const duration = 3000; // Duration for the animation (3 seconds)
    const incrementSpeed = 50; // Speed of increment in milliseconds

    const countUp = (targetValue, setterFunction) => {
      let currentValue = 0;
      const increment = targetValue / (duration / incrementSpeed);

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(interval);
          setterFunction(targetValue); // Set the final value
        } else {
          setterFunction(Math.floor(currentValue)); // Update the state
        }
      }, incrementSpeed);
    };

    countUp(33000, setStudentCounseled);
    countUp(61000, setCourses);
    countUp(3000, setUniversities);
  }, []);

  return (
    <div>
      {/* Full Banner Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Abroad})` }}
      >
        {/* Text positioned at the bottom-right corner */}
        <div className="absolute bottom-40 right-20 p-6 rounded-lg text-white">
          <h1 className="text-2xl font-bold">Simplifying Your Journey to</h1>
          <h1 className="text-5xl font-bold mt-4 text-red-600">Study Abroad</h1>
          <p className="text-lg mt-4">
            Discover courses & universities abroad and connect with students studying there!
          </p>
          <div className="flex justify-center items-center mt-4 space-x-8">
            <div className="text-center">
              <h1 className="text-red-600 font-bold text-2xl">{studentCounseled}</h1>
              <h1 className="font-bold">Student Counseled</h1>
            </div>
            <div className="text-center">
              <h1 className="text-red-600 font-bold text-2xl">{courses}+</h1>
              <h1 className="font-bold">Courses</h1>
            </div>
            <div className="text-center">
              <h1 className="text-red-600 font-bold text-2xl">{universities}+</h1>
              <h1 className="font-bold">Universities</h1>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global Study Destination Section */}
      <div className="text-center my-12">
        <h1 className="text-5xl font-bold">Global Study Destinations</h1>
      </div>

      {/* Country Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {[
          { image: Astrelia, name: "Australia" },
          { image: Canada, name: "Canada" },
          { image: Germany, name: "Germany" },
          { image: Italy, name: "Italy" },
          { image: NewZealand, name: "New Zealand" },
          { image: UK, name: "United Kingdom" },
          
        ].map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold">{country.name}</h2>
            </div>
            
          </div>
        ))}
      </div>
      <div className="text-center my-12">
  <h1 className="text-5xl font-bold">Our Global Presence</h1>
  <img src={map} alt="Global Map" className="mx-auto mt-8 w-full max-w-4xl" />
</div>

    </div>
  );
};

export default StudyAbroad;
