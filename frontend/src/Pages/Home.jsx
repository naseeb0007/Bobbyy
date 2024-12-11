import React, { useState, useEffect } from "react";
import Abroad from "../assets/abroad.jpeg";
import IELTS from "../assets/ielts.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import directorImage from "../assets/sir.jpeg"

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0); // State for managing current banner

  // Static values for student counseled, courses, and universities
  const targetStudentCounseled = 1200;
  const targetCourses = 100;
  const targetUniversities = 50;

  // States to store the animated values
  const [studentCounseled, setStudentCounseled] = useState(0);
  const [courses, setCourses] = useState(0);
  const [universities, setUniversities] = useState(0);

  // Array of banners with their respective images, titles, descriptions, and buttons
  const banners = [
    {
      image: Abroad,
      title: "Simplifying Your Journey to",
      subtitle: "Study Abroad",
      description: "Discover courses & universities abroad and connect with students studying there!",
      buttonText: "Explore Now",
      link: "/studyabroad" // Link for the button
    },
    {
      image: IELTS,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    }
  ];

  // Function to handle the next banner
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // Function to handle the previous banner
  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Function to animate the numbers
  const animateNumbers = () => {
    let studentCounter = 0;
    let coursesCounter = 0;
    let universitiesCounter = 0;

    // Interval to increment the numbers every 25ms
    const interval = setInterval(() => {
      if (studentCounter < targetStudentCounseled) {
        studentCounter += 1;
        setStudentCounseled(studentCounter);
      }
      if (coursesCounter < targetCourses) {
        coursesCounter += 1;
        setCourses(coursesCounter);
      }
      if (universitiesCounter < targetUniversities) {
        universitiesCounter += 1;
        setUniversities(universitiesCounter);
      }

      // Stop the interval once all numbers reach their target values
      if (studentCounter >= targetStudentCounseled && coursesCounter >= targetCourses && universitiesCounter >= targetUniversities) {
        clearInterval(interval);
      }
    }, 50); // Adjust this value for speed, here it's incrementing every 25ms
  };

  // useEffect to trigger animation once on page load
  useEffect(() => {
    animateNumbers();
  }, []);

  return (
    <div className="outer-container">
      <div className="relative overflow-hidden">
        {/* Banner 1 */}
        <div className="banner-container">
          {currentBanner === 0 && (
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${banners[0].image})` }}
            >
              <div className="absolute bottom-40 right-20 p-6 rounded-lg text-white">
                <h1 className="text-2xl font-bold">{banners[0].title}</h1>
                <h1 className="text-5xl font-bold mt-4 text-red-600">{banners[0].subtitle}</h1>
                <p className="text-lg mt-4">{banners[0].description}</p>
                <div className="flex justify-center items-center mt-4 space-x-8">
                  <div className="text-center">
                    <h1 className="text-red-600 font-bold text-2xl">{studentCounseled}</h1>
                    <h1 className="font-bold">Students Counseled</h1>
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

                {/* Use Link component to navigate to the abroad page */}
                <Link to={banners[0].link}>
                  <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg">
                    {banners[0].buttonText}
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Banner 2 */}
        <div className="banner-container">
          {currentBanner === 1 && (
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${banners[1].image})` }}
            >
              <div className="absolute bottom-40 right-20 p-6 rounded-lg text-white">
                <h1 className="text-2xl font-bold">{banners[1].title}</h1>
                <h1 className="text-5xl font-bold mt-4 text-red-600">{banners[1].subtitle}</h1>
                <p className="text-lg mt-4">{banners[1].description}</p>
                <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg">
                  {banners[1].buttonText}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Left Arrow */}
        <div className="arrow-buttons">
          <button
            onClick={prevBanner}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
          >
            <FaArrowLeft size={30} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextBanner}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      </div>

      {/* New Text Section Below the Banner */}
      <div className="mt-0 p-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">STRUCTURE</h2>
        <div>
  
  {/* Box Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 shadow">
    {/* Left Box (Blue) */}
    <div
      className="p-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">IELTS Characteristics</h2>
      <p className="mt-4">
        IELTS Academic and IELTS General Training are designed to cover the full range of ability from non-user to expert user. The Academic version is for test takers who want…
      </p>
    </div>

    {/* Middle Box (Red) */}
    <div
      className="p-6 bg-red-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">IELTS Test Structure</h2>
      <p className="mt-4">
        Modules There are two modules of the IELTS: Academic Module and General Training Module There’s also a separate test offered by the IELTS test partners, called IELTS Life Skills:…
      </p>
    </div>

    {/* Right Box (Blue) */}
    <div
      className="p-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">4 Parts of IELTS Test</h2>
      <p className="mt-4">
        The four parts of the IELTS test Listening: 30 minutes (plus 10 minutes’ transfer time) Reading: 60 minutes Writing: 60 minutes Speaking: 11–14 minutes The test total time is:…
      </p>
    </div>
    
  </div>
  <div className="flex justify-center mt-16">
      <div className="max-w-6xl w-full bg-red-500 rounded-lg shadow-lg p-8 flex">
        {/* Director Image on the Left */}
        <div className="w-1/2 p-6">
          <img
            src={directorImage}
            alt="Director"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Message on the Right */}
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-bold text-white">Message From Director</h2>
          <p className="mt-6 text-xl text-white">
            "Hi, my name is Irwin (Bobby Sir), I’m your IELTS teacher and the writer of this website. My aim is to help you understand IELTS and TOEFL, and to score high. I have an experience of 20 years in teaching IELTS and TOEFL. I have completed my Training of teaching IELTS and TOEFL with the British Council (United Kingdom) and ETS (Education Testing Services, USA). I am also a nodal partner with IDP Australia."
          </p>
        </div>
      </div>
    </div>

</div>

      </div>
      
    </div>
    
  );
};

export default Home;
