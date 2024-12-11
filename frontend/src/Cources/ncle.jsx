import React from 'react';
import Nurse from "../assets/nclex.jpeg"; // Import the image

const Ncle = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mx-5 my-5 p-5 border-black transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${Nurse})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          <h1></h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Introduction to NCLEX-RN</h2>
        <p className="text-lg text-gray-700 mb-6">
          The NCLEX-RN (National Council Licensure Examination for Registered Nurses) is a critical exam for aspiring registered nurses who want to practice in the United States. It is designed to assess whether a candidate has the necessary knowledge and skills to provide safe and effective care to patients. This course is meticulously crafted to help you succeed in this high-stakes exam and become a registered nurse.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Our NCLEX-RN course provides comprehensive coverage of all the major topics and competencies that are tested in the exam. This includes everything from basic care and comfort, to pharmacological therapies, to health promotion and maintenance. With a blend of interactive lessons, practice questions, and personalized feedback, this course ensures you're fully prepared to tackle the NCLEX-RN confidently.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Whether you're a nursing student, a graduate preparing for your licensing exam, or someone returning to take the NCLEX after an attempt, this course is designed to build your confidence and enhance your understanding of the material. It will guide you through the most common concepts, techniques, and critical thinking skills needed to pass the NCLEX-RN exam with flying colors.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          By the end of this course, you will have the knowledge, strategies, and practice needed to succeed in every section of the NCLEX-RN exam. Our goal is not just to help you pass, but to ensure you feel prepared and capable of delivering exceptional care to your future patients.
        </p>
      </div>

      {/* Course Curriculum Section */}
      <div className="px-10 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Course Curriculum</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our NCLEX-RN course is structured into detailed modules, each focusing on a specific aspect of nursing care that is essential for the exam. These modules are designed to ensure you develop a well-rounded knowledge base and the critical thinking skills required to excel in real-life nursing scenarios.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 1: Introduction to NCLEX-RN</h3>
            <p className="text-md text-gray-700">
              In this module, we will introduce you to the structure of the NCLEX-RN exam, including the question formats and test-taking strategies. You will gain an understanding of the exam’s key areas and be equipped with the strategies to answer questions effectively under time pressure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 2: Safe and Effective Care Environment</h3>
            <p className="text-md text-gray-700">
              This module focuses on creating a safe environment for patients, preventing harm, and managing patient care in various settings. Topics include infection control, safety precautions, and legal and ethical issues in healthcare. This is a crucial part of the NCLEX-RN exam, and we ensure you are well-prepared for this section.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 3: Health Promotion and Maintenance</h3>
            <p className="text-md text-gray-700">
              In this module, we explore the ways nurses can promote health, prevent illness, and manage patient education. The focus will be on assessing patients’ health, identifying risks, and helping them make lifestyle changes to improve overall well-being. This module includes extensive practice on patient teaching and counseling.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 4: Psychosocial Integrity</h3>
            <p className="text-md text-gray-700">
              Understanding patients’ emotional and psychological health is essential in nursing. This module covers the assessment and management of mental health issues, including coping mechanisms, stress management, and providing emotional support. We will discuss strategies for communicating effectively with patients facing psychological challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 5: Physiological Integrity</h3>
            <p className="text-md text-gray-700">
              The bulk of the NCLEX-RN exam is focused on physiological integrity, which is assessing and managing physical health conditions. This module dives into common health conditions, pharmacology, and how nurses manage patient care related to disease processes, therapeutic interventions, and understanding lab values.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 6: NCLEX-RN Practice Exams</h3>
            <p className="text-md text-gray-700">
              This final module includes comprehensive practice exams designed to mimic the format and difficulty of the actual NCLEX-RN exam. These practice exams allow you to test your knowledge under real exam conditions, helping you build stamina and perfect your test-taking strategies.
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

export default Ncle;
