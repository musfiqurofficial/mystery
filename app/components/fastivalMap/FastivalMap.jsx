"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

import mapImg from "../../asset/35573.jpg";

const styles = {
  mapContainer: {
    position: "relative",
  },
  poi: {
    position: "absolute",
    backgroundColor: "#b18d3b",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  locationCard: {
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    display: "none",
  },
  locationCardVisible: {
    display: "block",
  },
};

export default function FestivalMap() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(true);

  const handleButtonClick = () => {
    setShowPasswordPrompt(true);
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    if (password === "qwerty") {
      setShowPasswordPrompt(false);
      setLocationInfo({
        name: "Henley Green - Editor's Office",
        description:
          "Henley Green is the editor's office, filled with old books and mystery novels. A perfect place to uncover clues!",
      });
      setIsMapVisible(false);
    } else {
      alert("Incorrect password");
    }
    setPassword("");
  };

  const handleCloseModal = () => {
    setShowPasswordPrompt(false);
  };

  const handleBackToMap = () => {
    setLocationInfo(null);
    setIsMapVisible(true);
  };

  return (
    <div>
      {/* Main Container */}
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-10">
        <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
          Festival Map
        </h2>

        <center className="my-4">
          <Image
            src={mapImg}
            alt=""
            width={800}
            height={800}
            className="w-auto"
          />
        </center>
        {isMapVisible && (
          <center>
            <button
              onClick={handleButtonClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-[18px] rounded-md py-2 px-4"
            >
              Editor (Henley Green)
            </button>
          </center>
        )}

        {!isMapVisible && locationInfo && (
          <div style={styles.locationCardVisible}>
            <h2>{locationInfo.name}</h2>
            <p>{locationInfo.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleBackToMap}
            >
              Back to Map
            </button>
          </div>
        )}
      </div>

      {/* Password Modal */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <IoCloseOutline className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-semibold mb-4">Enter Password</h3>
            <form onSubmit={handleSubmitPassword}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
