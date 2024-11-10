"use client";

import React, { useState } from "react";
import ClueModal from "./ClueModal";

import cluesImg from "../../asset/images/tree-lawns.jpg";

export const clues = [
  {
    name: "Old Map",
    image: cluesImg,
    details: "A faded map showing a path through the forest.",
  },
  {
    name: "Rusty Key",
    image: cluesImg,
    details: "An old key that looks like it hasn’t been used in years.",
  },
  {
    name: "Mysterious Letter",
    image: cluesImg,
    details: "Meet me around the shed at midnight. M.H.",
  },
  {
    name: "Torn Photograph",
    image: cluesImg,
    details: "A photo torn in half, showing a familiar face.",
  },
  {
    name: "Ancient Coin",
    image: cluesImg,
    details: "An ancient coin with strange symbols on it.",
  },
  {
    name: "Broken Compass",
    image: cluesImg,
    details: "A broken compass that only points north.",
  },
  {
    name: "Secret Diary",
    image: cluesImg,
    details: "The diary has entries mentioning hidden treasures.",
  },
  {
    name: "Locked Box",
    image: cluesImg,
    details: "A small box with a lock, but no key in sight.",
  },
];

const Clues = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClue, setSelectedClue] = useState(null);

  const openClueModal = (index) => {
    setSelectedClue(clues[index]);
    setIsModalOpen(true);
  };

  const closeClueModal = () => {
    setIsModalOpen(false);
    setSelectedClue(null);
  };

  const lightColors = [
    "bg-pink-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-orange-100",
  ];

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-10">
      <h2 className="text-[32px] font-bold uppercase text-center mb-6">Clues</h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clues.map((_, index) => (
            <div
              key={index}
              onClick={() => openClueModal(index)}
              className={`flex justify-center items-center ${
                lightColors[index % lightColors.length]
              } rounded-lg w-[200px] h-[200px] cursor-pointer hover:scale-75 translate-x-4 skew-y-3 ease-in-out delay-150 md:transform-none`}
            >
              <span className="text-4xl">?</span>
            </div>
          ))}
        </div>
      </div>

      <ClueModal
        isOpen={isModalOpen}
        onClose={closeClueModal}
        clue={selectedClue}
      />
    </div>
  );
};

export default Clues;
