"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface Listing {
  id: string;
  title: string;
  description: string;
  price_per_day: number;
  city: string;
  state: string;
  zip: string;
  owner_id: string;
}

export default function EditListingClient() {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listing");
  const url = "https://sd-6310-2025-summer-express-app.onrender.com/";

  const [listing, setListing] = useState<Listing | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    title: "",
    description: "",
    price: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    if (!listingId) {
      setError("No listingId provided");
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const gearRes = await fetch(`${url}gear/${listingId}`);
        if (!gearRes.ok) throw new Error("Failed to fetch gear");
        const gearData = await gearRes.json();
        console.log(gearData);

        const listingData = gearData;
        setListing(listingData);

        const userRes = await fetch(`${url}gearUsers/${listingData.owner_id}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        console.log(userData.email);
        const userD = userData;
        setFormData({
          ownerName: userD?.name || "",
          ownerEmail: userD?.email || "",
          title: listingData.title || "",
          description: listingData.description || "",
          price: listingData.price_per_day
            ? listingData.price_per_day.toString()
            : "",
          city: listingData.city || "",
          state: listingData.state || "",
          zip: listingData.zip || "",
        });

        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        setLoading(false);
      }
    }

    fetchData();
  }, [listingId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!listing) {
      alert("Listing data is missing, cannot submit.");
      return;
    }

    const parsedPrice = parseFloat(formData.price);
    const priceToCompare = isNaN(parsedPrice)
      ? listing.price_per_day
      : parsedPrice;

    const normalize = (value: string | number | null | undefined) =>
      value == null ? "" : String(value).trim();

    const titleChanged = normalize(formData.title) !== normalize(listing.title);
    const descriptionChanged =
      normalize(formData.description) !== normalize(listing.description);
    const priceChanged = priceToCompare !== listing.price_per_day;
    const cityChanged = normalize(formData.city) !== normalize(listing.city);
    const stateChanged = normalize(formData.state) !== normalize(listing.state);
    const zipChanged = normalize(formData.zip) !== normalize(listing.zip);

    const onlyTitleDescPriceChanged =
      (titleChanged || descriptionChanged || priceChanged) &&
      !cityChanged &&
      !stateChanged &&
      !zipChanged;

    let method = "PUT";
    let gearPayload: Partial<Listing> = {
      title: formData.title,
      description: formData.description,
      price_per_day: priceToCompare,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      owner_id: listing.owner_id,
    };

    if (onlyTitleDescPriceChanged) {
      method = "PATCH";
      console.log("patching");
      gearPayload = {};
      if (titleChanged) gearPayload.title = formData.title;
      if (descriptionChanged) gearPayload.description = formData.description;
      if (priceChanged) gearPayload.price_per_day = priceToCompare;
    }

    console.log({
      titleChanged,
      descriptionChanged,
      priceChanged,
      cityChanged,
      stateChanged,
      zipChanged,
      onlyTitleDescPriceChanged,
      method,
      gearPayload,
      formData,
      listing,
    });

    try {
      console.log("Submitting with method:", method);
      const gearRes = await fetch(`${url}gear/${listing.id}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gearPayload),
      });

      if (gearRes.ok) {
        alert("Gear listing updated!");
        window.location.href = "/listings";
      } else {
        const errorText = await gearRes.text();
        alert(`Failed to update gear listing. ${errorText}`);
      }
    } catch (err) {
      console.error("Error submitting listing:", err);
      alert("Something went wrong. Try again.");
    }
  };

  type FormField = [string, string, string, boolean];

  const formFields: FormField[] = [
    ["ownerName", "Owner Name", "text", true],
    ["ownerEmail", "Owner Email", "email", true],
    ["title", "Listing Title", "text", false],
    ["description", "Description", "textarea", false],
    ["price", "Price Per Day ($)", "number", false],
    ["city", "City", "text", false],
    ["state", "State", "dropdown", false],
    ["zip", "ZIP Code", "text", false],
  ];

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-600">Error: {error}</p>;
  }

  return (
    <main className="w-[90%] max-w-2xl mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-6 text-center">Edit Your Gear</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-6 space-y-4"
      >
        {formFields.map(([name, label, type, readOnly]) => (
          <div key={name}>
            <label className="block text-left font-semibold mb-1">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-md p-2"
                required
                readOnly={readOnly}
              />
            ) : type === "dropdown" ? (
              <select
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
                disabled={readOnly}
              >
                <option value="">Select State</option>
                {[
                  "AL",
                  "AK",
                  "AZ",
                  "AR",
                  "CA",
                  "CO",
                  "CT",
                  "DE",
                  "FL",
                  "GA",
                  "HI",
                  "ID",
                  "IL",
                  "IN",
                  "IA",
                  "KS",
                  "KY",
                  "LA",
                  "ME",
                  "MD",
                  "MA",
                  "MI",
                  "MN",
                  "MS",
                  "MO",
                  "MT",
                  "NE",
                  "NV",
                  "NH",
                  "NJ",
                  "NM",
                  "NY",
                  "NC",
                  "ND",
                  "OH",
                  "OK",
                  "OR",
                  "PA",
                  "RI",
                  "SC",
                  "SD",
                  "TN",
                  "TX",
                  "UT",
                  "VT",
                  "VA",
                  "WA",
                  "WV",
                  "WI",
                  "WY",
                ].map((stateAbbr) => (
                  <option key={stateAbbr} value={stateAbbr}>
                    {stateAbbr}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 ${
                  readOnly ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                required
                readOnly={readOnly}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-mainBlue hover:bg-mainBlueDark text-white font-semibold py-2 rounded-md mt-4"
        >
          Save Listing
        </button>
      </form>
    </main>
  );
}
