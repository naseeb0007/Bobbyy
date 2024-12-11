import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"; // Correct imports for Md icons

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Footer Columns */}
        <div className="text-center md:text-start">
          <h1 className="text-lg font-semibold mb-4 text-red-600">ABOUT COACHING</h1>
          <ul className="space-y-2">
            <li>
              <h3>Bobby Sir’s IELTS and TOEFL coaching is the oldest institute in Uttar Pradesh for admission exams of renowned foreign universities and colleges. We started in the year 2000 with two students, and today after 20 years thousands of students are settled into different parts of the world.</h3>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold mb-4 text-red-600">ADDRESS</h2>
          <ul className="space-y-2">
          <div className="flex flex-col items-start">
  <div className="flex items-center mb-2">
    <MdLocationOn size={20} className="mr-2" />
    <span>A-1 First Floor</span>
  </div>
  <div className="flex items-center mb-2">
    <span>Sameera Plaza Building</span>
  </div>
  <div className="flex items-center mb-2">
    <span>Lalbagh, Lucknow-226001</span>
  </div>
</div>
            <div className="flex items-center">
              <MdPhone size={20} className="mr-2" />
              <span>+91 9335920991 </span>
            </div>
            <div className="flex items-center">
              <MdEmail size={20} className="mr-2" />
              <span>irwinamitdas@gmail.com</span>
            </div>
          </ul>
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold mb-4 text-red-600">HELPFULL PAGES</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">COURSES</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">HOME</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">CONTACT-US</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ACHIEVMENTS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TRAINNING</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ABOUT-US</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">STUDY-ABROAD</a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold mb-4 text-red-600">COURSES</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">IELTS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TOEFL</a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold">
          BOBBY'S<span className="text-red-500 font-bold">IELTS & TOEFL </span>
        </div>
        <div className="text-gray-300 text-sm mt-4 md:mt-0">
          <p>&copy; 2024 DhiWise PVT. LTD. All rights reserved</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <h1>Follow Us On</h1>
          <a href="https://www.instagram.com/bobbyielts?igsh=MXVuNzF5NW9na2dxZg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-pink-800 text-red-700 font-bold text-lg mx-2" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100057307517297&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="hover:text-blue-500 mx-2" />
          </a>
          <a href="https://youtube.com/@covenanteducation3561?si=b346lr5bJog08MvB" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} className="hover:text-red-500 text-red-800 mx-2" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
