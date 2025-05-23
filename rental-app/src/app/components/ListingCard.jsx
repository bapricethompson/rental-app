"use client";
import React, { useState } from 'react';

const ListingCard = ({ listings = [] }) => {
  const [starred, setStarred] = useState({});

  const toggleStar = (index) => {
    setStarred((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-[90%] mx-auto flex justify-between flex-wrap relative">
      {listings.map((listing, index) => (
        <div
          className="relative rounded-lg bg-card text-center w-[22%] p-[15px] my-[15px]"
          key={index}
        >
          <button
            onClick={() => toggleStar(index)}
            className="absolute top-2 right-2 text-xl"
            title={starred[index] ? "Unstar" : "Star"}
          >
            <span className="material-icons">
              {starred[index] ? "star" : "star_border"}
            </span>
          </button>
          <h2>{listing.title}</h2>
          <h3>{listing.price}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
