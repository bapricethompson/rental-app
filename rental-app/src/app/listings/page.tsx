import SearchBar from "../components/SearchBar";
import AddListingButton from "../components/AddListingButton";
import ListingClient from "../components/Listing"; // NEW
import { josefinSans } from "@/app/ui/fonts";

export default async function ListingPage() {
  const url = "https://sd-6310-2025-summer-express-app.onrender.com/gear";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch gear");
  }

  const listings = await res.json();

  return (
    <main className="w-full text-center">
      <h1 className={`${josefinSans} text-4xl my-[40px]`}>Find Your Gear</h1>
      <div className="w-[90%] my-[30px] mx-auto">
        <SearchBar />
        <AddListingButton className="mr-0" href="/createListing">
          Add Item
        </AddListingButton>
        <ListingClient listings={listings} />
      </div>
    </main>
  );
}
