
import ListingCard from './ListingCard';
const url="https://sd-6310-2025-summer-express-app.onrender.com/gear"
export default async function Listing() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch gear");
  }
  const listings = await res.json();

  return (
    <div>
      <ListingCard listings={listings} />
    </div>
  );
}