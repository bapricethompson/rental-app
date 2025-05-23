"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const GoButton = ({ children, type, onClick, href })=> {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        onClick();
        if (href) router.push(href);
      }}
      className={`px-7 py-3 text-white bg-mainBlue md:block w-fit rounded-[10px] m-auto cursor-pointer ${
        clicked
          ? "bg-primary"
          : "bg-primary hover:bg-primaryLight"
      }`}
    >
      {children}
    </div>
  );
}

export default GoButton;