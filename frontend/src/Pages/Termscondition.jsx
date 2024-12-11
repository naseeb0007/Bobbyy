import React from 'react';

const TermsAndcondition = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Terms & Conditions</h1>

        <p className="text-gray-700 mb-4">
          Welcome to Bobby IELTS & TOEFL! These terms and conditions outline the rules and regulations for using our services, including coaching for IELTS and TOEFL as well as our consultation for sending students abroad for higher studies. By accessing or using our services, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1. Coaching Services</h2>
        <p className="text-gray-700 mb-4">
          We provide high-quality coaching for IELTS and TOEFL preparation. Our courses include personalized guidance, mock tests, and expert advice. Students must adhere to the schedules and guidelines provided. We reserve the right to amend class timings or content as necessary.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">2. Overseas Education Consultation</h2>
        <p className="text-gray-700 mb-4">
          Our consultancy services aim to assist students in applying to universities abroad. While we provide guidance on applications, visa processes, and documentation, we do not guarantee admission to any institution or approval of visas.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3. Fees & Payment</h2>
        <p className="text-gray-700 mb-4">
          All fees for coaching and consultancy services must be paid in full before the commencement of services unless otherwise agreed upon. Fees are non-refundable once the service has begun. Payment plans, if applicable, must be followed strictly.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4. Student Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          Students are expected to attend classes regularly, complete assignments, and adhere to the decorum of the institute. Misconduct or repeated absenteeism may lead to termination of services without a refund.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Bobby IELTS & TOEFL will not be held responsible for any loss or damage incurred during the admission or visa process. Students must ensure the accuracy of their documents and follow instructions carefully.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">6. Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We are committed to protecting your personal information. All data collected is used solely for providing our services and will not be shared with third parties without your consent, except as required by law.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">7. Amendments</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to amend these terms and conditions at any time. Any changes will be communicated to our students and clients promptly.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6 mb-3">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about our terms and conditions, please feel free to contact us at:
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Phone:</span>+91 9335920991<br />
          <span className="font-semibold">Email:</span> irwinamitdas@gmail.com<br />
          <span className="font-semibold">Address:</span> A-1 First Floor
Sameera Plaza Building
Lalbagh, Lucknow-226001
        </p>

        <div className="flex justify-center mt-8">
  <button
    onClick={() => window.location.href = '/'}
    className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300"
  >
    Accept Terms & Conditions
  </button>
</div>

      </div>
    </div>
  );
};

export default TermsAndcondition;
