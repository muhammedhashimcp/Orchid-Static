import React from "react";
import flat from "../../../images/orch.jpg";

function Overview() {
  return (
    <div className="container mx-auto mt-16 mb-10 p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-display font-semibold">
          Orchid Nirvana 3.0 Overview
        </h1>
      </div>
      <div className="mt-6 text-xl ml-5 mr-5 md:ml-20 md:mr-20 md:px-28 px-10">
        <p className="text-justify">
          Orchid Nirvana 2.0 is an upcoming premium lifestyle plotted
          development by Hariyana Goyal & Co. group located very much next to
          NH-44, Bangalore International Airport Road, Bellary Road, Bangalore
          North. It has a vast clubhouse. There are fully loaded facilities
          designed for urban social life. They offer lawns for parties, large
          swimming pools, sporting facilities, gyms and many more to name. It is
          fully primed for a high quality urban lifestyle that matches the
          exquisite tastes of this day and age. The facilities cater to the
          whole range of personal wellness, leisurely as well as recreational
          needs.
        </p>
        <br />
        <p className="text-justify">
          Currently North Bangalore is the most developing part of the
          Bangalore. From Orchid Nirvana 2.0, Bangalore International Airport is
          just 10 minutes drive away. As this property is surrounded by fully
          developed infrastructure & well connected, so commuting is much easier
          & the investments are promising. It is coming up in the upcoming IT
          hub of North Bangalore. It is surrounded by various upcoming
          developments such as Devanahalli Business Park, KIADB Aerospace Park,
          IFCI Financial City & the list goes on endless. And with close
          proximity to the International Airport, best-in-class resorts,
          proposed IT park, you stay close to everything you need, schools,
          shopping malls, renowned sports academy, hospitals.
        </p>
      </div>
      <div className=" flex justify-center mt-8">
        <img src={flat} width="850" height="850px" />
      </div>
      <h1 className="font-bold  mt-8 text-xl md:ml-72 m-3 ">
        Project Heighlights:
      </h1>
      <div className="flex justify-center container ml-4">
        <table className="border border-gray-300 md:m-5 md:ml-10  md:w-[800px] text-sm md:text-md ml-48 w-[1rem] mr-44 ">
          <tr>
            <th className="border border-gray-300 font-bold  text-start md:p-3 text-lg">
              Project Name:
            </th>
            <th className="border border-gray-300 md:p-3 text-lg font-light text-start">
              Orchid Nirvana 3.0
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold  text-lg text-start md:p-3">
              Project Status:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start ">
              New Launch
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300  font-bold text-lg text-start md:p-3 ">
              Approved
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              RERA & BIAPPA Approved
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold text-lg text-start md:p-3 ">
              RERA Approval Number:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              PRM/KA/RERA/1250/303/PR/010222/004663
            </th>
          </tr>

          <tr>
            <th className="border border-gray-300  font-bold text-lg text-start md:p-3 ">
              Total Development Size:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start ">
              38 + Acres
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold text-lg text-start md:p-3 ">
              Development Type:{" "}
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              Bangalore Recidential,Luxury plotted development
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold text-lg text-start md:p-3 ">
              {" "}
              Total Number of plots:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              493
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold text-lg text-start md:p-3 ">
              Possesseion:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              Dec 2026 onwords
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300  font-bold text-lg text-start md:p-3 ">
              Address:
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              Devanahalli,Bengaluru-562110
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 font-bold text-lg text-start md:p-3 ">
              LandMark
            </th>
            <th className="border border-gray-300 md:p-3 font-light text-lg text-start">
              Next to NH-44
            </th>
          </tr>
        </table>
      </div>
      <div className=" ml-64 flex justify-start">
        <button className="bg-slate-800 text-white rounded-md p-3 white mb-4 mt-6 py-3 w-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default Overview;
