import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const NewsBrief = () => {
  return (
    <div className="py-[50px] ">
      <div className="px-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 2xl:px-8 relative">
        <span className="absolute top-[60px] -left-[70px] -rotate-90 text-[18px] font-mono lg:block hidden text-orange-500">
          News Brief
        </span>
        <div className="flex justify-between items-start gap-10 mb-20">
          <div className="w-[45%]">
            <h2 className="text-[52px] font-bold leading-tight uppercase mb-4">
              News <span className="block">Brief</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              sapiente doloremque. Doloribus, quia? Cum voluptatem pariatur
              minus! Provident, totam? Ipsa rerum voluptas ducimus officiis
              magnam quo sit illo suscipit blanditiis.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[white] p-6 rounded-lg shadow-md cursor-pointer group hover:shadow-xl">
              <div className="flex justify-start items-center gap-3 mb-4">
                <span className="text-[14px] font-bold uppercase text-orange-500 leading-none">
                  Category
                </span>
                <div className="w-2 h-2 bg-slate-500 rounded-full" />
                <span className="text-[14px] font-bold uppercase text-slate-500 leading-none">
                  2 june 2024
                </span>
              </div>

              <div className="flex justify-between items-center gap-2">
                <h4 className="text-[22px] font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, sit.
                </h4>

                <GoArrowUpRight className="w-8 h-8 text-slate-500 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            </div>
            <div className="bg-[white] p-6 rounded-lg shadow-md cursor-pointer group hover:shadow-xl">
              <div className="flex justify-start items-center gap-3 mb-4">
                <span className="text-[14px] font-bold uppercase text-orange-500 leading-none">
                  Category
                </span>
                <div className="w-2 h-2 bg-slate-500 rounded-full" />
                <span className="text-[14px] font-bold uppercase text-slate-500 leading-none">
                  2 june 2024
                </span>
              </div>

              <div className="flex justify-between items-center gap-2">
                <h4 className="text-[22px] font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, sit.
                </h4>

                <GoArrowUpRight className="w-8 h-8 text-slate-500 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            </div>
            <div className="bg-[white] p-6 rounded-lg shadow-md cursor-pointer group hover:shadow-xl">
              <div className="flex justify-start items-center gap-3 mb-4">
                <span className="text-[14px] font-bold uppercase text-orange-500 leading-none">
                  Category
                </span>
                <div className="w-2 h-2 bg-slate-500 rounded-full" />
                <span className="text-[14px] font-bold uppercase text-slate-500 leading-none">
                  2 june 2024
                </span>
              </div>

              <div className="flex justify-between items-center gap-2">
                <h4 className="text-[22px] font-semibold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta, sit.
                </h4>

                <GoArrowUpRight className="w-8 h-8 text-slate-500 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBrief;
