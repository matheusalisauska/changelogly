"use client";
import React, { useState } from "react";

interface SidebarMobileProps {
  children: React.ReactNode;
}

export const SidebarMobile = ({ children }: SidebarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{children}</button>
      {isOpen && (
        <div className="flex flex-col fixed top-0 left-0 bg-white-500 w-screen h-screen">

        </div>
      )}

    </div >
  );
};
