"use client";
import React, { useState } from "react";

const ListingCard = ({ listings = [] }) => {
  const [starred, setStarred] = useState({});

  const toggleStar = (index) => {
    setStarred((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-[90%] mx-auto flex flex-wrap justify-between gap-6 relative">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg border border-gray-200 shadow-md w-[22%] hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div className="flex items-center justify-center bg-gray-100 border-b border-gray-300 rounded-t-lg h-40">
            <span className="material-icons text-gray-400 text-6xl select-none">
              photo
            </span>
          </div>

        
          <button
            onClick={() => toggleStar(index)}
            className={`absolute top-3 right-3 text-2xl transition-colors duration-300 ${
              starred[index] ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
            }`}
            title={starred[index] ? "Unstar" : "Star"}
          >
            <span className="material-icons">
              {starred[index] ? "star" : "star_border"}
            </span>
          </button>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between"> 
              <h2 className="text-lg font-semibold mb-1 truncate">{listing.title}</h2>
              <h3 className="text-md font-medium text-gray-700 mb-3">{listing.price}</h3>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3 flex-grow">{listing.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
