"use client";
const ListingCard = ({ listings=[] }) => {
  console.log(listings);
  return (
    <div className="w-[90%] mx-auto flex justify-between  flex-wrap ">
        {listings.map((listing, index) => (
          <div className="rounded-lg bg-card text-center w-[22%] p-[15px] my-[15px]" key={index}>
            <h2>{listing.title}</h2>
            <h3>{listing.price}</h3>
            <p>{listing.description}</p>
          </div>
        ))}
    </div>
  );
};


export default ListingCard;