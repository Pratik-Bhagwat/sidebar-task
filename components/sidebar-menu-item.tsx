"use client";

import { SidebarMenuItemI } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface SidebarMenuItemaProps {
  item: SidebarMenuItemI;
}

export const SidebarMenuItem = ({ item }: SidebarMenuItemaProps) => {
  const hasSubMenu = item?.subMenu && item?.subMenu?.length > 0;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li className="p-2">
      <button
        onClick={handleClick}
        className="flex items-center justify-center space-x-3"
      >
        <span>{item.title}</span>
        {hasSubMenu && (
          <Image
            src={
              !isClicked
                ? "https://api.iconify.design/mdi:chevron-down.svg"
                : "https://api.iconify.design/mdi:chevron-up.svg"
            }
            alt={!isClicked ? "down arrow" : "up arrow"}
            height={20}
            width={20}
          />
        )}
      </button>
      {isClicked && hasSubMenu && (
        <ul className="w-full divide-y flex flex-col">
          {item?.subMenu?.map((subItem, index) => (
            <SidebarMenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};
