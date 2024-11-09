import React from "react";
import Image from "next/image";

export default function ClueModal({ isOpen, onClose, clue }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="text-gray-500 float-right">
          X
        </button>
        <h2 className="text-xl font-bold">{clue.name}</h2>
        <Image
          src={clue.image}
          alt={clue.name}
          width={500}
          height={500}
          className="mt-4"
        />
        <p className="mt-2 text-gray-700">{clue.details}</p>
      </div>
    </div>
  );
}
