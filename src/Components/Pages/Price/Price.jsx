import React from "react";
import data from "../../../images/data.png";
import CostSheet from "../../Modals/CostSheet";
import PreLaunchOffer from "../../Modals/PreLaunchOffer";

const Price = () => {
  return (
    <div className=" container mx-auto mt-16 mb-10 p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-display font-semibold">
          Orchid Nirvana 3.0 Price
        </h1>
      </div>

      <div className="flex flex-wrap justify-around gap-2 p-6 lg:p-16">
        <div className="h-64 w-80 border-2 border-black block text-center ">
          <div className="mt-10 font-semibold text-2xl">30x40-1200.ft</div>
          <div className="text-xl">Price- On Request</div>
          <div>
            <PreLaunchOffer/>
          </div>
        </div>
        <div className="h-64 w-80 border-2 border-black block text-center">
          <div className="mt-10 font-semibold text-2xl">30x40-1200.ft</div>
          <div className="text-xl">Price- On Request</div>
          <div>
          <PreLaunchOffer/>
          </div>
        </div>
        <div className="h-64 w-80 border-2  border-black block text-center">
          <div className="mt-10 font-semibold text-2xl">30x40-1200.ft</div>
          <div className="text-xl">Price- On Request</div>
          <div>
          <PreLaunchOffer/>
          </div>
        </div>
      </div>
      <div className="mt-24 ">
        <div className="text-center text-2xl ">
          Download detailed cost sheet{" "}
        </div>
        <div className="flex justify-center">
          <img
            className="m-5 p-6 lg:p-4 "
            src={data}
            height="970px"
            width="360px"
          />
        </div>
        <div className="flex justify-center">
          <CostSheet/>
          {/* <a href="data.png" download="data.png">
            <button className="bg-black border border-yellow-500 rounded-md text-yellow-400 mb-4 p-4 mt-6 py-2 w-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300">
              Download Cost sheet
            </button>
          </a> */}

        </div>
      </div>
    </div>
  );
};

export default Price;
