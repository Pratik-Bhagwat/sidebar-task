"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface TooglButtonProps {
  isExpand: boolean;
  setIsExpand: Dispatch<SetStateAction<boolean>>;
}

export const TooglButton = ({ setIsExpand, isExpand }: TooglButtonProps) => {
  const handleClick = () => {
    setIsExpand((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="size-10 rounded-full bg-blue-500/25 flex items-center justify-center"
    >
      <Image
        src={
          !isExpand
            ? "https://api.iconify.design/mdi:arrow-expand-right.svg"
            : "https://api.iconify.design/mdi:arrow-expand-left.svg"
        }
        alt={!isExpand ? "expand right arrow" : "expand left arrow"}
        height={20}
        width={20}
      />
    </button>
  );
};
