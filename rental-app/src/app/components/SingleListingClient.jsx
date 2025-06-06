"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookingCalendar from './BookingCalendar';

export default function SingleListingClient() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listingId");
  const [listing, setListing] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleEdit = () => {
    console.log(listing.id)
  window.location.href = `/editListing?listing=${listing.id}`;
};

const handleDelete = async () => {
  const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
  if (!confirmDelete) return;

  try {
    console.log(listing.id)
    const res = await fetch(`https://sd-6310-2025-summer-express-app.onrender.com/gear/${listing.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Listing deleted successfully.");
      window.location.href = "/listings"; 
    } else {
      const error = await res.json();
      alert(`Failed to delete: ${error.message || "Unknown error"}`);
    }
  } catch (err) {
    console.error("Delete error:", err);
    alert("An error occurred while deleting the listing.");
  }
};

  useEffect(() => {
    if (!listingId) {
      setError("No listingId provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setListing(null);
    setUser(null);
    console.log(listingId);
    fetch(`https://sd-6310-2025-summer-express-app.onrender.com/gear/${listingId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gear");
        return res.json();
      })
      .then((data) => {
        console.log(data.owner_id);
        setListing(data);
        return fetch(`https://sd-6310-2025-summer-express-app.onrender.com/gearUsers/${data.owner_id}`);
      })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((userData) => {
        console.log("user", userData)
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [listingId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!listing) return <div>Listing not found</div>;

  return (
    <div className="flex flex-col md:flex-row gap-8 py-12 px-6 max-w-6xl mx-auto">
      <div className="md:w-1/2 w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="relative flex items-center justify-center bg-gray-100 border-b border-gray-300 h-64">
    <span className="material-icons text-gray-400 text-6xl select-none">
      photo
    </span>
    <div className="absolute top-2 right-2 flex space-x-2">
      <button
        onClick={handleEdit}
        className="text-S hover:text-blue-500"
        title="Edit"
      >
        <span className="material-icons">edit</span>
      </button>
      <button
        onClick={handleDelete}
        className="text-gray-600 hover:text-red-500"
        title="Delete"
      >
        <span className="material-icons">delete</span>
      </button>
    </div>
  </div>
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
    {user && <p className="text-black mb-2">Host: {user.name}</p>}
    <p className="text-black">{listing.description}</p>
    <p className="font-semibold text-lg mt-4">
      ${listing.price_per_day}{" "}
      <span className="text-black">/ day</span>
    </p>
  </div>
</div>

      
        <BookingCalendar gearId={listing.id}></BookingCalendar>
      
    </div>
  );
}
