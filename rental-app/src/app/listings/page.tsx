"use client";
import Listing from "../components/Listing";
import SearchBar from "../components/SearchBar";
import AddListingButton from "../components/AddListingButton";
import { josefinSans } from "@/app/ui/fonts";
const ListingPage = () => {
  return (
    <main className="w-full text-center">
      <h1 className={`${josefinSans} text-4xl my-[30px]`}>Find Your Gear</h1>
      <div className="w-[90%] my-[30px] mx-auto">
        <SearchBar></SearchBar>
        <AddListingButton
          className="mr-0"
          href="/singleListing"
          onClick={() => {
            console.log("hi");
          }}
        >
          {" "}
          Add Item
        </AddListingButton>
        <Listing></Listing>
      </div>
    </main>
  );
};

export default ListingPage;
