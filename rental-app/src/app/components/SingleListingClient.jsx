"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleListingClient() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listingId");
  const [listing, setListing] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (!data.length) throw new Error("Gear not found");
        setListing(data[0]);
        return fetch(`https://sd-6310-2025-summer-express-app.onrender.com/gearUsers/${data[0].owner_id}`);
      })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((userData) => {
        setUser(userData[0]);
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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
      {user && <p>Host: {user.name}</p>}
      <p>{listing.description}</p>
      <p className="font-semibold mt-4">${listing.price_per_day} / day</p>
    </div>
  );
}