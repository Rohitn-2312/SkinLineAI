// Check.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Check = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardInfo = [
    { heading: "Before you start - learn How to make a suitable photo", content: "Content for Card 1", image: "https://ai-derm.com/assets/slider-1-1d065c59.svg" },
    { heading: "Before you start - learn How to make a suitable photo", content: "Content for Card 2", image: "https://ai-derm.com/assets/slider-2-ab8f0d5d.svg" },
    { heading: "Before you start - learn How to make a suitable photo", content: "Content for Card 3", image: "https://ai-derm.com/assets/slider-3-c42624bb.svg" },
  ];

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard < cardInfo.length - 1 ? prevCard + 1 : prevCard));
  };

  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard > 0 ? prevCard - 1 : prevCard));
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">{cardInfo[currentCard].heading}</h1>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-md shadow-md p-6 text-center">
        {/* Image Space */}
        <div className="mb-4 mx-auto">
          {/* Insert your image here */}
          <img
            className="h-80 object-cover rounded-md mx-auto"
            src={cardInfo[currentCard].image}
            alt={`Card Image ${currentCard + 1}`}
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevCard}
            className="bg-[#0e21fe] px-4 py-2 rounded-full text-white font-bold hover:bg-blue-700 transition duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextCard}
            className="bg-[#0e21fe] px-4 py-2 rounded-full text-white font-bold hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </div>
        {currentCard === cardInfo.length - 1 && (
          <div className="mt-4">
            <Link to="/upload" className="bg-[#0e21fe] px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700 transition duration-300">
              Got It
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Check;
