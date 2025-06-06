import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function BookingCalendar({ gearId }) {
  const [bookedDates, setBookedDates] = useState([]);

  // Fetch bookings and convert ranges to flat list of dates
  useEffect(() => {
    async function fetchBookings() {
      try {
        //HANDLE NULL
        const res = await fetch(`https://sd-6310-2025-summer-express-app.onrender.com/gearBookings/${gearId}`);
        if (!res.ok) throw new Error(`Failed to fetch bookings: ${res.status}`);
        const bookings = await res.json();
        console.log("hi", bookings);
        const allBookedDates = [];

        if (Array.isArray(bookings)) {
  bookings.forEach((booking) => {
    const start = new Date(booking.start_date);
    const end = new Date(booking.end_date);

    for (let date = new Date(start); date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
      allBookedDates.push(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())));
    }
  });
}

        setBookedDates(allBookedDates);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, [gearId]);

  // Disable any tile in bookedDates
  const isDateDisabled = ({ date }) => {
    return bookedDates.some(
      (booked) =>
        booked.getUTCFullYear() === date.getUTCFullYear() &&
        booked.getUTCMonth() === date.getUTCMonth() &&
        booked.getUTCDate() === date.getUTCDate()
    );
  };

  return (
    <div className="bg-white shadow-lg mx-auto rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Dates</h2>
      <Calendar
        tileDisabled={isDateDisabled}
        className="w-full rounded-md border border-gray-300"
      />
    </div>
  );
}