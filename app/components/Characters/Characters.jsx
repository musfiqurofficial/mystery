"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

// Import character images
import CharactersImg1 from "../../asset/artem-kniaz-jzJrcP2W-ZI-unsplash.jpg";
import CharactersImg2 from "../../asset/ekkapan-kwantong-itV_HUncISo-unsplash.jpg";
import CharactersImg3 from "../../asset/frank-didszuleit-XAhteEtwgV8-unsplash.jpg";
import CharactersImg4 from "../../asset/m-brauer-1YajRrIP32k-unsplash.jpg";
import CharactersImg5 from "../../asset/vitaly-gariev-bjjOM0i7uUQ-unsplash.jpg";
import CharactersImg6 from "../../asset/vitaly-gariev-JrMnc50l0eQ-unsplash.jpg";
import CharactersImg7 from "../../asset/vitaly-gariev-kjK9z5vayYg-unsplash.jpg";
import CharactersImg8 from "../../asset/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass.jpg";
import CharactersImg9 from "../../asset/yazid-n-OlomPsrE-uI-unsplash.jpg";
import ques from "../../asset/DJV JUL 2358-20.jpg";

import CharacterModal from "./CharactarModal";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Characters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Array of character details
  const characters = [
    { img: CharactersImg1, name: "John Doe", designation: "Warrior" },
    { img: CharactersImg2, name: "Jane Smith", designation: "Mage" },
    { img: CharactersImg3, name: "Alex Johnson", designation: "Archer" },
    { img: CharactersImg4, name: "Maria Williams", designation: "Knight" },
    { img: CharactersImg5, name: "Luke Brown", designation: "Assassin" },
    { img: CharactersImg6, name: "Sarah Davis", designation: "Healer" },
    { img: CharactersImg7, name: "Michael Miller", designation: "Paladin" },
    { img: CharactersImg8, name: "Emily Wilson", designation: "Necromancer" },
    { img: CharactersImg9, name: "Chris Taylor", designation: "Ranger" },
  ];

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div>
      <div className="relative px-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 2xl:px-8 h-[80vh]">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <h2 className="text-[42px] lg:text-[62px] font-bold uppercase font-mono md:mb-0 mb-6 md:-mr-20 -mr-0">
              Characters
            </h2>
            {/* <TbArrowWaveRightUp className="w-[100px] h-[100px] text-blue-500 -mr-20" /> */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {characters.map((character, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center cursor-pointer !overflow-visible"
                  onClick={() => openModal(character)}
                >
                  <Image
                    src={ques}
                    alt="?"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-[20px] p-2"
                  />
                  <div className="absolute -top-2 -right-2 w-14 h-14 text-[32px] font-extrabold rounded-full backdrop-blur-sm bg-black/30 text-white z-20 flex justify-center items-center">
                    <span>{index + 1}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Character Modal */}
      <CharacterModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        character={selectedCharacter}
      />
    </div>
  );
};

export default Characters;
