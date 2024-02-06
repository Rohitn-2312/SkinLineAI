// HowToUse.js

import React from "react";

const HowToUse = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        How to Use SkinLineAI
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* 1st Card */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          {/* Image Space */}
          <div className="mb-4">
            {/* Insert your image here */}
            <img
              className="w-full h-45 object-cover rounded-md"
              src="https://img.freepik.com/free-vector/male-using-smartphone-illustration-isolated_24911-115054.jpg?w=740&t=st=1707166309~exp=1707166909~hmac=d889b97cb70e39af1ed2e458e8a2dac17e4b62bf37ae15510cc64d708009f4f5"
              alt="Card Image 1"
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gradient">Take a Photo</h2>
          <p>
            Keep zoomed at the closest distance (less than 10 cm), keep in
            focus, and center only the skin mark (without hair, wrinkles, and
            other objects).
          </p>
        </div>

        {/* 2nd Card */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          {/* Image Space */}
          <div className="mb-4">
            {/* Insert your image here */}
            <img
              className="w-full h-45 object-cover rounded-md"
              src="https://img.freepik.com/free-vector/send-message-by-phone-concept-illustration_114360-19792.jpg?w=740&t=st=1707166701~exp=1707167301~hmac=7b43aa503c4be2ac72fb727e507c0da4bf0358fa9ef4052281c7abb98f7359f4"
              alt="Card Image 2"
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gradient ">Identify and Send</h2>
          <p>
            Send your photo to the Artificial Intelligence. The system will
            analyze it and send you a risk assessment.
          </p>
        </div>

        {/* 3rd Card */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          {/* Image Space */}
          <div className="mb-4">
            {/* Insert your image here */}
            <img
              className="w-full h-45 object-cover rounded-md"
              src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-545.jpg?w=740&t=st=1707166909~exp=1707167509~hmac=58e590768f9c259f44dcc6e2c3ac847e1fe6584949bb811b7aad5759ae1a1106"
              alt="Card Image 3"
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gradient">Receive Your Risk Assessment</h2>
          <p>
            Get the result within 60 seconds and related advice on the next
            steps to take.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
