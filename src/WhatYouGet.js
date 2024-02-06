// WhatYouGet.js

import React from "react";
import { Link } from "react-router-dom";

const WhatYouGet = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">What You Get in 1 Minute?</h1>
      <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-md shadow-md flex items-center">
        <div className="flex-1">
          <p className="text-lg mb-4 font-semibold">
            Risks Detection and Assessment for more than 29 diseases, including:
          </p>
          <ul className="list-disc pl-6">
            <li>Skin cancer (melanoma, BKK, BCC, etc.)</li><br></br>
            <li>Precancerous lesions (blue and dysplastic nevus, etc.)</li><br></br>
            <li>6 types of acne</li><br></br>
            <li>Benign formations (moles, angeoma, dermatofibroma, etc.)</li><br></br>
            <li>Papilloma virus (warts, papillomas, mollusks, etc.)</li><br></br>
          </ul>
          <div className="mt-6">
            <Link to="/check" className="bg-[#0e21fe] px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700 transition duration-300">
              Try Now
            </Link>
          </div>
        </div>
        {/* Image at the right side */}
        <img
          src="https://img.freepik.com/free-vector/affective-computing-abstract-concept-illustration_335657-2283.jpg?w=740&t=st=1707175991~exp=1707176591~hmac=83b32bbc74bcbfdd7859cb4e3b0e2aba8ee805007e8df253dde3adca6b830296" // Add your image URL here
          alt="Right Image"
          className="w-1/3 ml-6 rounded-md"
        />
      </div>
    </div>
  );
};

export default WhatYouGet;
