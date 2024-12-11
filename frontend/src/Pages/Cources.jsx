import React from "react";
import { useNavigate } from "react-router-dom";
import Student1 from "../assets/cource1.jpeg";
import Student2 from "../assets/cource2.jpeg";
import Student3 from "../assets/cource3.jpeg";
import Student4 from "../assets/cource4.jpeg";

const Cources = () => {
  const navigate = useNavigate();

  const students = [
    {
      img: Student1,
      name: "OET",
      achievement:
        "The Occupational English Test (OET) assesses the English language skills of healthcare professionals who wish to register and practice in an English-speaking environment. It focuses on communication scenarios encountered in healthcare settings, ensuring that practitioners are ready to deliver safe and effective care.",
      route: "/oet",
    },
    {
      img: Student2,
      name: "IELTS",
      achievement:
        "The International English Language Testing System (IELTS) is designed to assess the language ability of candidates who need to study or work where English is the language of communication. Achieving a high band score demonstrates proficiency for higher education or professional opportunities.",
      route: "/ielts",
    },
    {
      img: Student3,
      name: "The NCLEX-RN",
      achievement:
        "The National Council Licensure Examination (NCLEX-RN) is a standardized exam that determines whether a candidate is prepared for entry-level nursing practice. It tests critical thinking and decision-making skills required for nursing professionals.",
      route: "/ncle",
    },
    {
      img: Student4,
      name: "CBT & OSCE",
      achievement:
        "Cognitive Behavioral Therapy (CBT) and Objective Structured Clinical Examination (OSCE) are essential components in the healthcare field. CBT helps in addressing mental health issues through structured therapy, while OSCE is a practical exam assessing clinical competence in various medical scenarios.",
      route: "/osce",
    },
  ];

  return (
    <div className="container mx-auto my-12 p-6 bg-red-600 text-white rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-center mb-10 animate-fade-in">
        OUR COURSES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img
              src={student.img}
              alt={student.name}
              className="w-full h-auto"
            />
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-center">{student.name}</h2>
              <p className="text-gray-600 text-justify mb-6">
                {student.achievement}
              </p>
              <button
                onClick={() => navigate(student.route)}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors mt-auto self-center"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cources;
