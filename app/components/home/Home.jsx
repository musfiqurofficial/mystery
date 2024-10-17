"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DrawerMenu from "../DrawerMenu";

export default function Home() {
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password) {
      alert("Please enter a password.");
    } else if (password !== "qwerty") { 
      alert("Incorrect password. Please try again.");
    } else {
      router.push("/festival-map");
    }
  };

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-2xl mx-auto sm:max-w-xl w-[900px]">
          <div className="text-center">
            <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Urgent Assignment!</span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Find the editor on the corner of Strand and <br /> 23rd Street
                to get the password. Hurry!
              </p>
            </div>
            <form
              className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-blue-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
