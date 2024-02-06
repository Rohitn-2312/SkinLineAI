// HowAiWorks.js

import React from "react";

const HowAiWorks = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        How SkinLine AI Works
      </h1>

      <div className="p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 bg-gradient-to-r from-indigo-200 to-indigo-100">
        <div className="flex">
          {/* Left side with the image */}
          <div className="flex-shrink-0 ">
             <img
             src="https://img.freepik.com/free-vector/gradient-ai-logo-template-collection_23-2148935233.jpg?w=740&t=st=1707167858~exp=1707168458~hmac=980122297f0504ae9d20d8a16d95ec420e81d41a697493f3abe6ee4d43e9af18"
             alt="AI Image"
             className="h-full w-40 object-cover rounded-md mr-4 align-self-center" // Add align-self-center class
             />
         </div>

          {/* Right side with the text content */}
          <div className="flex-grow">
            <div className="bg-white p-8 rounded-md">
              <p className="mb-4 text-lg font-serif">
                SkinLine AI uses a deep machine learning algorithm
                (AI-algorithm). The human ability to learn from examples and
                experiences has been transferred to a computer. For this
                purpose, the neural network has been trained using a dermoscopic
                imaging database containing tens of thousands of examples that
                have confirmed diagnosis and assessment by dermatologists.
              </p>

              <p className="mb-4 text-lg font-serif">
                The AI is able to distinguish between benign and malignant
                tumors, similar to the ABCDE rule (5 main signs of oncology:
                asymmetry, boundary, color, diameter, and change over time). The
                difference between them is that the algorithm can analyze
                thousands of features, but not only 5 of them. Of course, only a
                machine can detect that amount of evidence.
              </p>

              <p className="mb-4 text-lg font-serif">
                Due to the productive cooperation with doctors, the quality of
                the algorithm performance is constantly being improved. Based on
                growing experience and its own autonomous rules, the AI is able
                to distinguish between benign and malignant tumors, find risks
                of human papillomavirus, and classify different types of acne…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowAiWorks;
