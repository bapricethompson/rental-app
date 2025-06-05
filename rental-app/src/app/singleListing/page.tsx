import React, { Suspense } from "react";
import SingleListingClient from "../components/SingleListingClient";

export default function SingleListingPage() {
  return (
    <Suspense fallback={<div>Loading listing...</div>}>
      <SingleListingClient />
    </Suspense>
  );
}
