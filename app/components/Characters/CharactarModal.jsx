import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";

import enemies from "../../asset/boxing-gloves.png";
import history from "../../asset/parchment.png";
import alibi from "../../asset/clock.png";
import friend from "../../asset/laugh.png";

const CharacterModal = ({ isOpen, closeModal, character }) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openPasswordModal = (option) => {
    setSelectedOption(option);
    setIsPasswordModalOpen(true);
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPassword("");
    setIsAuthenticated(false);
  };

  const handlePasswordSubmit = () => {
    if (password === "qwert") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 backdrop-blur-lg bg-[black]/50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full h-[90vh] overflow-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-[#ff3838] hover:text-gray-400"
          >
            X
          </button>
          {character && (
            <div className="text-center">
              <h2 className="text-[22px] font-bold uppercase mb-4">
                {character.name}
              </h2>
              <Image
                src={character.img}
                alt={character.name}
                width={500}
                height={500}
                className="w-full object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 text-[18px]">
                {character.designation}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                {["History", "Alibi", "Friend", "Enemies"].map((option, index) => (
                  <div
                    key={option}
                    className="bg-[#EDEADE] p-6 rounded-xl shadow cursor-pointer hover:shadow-xl"
                    onClick={() => openPasswordModal(option)}
                  >
                    <center>
                      <Image
                        src={
                          option === "History"
                            ? history
                            : option === "Alibi"
                            ? alibi
                            : option === "Friend"
                            ? friend
                            : enemies
                        }
                        alt={option}
                        width={150}
                        height={150}
                        className="w-auto h-[80px]"
                      />
                    </center>
                    <p className="text-center text-[24px] mt-3 font-semibold">
                      {option}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogPanel>
      </div>

      {/* Password Modal */}
      <Dialog
        open={isPasswordModalOpen}
        onClose={closePasswordModal}
        className="relative z-50"
      >
        <div className="fixed inset-0 backdrop-blur-md bg-[black]/50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={closePasswordModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
            {!isAuthenticated ? (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Enter Password</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter password"
                />
                <button
                  onClick={handlePasswordSubmit}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">{selectedOption}</h2>
                <p className="text-gray-600">
                  {selectedOption === "History"
                    ? "Detailed history information here..."
                    : selectedOption === "Alibi"
                    ? "Detailed alibi information here..."
                    : selectedOption === "Friend"
                    ? "Information about friends..."
                    : "Details about enemies..."}
                </p>
                <button
                  onClick={closePasswordModal}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </Dialog>
  );
};

export default CharacterModal;
