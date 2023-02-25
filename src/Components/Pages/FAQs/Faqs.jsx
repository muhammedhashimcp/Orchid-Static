import React from "react";

export default function Faqs() {
  return (
    <div className="container mx-auto mt-16 mb-10 p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-display font-semibold">
          FAQ's Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              Where is "Orchid Nirvana 3.0" project located?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" project is located verymuch next to NH-44,
                Devanahalli, Banglore North
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              What kind of development it is?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" is a luxury plotted development
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              When is the handover of Orchid Nirvana 3.0" project?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" project will be handed over from December
                2026 onwards
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              What are the different varients of plots ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" project comprises of 1100 Sq.ft to 3000
                Sq.ft plots.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              is "Orchid Nirvana 3.0" project RERA approved ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                Yes. "Orchid Nirvana 3.0" project RERA approved and RERA
                registration number is <br />{" "}
                PRM/KA/RERA/1250/303/PR/010222/004663
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              How do i book my plot at "Orchid Nirvana 3.0" project ?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                Reach us by Filling in the contact form below to get complete
                assistance in booking:
              </p>

              <div className="">
                <form className="bg-white py-6">
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Mobile Number"
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
          </details>
        </div>

        <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              What is the status "Orchid Nirvana 3.0" project?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" project is newly launched project.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              What is the total project area?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                "Orchid Nirvana 3.0" total project area is 38+ acres
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg">
            <summary className="font-semibold">
              Is the title of the property clear?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                Its a complete clear title property. The land is freehold, marakatble and free from all encumbrances.
              </p>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
                If i want to book my dream plot at "Orchid Nirvana 3.0 project", are there any special offers in for me?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                Yes, There is a special Pre-launch offer for the first few customers only, reach us by filling in 
                the contact form below to know the special offers:
              </p>

              <div className="">
                <form className="bg-white py-6">
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Mobile Number"
                    />
                  </div>
                  <button
                    type="submit"
                    className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </details>
          <details className="p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold">
              What to do if i have more questions or need further clarifications?
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-6 text-gray-600">
                Reach us by Filling in the contact form below, so that we can reach you at the earliest 
                to clarify all your queries.
              </p>

              <div className="">
                <form className="bg-white py-6">
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex items-center border-2 py-2 px-3 mb-4">
                    <input
                      className="pl-2 outline-none border-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Mobile Number"
                    />
                  </div>
                  <button
                    type="submit"
                    className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
