import React from "react";
import flash from "../assets/icon-reaction.svg";
import brain from "../assets/icon-memory.svg";
import msg from "../assets/icon-verbal.svg";
import visual from "../assets/icon-visual.svg";

const ResultsSummary = () => {
  return (
    <div
      className=" flex-row max-sm:flex-col max-sm:w-[70%]  
    flex w-[35%] drop-shadow-2xl  h-[50%] m-auto  justify-center mt-[15%] rounded-2xl ">
      <div
        className="max-sm:rounded-b-2xl
      bg-[#6642FE]  w-[100%] text-center rounded-2xl  ">
        <div
          className=" 
        pt-6 text-white">
          <h4
            className="max-sm:text-lg
          font-[600] text-xl text-[#C8C7FF] font-hanken ">
            Your Result
          </h4>
          <div
            className="max-sm:w-32 max-sm:h-32 max-sm:mt-7
          bg-[#5F3FFC] shadow-inner w-40 h-40  m-auto mt-10 rounded-b-none rounded-br-[45%] rounded-bl-[45%]  rounded-[50%]">
            <p
              className="max-sm:text-5xl max-sm:pt-8
            font-[600] text-6xl pt-[43px] font-hangro">
              76
            </p>
            <p
              className="
            text-[#C8C7FF] font-hanken">
              of 100
            </p>
          </div>
          <h2
            className="max-sm:text-2xl max-sm:mt-4
          font-[600] font-grotesk text-4xl mt-5">
            Great
          </h2>
          <p
            className="max-sm:w-[15rem] max-sm:text-sm max-sm:mt-2
          mt-4 w-[14rem] mb-8  m-auto font-hanken text-[#C8C7FF]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      {/* second  */}
      <div
        className="max-sm:rounded-none mb-2 
      bg-white w-[100%] font-hanken rounded-r-2xl">
        <div
          className="max-sm:ml-6 max-sm:mt-5
        ml-10 mt-7 ">
          <h2
            className="max-sm:text-base
          font-[600] text-xl text-[#303B5A] ">
            Summary
          </h2>

          <div
            className="max-sm:w-[15rem] max-sm:text-[16px] 
             flex rounded-xl w-[17rem] h-12 my-4 bg-[#FFDBE3]
           text-base font-[500] ">
            <img className="my-3.5 mx-4" src={flash} />
            <h3 className="my-3.5  text-[#FF5757]">Reaction</h3>
            <p className="flex-1 text-right mr-3 my-3.5">80/100</p>
          </div>

          <div
            className="max-sm:w-[15rem] max-sm:text-[16px]
          flex rounded-xl  w-[17rem] h-12 my-4 bg-[#FEFBF2] text-base font-[500] ">
            <img className="my-3.5 mx-4" src={brain} />
            <h3 className="my-3.5 text-[#FFB01F]">Memory</h3>
            <p className="flex-1 text-right mr-3 my-3.5">92/100</p>
          </div>
          <div
            className="max-sm:w-[15rem] max-sm:text-[16px]
          flex rounded-xl  w-[17rem] h-12 my-4 bg-[#F2FBFA] text-base font-[500] ">
            <img className="my-3.5 mx-4" src={msg} />
            <h3 className="my-3.5 text-[#00BD91]">Verbel</h3>
            <p className="flex-1 text-right mr-3 my-3.5">61/100</p>
          </div>
          <div
            className="max-sm:w-[15rem] max-sm:text-[16px]
          flex rounded-xl w-[17rem] h-12 my-4 bg-[#F2F3FF] text-base font-[500] ">
            <img className="my-3.5 mx-4" src={visual} />
            <h3 className="my-3.5 text-[#1125D4]">Visual</h3>
            <p className="flex-1 text-right mr-3 my-3.5">72/100</p>
          </div>
          <button
            className="max-sm:w-[15rem] max-sm:text-[16px]
          w-[17rem] h-12 rounded-full my-4 bg-[#303B5A] text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
