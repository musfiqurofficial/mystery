"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

import mapImg from "../../asset/35573.jpg";

const styles = {
  locationCardVisible: {
    display: "block",
  },
};

export default function FestivalMap() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("");

  // Location Data
  const locations = {
    Henley: {
      name: "Henley Green - Editor's Office",
      description:
        "Henley Green is the editor's office, filled with old books and mystery novels. A perfect place to uncover clues!",
      password: "Henley",
    },
    Poe: {
      name: "Edgar Allan Poe Alley",
      description:
        "A dimly lit alley named after the famous writer, it hides secrets in its shadows.",
      password: "Poe",
    },
    Fezziwig: {
      name: "Fezziwig Pub",
      description:
        "A bustling pub with hearty laughter, live music, and the smell of roasted meat.",
      password: "Fezziwig",
    },
    Special: {
      name: "Center Square",
      description:
        "The heart of the festival, filled with performers, food stalls, and curious onlookers.",
      password: "Special",
    },
  };

  // Handle button click to show the password prompt
  const handleButtonClick = (locationKey) => {
    setSelectedLocation(locationKey);
    setShowPasswordPrompt(true);
  };

  // Handle password submission
  const handleSubmitPassword = (event) => {
    event.preventDefault();
    if (password === locations[selectedLocation].password) {
      setShowPasswordPrompt(false);
      setLocationInfo(locations[selectedLocation]);
      setIsMapVisible(false);
    } else {
      alert("Incorrect password");
    }
    setPassword("");
  };

  const handleCloseModal = () => {
    setShowPasswordPrompt(false);
    setPassword("");
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
            alt="Festival Map"
            width={800}
            height={800}
            className="w-auto"
          />
        </center>

        {/* Buttons */}
        {isMapVisible && (
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(locations).map((key) => (
              <button
                key={key}
                onClick={() => handleButtonClick(key)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-[18px] rounded-md py-2 px-4"
              >
                {locations[key].name.split(" - ")[0]}
              </button>
            ))}
          </div>
        )}

        {/* Location Information */}
        {!isMapVisible && locationInfo && (
          <div style={styles.locationCardVisible} className="text-center">
            <h2 className="text-xl font-bold">{locationInfo.name}</h2>
            <p className="text-gray-700">{locationInfo.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
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

            <h3 className="text-lg font-semibold mb-4">Password Protected</h3>
            <form onSubmit={handleSubmitPassword}>
              <input
                type="password"
                placeholder="Type Password ..."
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
