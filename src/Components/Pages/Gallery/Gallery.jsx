import React from "react";
import flat from "../../../images/flat.avif";
import floor from "../../../images/floor.jpg";

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
          <img src={flat} height="4500px" width="450px" />
        </div>
        <div>
          <img src={floor} height="300px" width="400px" />
        </div>
        <div>
          <img src={flat} height="4500px" width="450px" />
        </div>
        <div>
          <img src={floor} height="300px" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
