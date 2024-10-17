"use client";

import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";

export default function DrawerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    document.getElementById("my-drawer-4").checked = false;
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        onChange={handleToggleDrawer}
      />
      <div className="drawer-content flex justify-end p-4">
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
          <VscMenu className="w-7 h-7" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu font-semibold text-[#666] bg-base-200 min-h-full w-60 px-4 py-6 relative space-y-1">
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Storyline</a>
          </li>
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Inventory</a>
          </li>
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Characters</a>
          </li>
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Clues</a>
          </li>
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Back to Map</a>
          </li>
          <li className="bg-base-300 rounded hover:text-[#444]">
            <a>Toggle Dark Mode</a>
          </li>
          {isDrawerOpen && (
            <button onClick={handleCloseDrawer}>
              <IoCloseOutline className="text-red-100 absolute top-2 -left-7 z-50 w-6 h-6" />
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}
