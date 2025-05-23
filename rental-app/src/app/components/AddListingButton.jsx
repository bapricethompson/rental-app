
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const AddListingButton = ({ children, type, onClick, href, className = ""  })=> {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        onClick();
        if (href) router.push(href);
      }}
      className={`px-7 py-3 bg-mainBlue text-white md:block w-fit rounded-[10px] m-auto cursor-pointer ${
        clicked ? "bg-primary" : "bg-primary hover:bg-primaryLight"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default AddListingButton;