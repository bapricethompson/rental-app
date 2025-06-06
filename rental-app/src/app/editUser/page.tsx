import React, { Suspense } from "react";
import EditUserClient from "../components/EditUserClient";

export default function EditUserPage() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading...</p>}>
      <EditUserClient />
    </Suspense>
  );
}
