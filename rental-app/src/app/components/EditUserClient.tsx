"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type UserPayload = {
  name?: string;
  email?: string;
};

export default function EditListingClient() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("user");
  const userName = searchParams.get("name");
  const userEmail = searchParams.get("email");
  console.log(userName, userEmail);
  const url = "https://sd-6310-2025-summer-express-app.onrender.com/";

  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
  });

  // Initialize form data once on mount
  useEffect(() => {
    setFormData({
      ownerName: userName || "",
      ownerEmail: userEmail || "",
    });
  }, [userName, userEmail]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID is missing, cannot submit.");
      return;
    }
    const nameChanged = formData.ownerName !== (userName || "");
    const emailChanged = formData.ownerEmail !== (userEmail || "");

    if (!nameChanged && !emailChanged) {
      alert("No changes detected.");
      return;
    }

    try {
      let method = "PUT";
      let userPayload: UserPayload = {
        name: formData.ownerName,
        email: formData.ownerEmail,
      };

      if (!nameChanged && emailChanged) {
        method = "PATCH";
        console.log("patching");
        userPayload = { email: formData.ownerEmail };
      }

      const gearRes = await fetch(`${url}gearUsers/${userId}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload),
      });

      if (gearRes.ok) {
        alert("User updated!");
        window.location.href = "/user";
      } else {
        const errorText = await gearRes.text();
        setError(errorText);
        alert(`Failed to update user. ${errorText}`);
      }
    } catch (err) {
      console.error("Error submitting user:", err);
      alert("Something went wrong. Try again.");
    }
  };

  if (error) {
    return <p className="text-center mt-20 text-red-600">Error: {error}</p>;
  }

  return (
    <main className="w-[90%] max-w-2xl mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-6 text-center">Edit User</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-6 space-y-4"
      >
        <div>
          <label
            className="block text-left font-semibold mb-1"
            htmlFor="ownerName"
          >
            Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label
            className="block text-left font-semibold mb-1"
            htmlFor="ownerEmail"
          >
            Email
          </label>
          <input
            type="email"
            id="ownerEmail"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-mainBlue hover:bg-mainBlueDark text-white font-semibold py-2 rounded-md mt-4"
        >
          Save User
        </button>
      </form>
    </main>
  );
}
