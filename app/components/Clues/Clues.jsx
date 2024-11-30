"use client";

import { clues } from "@/data/clues";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { FaBackspace } from "react-icons/fa";

const Clues = () => {
  const [currentClueIndex, setCurrentClueIndex] = useState(null);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const [unlockedClues, setUnlockedClues] = useState(() =>
    Array(clues.length).fill(false)
  );
  const [animatedClueIndex, setAnimatedClueIndex] = useState(null);
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);

  const handleOpenModal = (index) => {
    setCurrentClueIndex(index);
    setPassword("");
    setIsPasswordCorrect(unlockedClues[index]);

    if (!unlockedClues[index]) {
      const letters = clues[index].password.split("");
      const scrambled = letters
        .concat(letters.slice().reverse())
        .sort(() => Math.random() - 0.5);
      setScrambledLetters(scrambled);
    }
  };

  const handleCloseModal = () => {
    setCurrentClueIndex(null);
    setPassword("");
    setIsPasswordCorrect(false);
    setScrambledLetters([]);
  };

  const handleWordClick = (word) => {
    setPassword((prev) =>
      (prev + word).slice(0, clues[currentClueIndex].password.length)
    );
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (clues[currentClueIndex]?.password === password) {
      setIsPasswordCorrect(true);
      setUnlockedClues((prev) => {
        const updated = [...prev];
        updated[currentClueIndex] = true;
        return updated;
      });

      setAnimatedClueIndex(currentClueIndex);
      setTimeout(() => setAnimatedClueIndex(null), 1000);
    } else {
      alert("Incorrect password, please try again!");
      setPassword("");
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
              className={`flex justify-center items-center rounded-lg w-[200px] h-[200px] cursor-pointer hover:scale-105 transition-transform ${
                unlockedClues[index]
                  ? `bg-green-500 ${
                      index === animatedClueIndex ? "animate-unlock" : ""
                    }`
                  : clue.color
              }`}
              style={{
                backgroundColor: unlockedClues[index] ? "#4CAF50" : clue.color,
              }}
            >
              <span className="text-[100px] font-light font-sans">
                {unlockedClues[index] ? "✓" : "?"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentClueIndex !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className={`bg-white p-6 rounded shadow-lg relative w-[480px]`}>
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <IoCloseOutline className="w-5 h-5" />
            </button>

            {!isPasswordCorrect ? (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">
                  Solve the Word Puzzle
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {scrambledLetters.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleWordClick(word)}
                      className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-400 text-[20px]"
                    >
                      {word}
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={handleSubmitPassword}
                  className="flex justify-between items-center gap-4 mt-10"
                >
                  <div className="relative w-full h-[40px]">
                    <input
                      type="text"
                      placeholder="Password"
                      value={password}
                      readOnly
                      className="w-full h-full px-2 border rounded bg-gray-100 cursor-not-allowed"
                    />
                    <button
                      type="button"
                      onClick={() => setPassword((prev) => prev.slice(0, -1))}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    >
                      <FaBackspace className="w-5 h-5 hover:text-[#777]" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-1 h-[40px] rounded w-[30%]"
                  >
                    Unlock
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <div
                  className="flex justify-center mb-3 cursor-pointer"
                  onClick={() => setIsFullScreenImage(true)}
                >
                  <Image
                    width={500}
                    height={500}
                    src={clues[currentClueIndex].photo}
                    alt={clues[currentClueIndex].name}
                    className="mb-4 w-auto h-[45vh] rounded"
                  />
                </div>
                <h3 className="text-[32px] font-semibold mb-4 text-blue-500 font-mono">
                  {clues[currentClueIndex].name}
                </h3>
                <p className="text-[18px] text-justify">
                  {clues[currentClueIndex].item}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full-Screen Image */}
      {isFullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setIsFullScreenImage(false)}
        >
          <Image
            width={800}
            height={800}
            src={clues[currentClueIndex]?.photo}
            alt={clues[currentClueIndex]?.name}
            className="w-auto h-auto max-w-full max-h-[80vh]"
          />
        </div>
      )}
    </div>
  );
};

export default Clues;
