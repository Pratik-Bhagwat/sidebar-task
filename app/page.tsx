"use client";

import { SidebarMenuItem } from "@/components/sidebar-menu-item";
import { TooglButton } from "@/components/toogle-button";
import { sidebarItems } from "@/config";
import { useState } from "react";

export default function Home() {
  const [isExpand, setIsExpand] = useState(true);

  return (
    <aside className="space-y-2 h-screen">
      <TooglButton isExpand={isExpand} setIsExpand={setIsExpand} />
      {isExpand && (
        <div className="w-52 border-r h-full">
          <div>
            <ul className="w-full divide-y flex flex-col">
              {sidebarItems.map((item, idx) => (
                <SidebarMenuItem key={idx} item={item} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
}
