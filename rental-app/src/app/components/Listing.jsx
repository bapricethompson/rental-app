
import ListingCard from './ListingCard';
export default function Listing({listings}) {
  return (
    <div>
      <ListingCard listings={listings} />
    </div>
  );
}