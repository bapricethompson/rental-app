"use client";
import { useState } from "react";

export default function SingleListing() {
  const url = "https://sd-6310-2025-summer-express-app.onrender.com/";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usersRes = await fetch(`${url}gearUsers`);
      const users: { id: number; email: string; name: string }[] =
        await usersRes.json();
      const existingUser = users.find(
        (user: { email: string }) => user.email === formData.ownerEmail
      );

      let ownerId: number;

      if (existingUser) {
        ownerId = existingUser.id;
      } else {
        // Create the user
        const createUserRes = await fetch(`${url}gearUsers`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.ownerName,
            email: formData.ownerEmail,
          }),
        });

        const newUser: { id: number } = await createUserRes.json();
        ownerId = newUser.id;
      }

      // Post the gear listing
      const gearPayload = {
        title: formData.title,
        description: formData.description,
        price_per_day: parseFloat(formData.price),
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        owner_id: ownerId,
      };
      console.log(gearPayload);
      const gearRes = await fetch(`${url}gear`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gearPayload),
      });

      if (gearRes.ok) {
        alert("Gear listing submitted!");
        setFormData({
          ownerName: "",
          ownerEmail: "",
          title: "",
          description: "",
          price: "",
          city: "",
          state: "",
          zip: "",
        });
      } else {
        alert("Failed to post gear listing.");
      }
    } catch (err) {
      console.error("Error submitting listing:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <main className="w-[90%] max-w-2xl mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-6 text-center">List Your Gear!</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-6 space-y-4"
      >
        {[
          ["ownerName", "Owner Name", "text"],
          ["ownerEmail", "Owner Email", "email"],
          ["title", "Listing Title", "text"],
          ["description", "Description", "textarea"],
          ["price", "Price Per Day ($)", "number"],
          ["city", "City", "text"],
          ["state", "State", "text"],
          ["zip", "ZIP Code", "text"],
        ].map(([name, label, type]) => (
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
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-mainBlue hover:bg-mainBlueDark text-white font-semibold py-2 rounded-md mt-4"
        >
          Submit Listing
        </button>
      </form>
    </main>
  );
}
