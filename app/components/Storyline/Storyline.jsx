import React from "react";
import Image from "next/image";
import storyImg from "../../asset/characters/DALL·E 2024-11-19 18.56.05 - A cinematic and moody illustration capturing the bustling Victorian streets of Galveston during a festive evening. Gas lamps cast a warm glow over cob.webp";
import storyImg2 from "../../asset/characters/DALL·E 2024-11-19 18.58.48 - A cinematic and atmospheric illustration depicting a dark Victorian alley in Galveston, shrouded in mystery and tension. The scene features dim lanter.webp";
import storyImg3 from "../../asset/characters/DALL·E 2024-11-19 18.59.39 - A cinematic and atmospheric illustration of Poe Alley at night, depicting the body of Abigail Marsh arranged in a haunting and deliberate manner on th.webp";

const Storyline = () => {
  return (
    <div className="my-[50px] ">
      <div className="px-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 2xl:px-8 relative">
        <span className="absolute top-[60px] -left-[70px] -rotate-90 text-[18px] font-mono lg:block hidden text-orange-500">
          First Edition
        </span>
        <div>
          <div>
            <h2 className="text-[52px] font-bold leading-tight uppercase">
              First <span className="block">Edition</span>
            </h2>
            <hr className="my-4 lg:w-[46%] border-4 border-gray-200" />
            <div className="grid lg:grid-cols-2 gap-10  mb-20">
              <div>
                {" "}
                <h3 className="text-[32px] font-medium">ACT I: </h3>
                <h5 className="text-[18px] font-semibold mt-4">
                  Shadows at Night
                </h5>
                <p className="my-2 text-justify">
                  The bustling streets of Galveston are alight with festive
                  cheer, but beneath the surface, whispers of death creep into
                  the city&apos;s veins. Editor Wallace has tasked you with
                  uncovering the truth behind Jennifer Granger&apos;s mysterious
                  demise. As the story unfolds, questions arise: What did
                  Jennifer know? And why does Wallace seem so eager to use her
                  death for his gain?
                </p>
                <p className="my-2 text-justify">
                  Interview Wallace to receive key details about Jennifer’s
                  death. Locate Chester Townsend to probe his knowledge of the
                  crime scene. Collect clues about Jennifer’s connections (e.g.,
                  her work with Emily Gruene).
                </p>
              </div>
              <Image
                src={storyImg}
                alt=""
                width={500}
                height={500}
                className="shadow-md rounded lg:-mt-4 w-full"
              />
            </div>
            <div className="w-full flex justify-end">
              <hr className="lg:w-[48%] border-4 border-gray-200" />
            </div>
            <div className="grid lg:grid-cols-2 gap-10 my-4">
              <Image
                src={storyImg2}
                alt=""
                width={500}
                height={500}
                className="shadow-md rounded lg:-mt-4 w-full"
              />
              <div>
                {" "}
                <h3 className="text-[32px] font-medium">ACT II: </h3>
                <h5 className="text-[18px] font-semibold mt-4">
                  Galveston’s Night of Secrets&quot;
                </h5>
                <p className="my-2 text-justify">
                  Galveston’s dark alleys hold more than just shadows; they
                  whisper of power plays and deadly secrets. As you dive deeper
                  into the mystery, a pattern emerges—one that ties the lives of
                  young women to those in positions of influence. The coroner’s
                  assistant, shaken and terrified, reveals eerie similarities
                  between the recent deaths and the infamous Ripper murders in
                  London. But who is manipulating the pieces on this deadly
                  chessboard?
                </p>
                <p className="my-2 text-justify">
                  Explore the coroner’s office for missing reports and
                  fragmented notes. Interview Emily Gruene to uncover her link
                  to the victims. Return to Chester Townsend and press him for
                  information on his suspect list.
                </p>
              </div>
            </div>
            <hr className="my-4 lg:w-[46%] border-4 border-gray-200" />
            <div className="grid lg:grid-cols-2 gap-10  mb-20">
              <div>
                {" "}
                <h3 className="text-[32px] font-medium">ACT III: </h3>
                <h5 className="text-[18px] font-semibold mt-4">
                  The Ripper’s Return?
                </h5>
                <p className="my-2 text-justify">
                  The body of Abigail Marsh lies in Poe Alley, her lifeless form
                  arranged in haunting detail. It’s a message—a warning. The
                  Woman in Black emerges from the shadows, revealing threads of
                  conspiracy and betrayal woven into the festival’s fabric. With
                  every step closer to the truth, the stakes rise. Can you
                  untangle the web before the killer strikes again?
                </p>
                <p className="my-2 text-justify">
                  Decide whether to confront Wallace, Chester, or Emily based on
                  evidence. Follow Minerva’s guidance to piece together the
                  killer’s identity. Present the final deduction through the app
                  to reveal the true perpetrator.
                </p>
              </div>
              <Image
                src={storyImg3}
                alt=""
                width={500}
                height={500}
                className="shadow-md rounded lg:-mt-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyline;
