import React from "react";
import BrochureDownload from "../../Modals/BrochureDownload";

const Brochure = () => {
  return (
    <div>
      <div className="mt-6 text-xl ml-5 mr-5 md:ml-20 md:mr-20 md:px-40 p-4 text-justify">
        <h1 className="text-black text-xl md:text-4xl  text-center md:px-10 font-display font-semibold md:m-8 mb-8">
          Orchid Nirvana 3.0 Brochure
        </h1>
        <p>
          {" "}
          Orchid Nirvana 2.0 is new upcoming plotted development project located
          very much next to Bangalore International Airport
          Road,Devanahlli,Bangalore with all the world class amenities
        </p>
        {/* <button
          type="submit"
          className="block border border-yellow-500  bg-gray-900 hover:bg-gray-700 mt-8 py-3 text-white font-semibold mb-2 px-10 rounded-md"
         >
          Download Brochure
        </button> */}
        <BrochureDownload/>
      </div>
    </div>
  );
};

export default Brochure;
