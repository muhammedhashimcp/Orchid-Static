import React from "react";
import flat from "../../../images/flat.avif";
import floor from "../../../images/floor.jpg";
import newOne from "../../../images/new1.jpeg";
import newTwo from "../../../images/new2.jpeg";
import newThree from "../../../images/new3.jpeg";

const Gallery = () => {
  return (
    <div className="container mx-auto mt-16 mb-10 p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-display font-semibold">
          Orchid Nirvana 3.0 Gallery
        </h1>
      </div>
      <div className=" flex justify-center flex-wrap gap-5 m-8">
        <div>
          <img src={newOne} height="4000px" width="450px" />
        </div>

        <div className="flex flex-col justify-around">
          <div>
            <img src={newTwo} height="4500px" width="450px" />
          </div>
          <div>
            <img src={newThree} height="4000px" width="450px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
