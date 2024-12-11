import React from 'react';
import IELTSImage from "../assets/ieltsreal2.jpeg"; // Import the image

const Ielts = () => {
  return (
    <div className="bg-white">

      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mx-5 my-5 p-5 border-black transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${IELTSImage})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          <h1></h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">Introduction to IELTS</h2>
        <p className="text-lg text-gray-700 mb-6">
          The International English Language Testing System (IELTS) is a globally recognized exam that measures your English proficiency. It’s designed to test your ability in four essential language skills: Listening, Reading, Writing, and Speaking. Whether you’re applying for academic studies, professional certification, or immigration, IELTS is the benchmark that opens doors to success in English-speaking countries such as the UK, the US, Canada, and Australia. This course is meticulously designed to help you prepare for every aspect of the IELTS exam, providing you with the knowledge and techniques you need to excel.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          IELTS is the most widely accepted English language test worldwide, recognized by over 10,000 institutions including universities, employers, and governments. The test comes in two versions: the Academic version and the General Training version. The Academic version is suited for those planning to pursue higher education or professional registration, whereas the General Training version is intended for those migrating to English-speaking countries or seeking work experience.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          This IELTS preparation course focuses on the four main sections of the exam, equipping you with both the language skills and exam strategies required to achieve a high score. Through a combination of detailed lessons, hands-on practice, and expert guidance, you will learn to master each component of the test. Let’s dive into the four core sections of the IELTS test, which form the heart of this course.
        </p>
      </div>

      {/* The Four Parts of IELTS Test */}
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-5">The Four Parts of the IELTS Test</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-blue-600">1. Listening</h3>
            <p className="text-md text-gray-700 mb-3">
              The Listening section of the IELTS test is designed to assess how well you can understand spoken English in different contexts. This section consists of four parts, each with 10 questions, and takes about 30 minutes to complete. You’ll listen to a variety of recordings, including conversations, interviews, and lectures, and answer questions based on the information presented.
            </p>
            <p className="text-md text-gray-700 mb-3">
              The key to success in the Listening section is to focus on the specific details of the audio clips. The recordings are played only once, so you must practice your listening skills regularly to improve your ability to capture details such as key facts, opinions, and implied meanings. As the recordings feature a range of accents from various English-speaking countries, this section tests your ability to understand both formal and informal language.
            </p>
            <p className="text-md text-gray-700 mb-3">
              Key points covered in the Listening section:
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Understanding conversations between two or more people, including formal and informal discussions.</li>
              <li>Comprehending spoken instructions and information in professional and everyday contexts.</li>
              <li>Identifying main ideas, specific details, and implied meaning in a variety of accents.</li>
              <li>Ability to fill in missing information, complete forms, or match information correctly based on what you hear.</li>
            </ul>
            <p className="text-md text-gray-700">
              Our course provides a wide range of listening exercises that simulate real test conditions. With regular practice, you will build your listening skills and become more comfortable with the different types of tasks in this section.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-blue-600">2. Reading</h3>
            <p className="text-md text-gray-700 mb-3">
              The Reading section of the IELTS exam tests your ability to read and understand different types of written texts. The test consists of three sections, each containing a long passage, and you’ll have 60 minutes to complete it. The passages vary in length and complexity, and they include both factual and discursive content, designed to assess your understanding of main ideas, arguments, and specific details.
            </p>
            <p className="text-md text-gray-700 mb-3">
              To perform well in the Reading section, you need to practice techniques such as skimming, scanning, and identifying key points quickly. The tasks will test your ability to extract information, interpret meaning, and evaluate text critically. In addition, you’ll encounter questions that test your understanding of vocabulary and the ability to recognize paraphrased material.
            </p>
            <p className="text-md text-gray-700 mb-3">
              Key points covered in the Reading section:
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Ability to skim and scan long passages to find key information efficiently.</li>
              <li>Understanding the author’s opinions, attitudes, and the tone of the text.</li>
              <li>Identifying main ideas and supporting details in complex passages.</li>
              <li>Handling different types of questions, such as multiple-choice, short-answer, and matching headings.</li>
            </ul>
            <p className="text-md text-gray-700">
              We will provide ample reading exercises to help you develop strategies for approaching different types of texts and questions. You’ll practice answering quickly and accurately while managing time effectively.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-blue-600">3. Writing</h3>
            <p className="text-md text-gray-700 mb-3">
              The Writing section of the IELTS exam consists of two tasks: Task 1 and Task 2. Task 1 requires you to write a response based on visual information, such as a graph, chart, diagram, or table. Task 2 is an essay where you need to respond to a point of view, argument, or problem. Both tasks require clear organization of ideas, accurate grammar, and appropriate vocabulary.
            </p>
            <p className="text-md text-gray-700 mb-3">
              Task 1 tests your ability to summarize visual data, whereas Task 2 assesses your ability to develop an argument or present a solution to a problem. Writing in the IELTS exam demands not just correct grammar and vocabulary, but also the ability to structure your ideas logically and coherently. Task 2 carries more weight, so it’s essential to practice writing essays that are well-structured and well-argued.
            </p>
            <p className="text-md text-gray-700 mb-3">
              Key points covered in the Writing section:
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Summarizing and interpreting data accurately in Task 1, with a focus on key trends and comparisons.</li>
              <li>Structuring an essay effectively in Task 2, with a clear introduction, body paragraphs, and conclusion.</li>
              <li>Using appropriate linking words, phrases, and transitions to make your writing flow smoothly.</li>
              <li>Developing your argument and supporting it with relevant examples, facts, and evidence.</li>
            </ul>
            <p className="text-md text-gray-700">
              Our course will provide you with plenty of practice writing responses to both Task 1 and Task 2, helping you develop skills in planning, drafting, and reviewing your writing.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold text-blue-600">4. Speaking</h3>
            <p className="text-md text-gray-700 mb-3">
              The Speaking section of the IELTS exam consists of a face-to-face interview with an examiner. This section is divided into three parts: the introduction and interview, the short speech on a given topic, and a longer discussion on abstract topics related to the subject of the short speech. The Speaking section evaluates your ability to communicate effectively, using a wide range of vocabulary and grammar.
            </p>
            <p className="text-md text-gray-700 mb-3">
              During the interview, you’ll be asked questions about familiar topics such as your hobbies, interests, and daily life. In the second part, you will have one minute to prepare a short speech on a given topic, after which you’ll be asked to speak for up to two minutes. Finally, the examiner will engage you in a discussion of more abstract issues, asking you to provide your opinion and supporting it with reasons.
            </p>
            <p className="text-md text-gray-700 mb-3">
              Key points covered in the Speaking section:
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Answering questions clearly and confidently in the introduction and interview part.</li>
              <li>Delivering a structured and coherent short speech on a given topic.</li>
              <li>Engaging in a discussion about abstract topics, providing opinions and arguments.</li>
              <li>Using a variety of vocabulary and grammar to express ideas effectively and naturally.</li>
            </ul>
            <p className="text-md text-gray-700">
              Our mock speaking sessions will simulate real test conditions, helping you practice speaking clearly and confidently in English. You'll receive feedback on your pronunciation, fluency, grammar, and vocabulary, allowing you to fine-tune your speaking skills.
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
};

export default Ielts;
