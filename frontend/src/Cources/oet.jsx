import React from 'react';
import Nurse from "../assets/oet.jpeg"; // Import the image

const Oet = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div
  className="relative w-full h-96 bg-cover bg-center mx-5 my-5 p-5 border-black transition-all duration-500 ease-in-out transform hover:scale-105"
  style={{ backgroundImage: `url(${Nurse})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
>
  <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
    <h1></h1>
  </div>
</div>


      {/* Introduction Section */}
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Introduction to OET</h2>
        <p className="text-lg text-gray-700 mb-6">
          The Occupational English Test (OET) is a language proficiency test for healthcare professionals who want to practice in English-speaking countries.
          Our OET course is specifically designed to prepare healthcare professionals for the exam, ensuring they gain the necessary skills to communicate effectively in medical settings.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Whether you're a nurse, doctor, dentist, or allied health professional, this course covers the essential language skills required to succeed in the OET. From listening to speaking, reading, and writing, our structured curriculum will guide you step by step towards mastering the language for your specific healthcare profession.
        </p>
      </div>

      {/* Course Curriculum Section */}
      <div className="px-10 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Course Curriculum</h2>
        <p className="text-lg text-gray-700 mb-4">
          This course is divided into well-structured modules to address all aspects of the OET exam. Each module is tailored to improve your proficiency in specific areas of language needed for healthcare professionals.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 1: Introduction to OET</h3>
            <p className="text-md text-gray-700">
              In this module, you'll get familiar with the OET exam format, scoring system, and the skills required for each section. We will also introduce you to the various healthcare professions and their specific language needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 2: Listening Skills</h3>
            <p className="text-md text-gray-700">
              This module focuses on improving your listening comprehension, especially in medical contexts. You’ll practice listening to medical conversations, patient interviews, and case studies, which will prepare you for the listening section of the exam.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 3: Speaking Skills</h3>
            <p className="text-md text-gray-700">
              In this module, we’ll develop your speaking abilities for patient interactions, consultations, and collaborative work with healthcare teams. You'll engage in role-plays and interactive speaking exercises to improve fluency, pronunciation, and clarity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 4: Reading Skills</h3>
            <p className="text-md text-gray-700">
              The reading module helps you to effectively read and understand medical texts, patient histories, discharge summaries, and clinical notes. You will practice reading comprehension techniques and strategies to efficiently extract relevant information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 5: Writing Skills</h3>
            <p className="text-md text-gray-700">
              Writing is essential for communicating medical information clearly. In this module, you will practice writing referral letters, patient reports, and other professional documents. Feedback will be provided to help you refine your writing skills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 6: Test-Taking Strategies</h3>
            <p className="text-md text-gray-700">
              This final module covers test-taking strategies, time management, and stress-reduction techniques to help you perform at your best on the exam day. You will take mock tests and review your performance with our instructors.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="px-10 py-10 flex justify-center">
        <button onClick={() => window.location.href = '/contact'} className="bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Oet;
