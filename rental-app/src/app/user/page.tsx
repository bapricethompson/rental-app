"use client";
import { useEffect, useState } from "react";
import { josefinSans } from "@/app/ui/fonts";

const url = "https://sd-6310-2025-summer-express-app.onrender.com/";

interface User {
  id: number;
  email: string;
  name: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`${url}gearUsers`);
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  const handleEdit = (userId: number, userName: string, userEmail: string) => {
    console.log(userId);
    window.location.href = `/editUser?user=${userId}&name=${encodeURIComponent(
      userName
    )}&email=${encodeURIComponent(userEmail)}`;
  };

  const handleDelete = async (userId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://sd-6310-2025-summer-express-app.onrender.com/gearUsers/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        alert("User deleted successfully.");
        window.location.href = "/user";
      } else {
        const error = await res.json();
        alert(`Failed to delete: ${error.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting the user.");
    }
  };

  return (
    <div className={`${josefinSans.className} py-[40px]`}>
      <h1 className="text-center text-4xl mb-6">Manage Users</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <ul data-testid="ul" className="w-[90%] max-w-3xl mx-auto space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded shadow-sm bg-white text-black"
          >
            <div className="mr-0 w-full flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(user.id, user.name, user.email)}
                className="text-gray-600 hover:text-blue-500"
                title="Edit"
              >
                <span className="material-icons">edit</span>
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-gray-600 hover:text-red-500"
                title="Delete"
              >
                <span className="material-icons">delete</span>
              </button>
            </div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
