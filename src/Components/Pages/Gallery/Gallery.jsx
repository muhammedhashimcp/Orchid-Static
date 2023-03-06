import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import newOne from "../../../images/new1.jpeg";
import newTwo from "../../../images/new2.jpeg";
import newThree from "../../../images/new3.jpeg";
import newFour from "../../../images/new4.jpeg";
import newFive from "../../../images/new5.jpeg";

const Gallery = () => {
  return (
    <div className="container mx-auto mt-16 mb-10 p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-display font-semibold text-center">
          Orchid Nirvana 3.0 Gallery
        </h1>
      </div>
      <div className=" flex justify-center flex-wrap gap-5 m-8">
        <div>
          <img src={newOne} height="4000px" width="450px" data-aos="fade-top"
              data-aos-duration="3000"/>
        </div>

        <div className="flex flex-col justify-around" >
          <div>
            <img src={newTwo} height="4500px" width="450px" data-aos="fade-top"
              data-aos-duration="3000"/>
          </div>
          <div>
            <img src={newThree} height="4000px" width="450px" data-aos="fade-bottom"
              data-aos-duration="3000"/>
          </div>
        </div>

        <div>
          <img src={newFour} height="4000px" width="450px" data-aos="fade-bottom"
              data-aos-duration="3000"/>
        </div>
        <div>
          <img src={newFive} height="4000px" width="450px" data-aos="fade-right"
              data-aos-duration="3000"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
