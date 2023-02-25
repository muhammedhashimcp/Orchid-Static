import React from "react";
import contactus from "../../../images/contactus.png";

const Contactus = () => {
  return (
    <div className="mx-auto">
      <div className="position relative">
        <div className="">
          <img className="w-full mb-5" src={contactus} />
        </div>
        <div className="px-6 absolute bottom-4 font-display font-light text-xl text-gray-100">
          Orchid Nirvana 3.0 contact
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-center m-4 font-display font-light text-2xl">
          Get in touch with Us
        </h1>
        <div>
          <div className="text-center text-xl x">
            We would be glad to hear from you
          </div>
          <div className="flex flex-wrap  justify-center p-4 lg:p-1 ">
            <div className="flex md:w-1/2 justify-center  items-center">
              <form className="bg-white p-10 py-16">
                <h1 className="text-gray-800 font-semibold text-xl mb-1">
                  Please fill your Details Above
                </h1>

                <div className="flex items-center border-2 py-2 px-3 mb-4 mt-10">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Full name"
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 mb-4">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 mb-4">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 ">
                  <input
                    className="pl-2 outline-none border-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Requirement"
                  />
                </div>
                <button
                  type="submit"
                  className="block border border-yellow-500  bg-sky-900 hover:bg-gray-700 mt-4 py-3 text-white font-semibold mb-2 px-8"
                >
                  SUBMIT
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-gray-800 font-semibold text-xl">
                Site Address
              </h1>
              Next to NH-44 Devanahalli,Bengaluru,
              <br />
              Karnataka
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
