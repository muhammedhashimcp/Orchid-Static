import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
   useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-4/5 bg-gradient-to-tr from-gray-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-6xl font-display" data-aos="fade-down" data-aos-duration="3000">ORCHID NIRVANA 3.0</h1>
            <p className="text-white mt-1" data-aos="fade-up" data-aos-duration="3000">
              The most popular peer to peer lending at SEA
            </p>
            <button
              type="submit"
              className="block px-4 bg-white hover:bg-transparent text-indigo-800 hover:text-white hover:border-2 mt-4 py-2 font-bold mb-2"
            >
              Download Brochure
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-gradient-to-tr from-purple-700 to-gray-800">
          <form className="bg-white p-10 py-16">
            <h1 className="text-gray-800 font-bold text-xl mb-1">Special Pre Launch Offer For </h1>
            <h1 className="text-gray-800 font-bold text-xl mb-1 mt-2">The First Few Customers </h1>

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
              className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
