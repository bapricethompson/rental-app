"use client";
import { useState } from "react";
import Link from "next/link";

const GoButton = ({ children, onClick = () => {}, href, className = "" }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  const buttonContent = (
    <div
      onClick={handleClick}
      className={`px-7 py-3 text-white bg-mainBlue md:block w-fit rounded-[10px] m-auto cursor-pointer ${
        clicked ? "bg-primary" : "bg-primary hover:bg-primaryLight"
      } ${className}`}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default GoButton;
