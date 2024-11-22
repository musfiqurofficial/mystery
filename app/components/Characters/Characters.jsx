"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

// Import character images
import CharactersImg1 from "../../asset/characters/character (1).webp";
import CharactersImg2 from "../../asset/characters/character (2).webp";
import CharactersImg3 from "../../asset/characters/character (3).webp";
import CharactersImg4 from "../../asset/characters/character (4).webp";
import CharactersImg5 from "../../asset/characters/character (5).webp";
import ques from "../../asset/DJV JUL 2358-20.jpg";

import CharacterModal from "./CharactarModal";

const Characters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Array of character details
  const characters = [
    {
      img: CharactersImg3,
      name: "Manchester Wallace",
      designation: "Editor",
      history:
        "A calculating editor with a knack for spinning headlines, Wallace took over the Galveston Tribune after his mentor’s mysterious death. His ambition is his driving force, but it’s earned him a few enemies in high places. Beneath his composed exterior, he’s a man willing to push boundaries—and people—for his next big story.",
      alibi:
        "Claims to have been in his office writing during the murders, but vague references to trips around the festival grounds suggest he was seen elsewhere. A page from his notebook, smudged and incomplete, hints at a different timeline.",
      friends:
        "A reluctant alliance with the Coroner’s Assistant, Chris Strutton, whom he pressures for insider information.",
      Enemies:
        "An open rivalry with Chief Townsend, whom he accuses of stifling the truth. Secretly despises Emily Gruene for trying to influence his reporting.",
    },
    {
      img: CharactersImg4,
      name: "Chester Townsend",
      designation: "Mage",
      history:
        "A rugged, overworked lawman who has served Galveston for decades. While committed to the town’s safety, political pressures have eroded his trust in the system. The murders weigh heavily on him, but his obsession with keeping the festival scandal-free has made him suspiciously secretive.",
      alibi:
        "He insists he was patrolling during the murders but grows defensive when asked for specifics. His flask, often empty, hints at time spent elsewhere—like the Fezziwig Pub.",
      friends:
        "Uncomfortable partnerships with both Emily Gruene and Manchester Wallace, though he trusts neither.",
      Enemies:
        "Distrusts Chris Strutton, suspecting the assistant knows more than he’s letting on.",
    },
    {
      img: CharactersImg2,
      name: "Emily Gruene",
      designation: "Archer",
      history:
        "The wife of the Mayor she will support the mayors mission to make Galveston a town of prosperity in this new age",
      alibi: "",
      friends: "",
      Enemies: "",
    },
    {
      img: CharactersImg5,
      name: "Chris Strutton",
      designation: "Knight",
      history:
        "A timid, brilliant young pathologist left to handle gruesome murders after his mentor’s abrupt departure. Chris idolized his mentor but now feels overwhelmed. He spends his nights at the Fezziwig Pub, too terrified to return to the morgue alone.",
      alibi:
        "Chris swears he was at the pub drinking during the murders. His shaky demeanor and fragmented timeline leave room for doubt. “I—I’ve seen things… shadows near the bodies…” he stammers, avoiding further detail.",
      friends:
        "Sees Wallace as an ally, though their interactions often leave him uneasy.",
      Enemies:
        "Fears Chief Townsend, who he believes might accuse him of tampering with evidence.",
    },
    {
      img: CharactersImg1,
      name: "Minerva Hargrave",
      designation: "Assassin",
      history:
        "A shadowy figure haunting Poe Alley, Minerva seeks justice for Jennifer Granger, her closest friend. Once a writer herself, she’s turned her grief into an obsessive pursuit of truth, shrouding herself in mystery and misinformation to confuse her enemies.",
      alibi:
        "Minerva claims to have been following suspects the night of the murders, but her evasiveness raises suspicions. She cryptically states, “I was where the truth needed me to be.”",
      friends:
        "A complex alliance with Emily Gruene, whom she once warned of “dark patterns.”",
      Enemies:
        "Openly distrusts Chester Townsend, referring to him as “a man in shadows.”",
    },
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
