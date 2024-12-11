import React from 'react';
import Nurse from "../assets/osce.jpeg"; // Import the image

const Osce = () => {
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
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Introduction to CBT & OSCE</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          Cognitive behavioral therapy (CBT) is a form of psychotherapy that aims to reduce symptoms of various mental health conditions, primarily depression, PTSD, and anxiety disorders. Cognitive behavioral therapy focuses on challenging and changing cognitive distortions (such as thoughts, beliefs, and attitudes) and their associated behaviors to improve emotional regulation and develop personal coping strategies that target solving current problems.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Though it was originally designed to treat depression, its uses have been expanded to include many issues and the treatment of many mental health and other conditions, including anxiety, substance use disorders, marital problems, ADHD, and eating disorders. CBT includes a number of cognitive or behavioral psychotherapies that treat defined psychopathologies using evidence-based techniques and strategies.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          CBT is a common form of talk therapy based on the combination of the basic principles from behavioral and cognitive psychology. It is different from other approaches to psychotherapy, such as the psychoanalytic approach, where the therapist looks for the unconscious meaning behind the behaviors and then formulates a diagnosis.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Instead, CBT is a "problem-focused" and "action-oriented" form of therapy, meaning it is used to treat specific problems related to a diagnosed mental disorder. The therapist's role is to assist the client in finding and practicing effective strategies to address the identified goals and to alleviate symptoms of the disorder. CBT is based on the belief that thought distortions and maladaptive behaviors play a role in the development and maintenance of many psychological disorders, and that symptoms and associated distress can be reduced by teaching new information-processing skills and coping mechanisms.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          On the other hand, the Organization for Security and Co-operation in Europe (OSCE) is a regional security-oriented intergovernmental organization comprising member states in Europe, North America, and Asia. Its mandate includes issues such as arms control, the promotion of human rights, freedom of the press, and free and fair elections. It employs around 3,460 people, mostly in its field operations but also in its secretariat in Vienna, Austria, and its institutions. The OSCE has observer status at the United Nations.
        </p>
      </div>

      {/* Course Curriculum Section */}
      <div className="px-10 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Course Curriculum</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our CBT & OSCE course is structured into detailed modules that explore both the psychological benefits of Cognitive Behavioral Therapy and the essential concepts of the OSCE, giving students a well-rounded understanding of these vital fields. Below are the key modules covered in this course:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 1: Introduction to CBT</h3>
            <p className="text-md text-gray-700">
              In this module, students will learn the basics of Cognitive Behavioral Therapy, including its core principles and the types of disorders it treats. Students will explore the key cognitive distortions and maladaptive behaviors that CBT aims to correct, and the techniques used to address them.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 2: Techniques and Strategies in CBT</h3>
            <p className="text-md text-gray-700">
              This module covers various evidence-based CBT techniques, such as cognitive restructuring, behavior modification, and exposure therapy. Students will gain a deep understanding of how to apply these strategies in clinical practice to treat patients with anxiety, depression, PTSD, and other conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 3: OSCE Overview</h3>
            <p className="text-md text-gray-700">
              In this module, students will be introduced to the Organization for Security and Co-operation in Europe (OSCE), its role in international security, and its contributions to peace and stability. The focus will be on the OSCE’s operations in conflict zones, arms control, and promoting human rights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 4: Human Rights and International Law</h3>
            <p className="text-md text-gray-700">
              This module covers the OSCE’s work in promoting human rights and the rule of law. Students will learn about the importance of free and fair elections, media freedom, and the protection of minority rights, with a focus on the OSCE’s mission and challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 5: Applying CBT Techniques</h3>
            <p className="text-md text-gray-700">
              In this module, students will apply CBT techniques through role-playing exercises and case studies. The focus is on mastering skills for managing patient relationships, improving communication, and assessing progress in therapy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">Module 6: OSCE Field Operations</h3>
            <p className="text-md text-gray-700">
              Students will learn about the OSCE's field operations, including peacekeeping missions, election monitoring, and conflict resolution. This module emphasizes practical applications and real-world examples of OSCE interventions in international security and human rights.
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

export default Osce;
