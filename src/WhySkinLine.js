// WhySkinLine.js

import React from "react";

const WhySkinLine = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">Why Choose SkinLine?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Astute Card */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/design-process-concept-illustration_114360-708.jpg?w=740&t=st=1707169639~exp=1707170239~hmac=0f0c83f45321bd19c513b156745fbc57e9f9f83e2f3eb645ab2abcad1cd285e1" alt="Astute" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient ">Astute</h2>
          <p>
            AI Dermatologist is the product of doctors' and IT professionals' collaborative efforts, and it is built on artificial intelligence. Our software is just as accurate as a dermatologist on the field.
          </p>
        </div>

        {/* Easy Card */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148553118.jpg?w=740&t=st=1707169753~exp=1707170353~hmac=833c9aaa6ef1d8b3722c8132c6557a6e34e7a204e0dfb998b21253f3f636468f" alt="Easy" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Easy</h2>
          <p>
            You may determine in just one minute whether there is cause for alarm by bringing your phone up to a mole or other skin growth.
          </p>
        </div>

        {/* Reachable Card */}
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/brand-loyalty-concept-illustration_114360-15542.jpg?w=740&t=st=1707169823~exp=1707170423~hmac=2c22c2f28c1c1c40bf74542e6d5748bbe694c0220d70f3c9bc28cca8f7a3aa03" alt="Reachable" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Reachable</h2>
          <p>
            AI Dermatologist is accessible from anywhere at any time. Even while you're on the go, have access to your health information at your fingertips.
          </p>
        </div>

        {/* Reasonably Priced Card */}
        <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_52683-142631.jpg?w=740&t=st=1707170164~exp=1707170764~hmac=57f1b5da6d2bd8e54d1371cd91795485ccf389c8769a64fe04b3d5554dcfc594" alt="Reasonably Priced" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Reasonably Priced</h2>
          <p>
            AI Dermatologist offers affordable image analytics, saving time and money. Choose from flexible pricing plans to meet your clinic's needs and budget effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySkinLine;
