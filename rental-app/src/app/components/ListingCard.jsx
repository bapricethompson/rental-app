"use client";
const ListingCard = ({ listings=[] }) => {
  console.log(listings);
  return (
    <div>
      <div id="listingSection">
        {listings.map((listing, index) => (
          <div className="rounded-lg bg-card text-center w-[20%] p-[15px] my-[15px]" key={index}>
            <h2>{listing.title}</h2>
            <h3>{listing.price}</h3>
            <p>{listing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ListingCard;