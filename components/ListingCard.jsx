import './ListingCard.css';
const ListingCard = ({ listings=[] }) => {
  console.log(listings);
  return (
    <div>
      <div id="listingSection">
        {listings.map((listing, index) => (
          <div className="card" key={index}>
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