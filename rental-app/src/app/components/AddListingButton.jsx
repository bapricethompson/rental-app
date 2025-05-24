"use client";
import { useState } from "react";
import Link from "next/link";

const AddListingButton = ({ children, onClick = () => {}, href, className = "" }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  const baseClassNames = `px-7 py-3 my-[30px] bg-mainBlue text-white md:block w-fit rounded-[10px] m-auto cursor-pointer ${
    clicked ? "bg-primary" : "bg-primary hover:bg-primaryLight"
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={baseClassNames}
        role="button"
        tabIndex={0}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={baseClassNames}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default AddListingButton;
