import React from "react";
import Sir from "../assets/sir.jpeg";

function About() {
  return (
    <div className="container mx-auto my-12 p-4 space-y-9 w-full">
      {/* Sir's Image and Introduction */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src={Sir}
          alt="Bobby Sir"
          className="w-40 h-40 rounded-full shadow-md"
        />
        <h2 className="text-xl font-semibold text-center">Hi, my name is Irwin (Bobby Sir)</h2>
        <p className="text-lg text-center max-w-3xl">
          I am your IELTS teacher and the writer of this website. My aim is to help you understand IELTS and TOEFL, and to score high. I have an experience of 20 years in teaching IELTS and TOEFL. I have completed my Training of teaching IELTS and TOEFL with the British Council (United Kingdom) and ETS (Education Testing Services, USA). I am also a nodal partner with IDP Australia.
        </p>
      </div>

      {/* About Section */}
      <h1 className="text-3xl font-bold text-center mb-6">About Booby Institute</h1>
      <p className="text-lg">
        Welcome to
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          Booby Institute
        </strong>
        , a premier educational institution dedicated to empowering students with the skills and guidance needed to excel in international education. With a proven track record of success, we specialize in preparing students for standardized tests like IELTS and TOEFL, nurturing nurses for global opportunities, and facilitating study-abroad programs.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Our Mission</h2>
      <p>
        At Booby Institute, our mission is to provide exceptional training and support to students and professionals, helping them achieve their dreams of studying and working abroad. We aim to be a bridge between ambition and accomplishment, ensuring every student reaches their full potential.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Why Choose Us?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Expert Training:</strong> Our experienced instructors deliver comprehensive training for IELTS and TOEFL, tailored to individual learning styles.
        </li>
        <li>
          <strong>Support for Nurses:</strong> We guide nurses through the preparation required to secure international healthcare opportunities.
        </li>
        <li>
          <strong>Study Abroad Guidance:</strong> Our counselors provide end-to-end assistance, from choosing the right course and university to securing visas and accommodation.
        </li>
        <li>
          <strong>Proven Success:</strong> Hundreds of students have achieved their goals with our structured programs and unwavering support.
        </li>
      </ul>

      <h2 className="font-semibold text-blue-800 text-xl">Our Services</h2>
      <p>
        We offer a wide range of services designed to meet the needs of students and professionals:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>IELTS and TOEFL coaching with personalized feedback.</li>
        <li>Specialized programs for nurses seeking opportunities abroad.</li>
        <li>Study-abroad consultancy for undergraduate and postgraduate courses.</li>
        <li>Workshops and mock tests to boost confidence and performance.</li>
      </ul>

      <h2 className="font-semibold text-blue-800 text-xl">Inspiration and Values</h2>
      <p>
        Booby Institute is driven by the belief that education is the key to a brighter future. Our team is inspired by the stories of students who have transformed their lives through global opportunities. We are committed to excellence, integrity, and the success of every student who walks through our doors.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">Contact Us</h2>
      <p>
        Ready to embark on your journey to success? Get in touch with Booby Institute today and take the first step toward achieving your dreams.
      </p>
    </div>
  );
}

export default About;
