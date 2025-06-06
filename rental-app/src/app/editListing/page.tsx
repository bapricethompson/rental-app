import React, { Suspense } from "react";
import EditListingClient from "../components/EditListingClient";

export default function EditListingPage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <EditListingClient />
    </Suspense>
  );
}
