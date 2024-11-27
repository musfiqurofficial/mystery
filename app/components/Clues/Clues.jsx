"use client";

import { clues } from "@/data/clues";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const Clues = () => {
  const [currentClueIndex, setCurrentClueIndex] = useState(null);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleOpenModal = (index) => {
    setCurrentClueIndex(index);
    setPassword("");
    setIsPasswordCorrect(false);
  };

  const handleCloseModal = () => {
    setCurrentClueIndex(null);
    setPassword("");
    setIsPasswordCorrect(false);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (clues[currentClueIndex]?.password === password) {
      setIsPasswordCorrect(true);
    } else {
      alert("Incorrect password, please try again!");
    }
  };

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-10">
      <h2 className="text-[32px] font-bold uppercase text-center mb-6">
        Clues
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clues.map((clue, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(index)}
              className={`flex justify-center items-center ${clue.color} rounded-lg w-[200px] h-[200px] cursor-pointer hover:scale-105 transition-transform`}
            >
              <span className="text-4xl">?</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentClueIndex !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative w-[300px]">
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <IoCloseOutline className="w-5 h-5" />
            </button>

            {!isPasswordCorrect ? (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Scan QR Code</h3>
                <center>
                  <QRCodeSVG
                    value={JSON.stringify({
                      password: clues[currentClueIndex].password,
                    })}
                    size={200}
                  />
                </center>
                <form onSubmit={handleSubmitPassword} className="mt-4">
                  <input
                    type="password"
                    placeholder="Type Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div className="">
                <h3 className="text-[32px] font-semibold mb-4 text-center font-mono">
                  {clues[currentClueIndex].name}
                </h3>
                <Image
                  width={500}
                  height={500}
                  src={clues[currentClueIndex].photo}
                  alt={clues[currentClueIndex].name}
                  className="mb-4 w-full h-auto rounded"
                />
                <p className="text-[18px] text-justify">{clues[currentClueIndex].item}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Clues;
