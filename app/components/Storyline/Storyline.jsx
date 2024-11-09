import React from "react";
import Image from "next/image";
import storyImg from "../../asset/tree-lawns.jpg";
import storyImg2 from "../../asset/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass.jpg";

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
                <h3 className="text-[32px] font-medium">North Bound</h3>
                <h5 className="text-[18px] font-semibold mt-4">
                  Interior Design and Builders
                </h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  tempora tempore officia ut, odit hic quam quod, quo
                  consequuntur blanditiis distinctio! Saepe minus maiores atque
                  assumenda expedita deleniti modi eaque quo consectetur
                  deserunt, eligendi officia esse inventore quae voluptatibus
                  neque in asperiores voluptates consequuntur! Magni quos
                  exercitationem excepturi officia voluptas doloremque aliquid
                  deleniti accusantium quasi molestias dolore ipsum, perferendis
                  et iste ab sint mollitia delectus dolor nemo iusto iure eius!
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
                <h3 className="text-[32px] font-medium">North Bound</h3>
                <h5 className="text-[18px] font-semibold mt-4">
                  Interior Design and Builders
                </h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  tempora tempore officia ut, odit hic quam quod, quo
                  consequuntur blanditiis distinctio! Saepe minus maiores atque
                  assumenda expedita deleniti modi eaque quo consectetur
                  deserunt, eligendi officia esse inventore quae voluptatibus
                  neque in asperiores voluptates consequuntur! Magni quos
                  exercitationem excepturi officia voluptas doloremque aliquid
                  deleniti accusantium quasi molestias dolore ipsum, perferendis
                  et iste ab sint mollitia delectus dolor nemo iusto iure eius!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyline;
