import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-gray-50 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 font-display">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.orchidnirvana2.co.in/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             Orchid Nirvana 3.0
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to='/floor-plan' class="mr-4 hover:underline md:mr-6 ">
                Floor Plan
              </Link>
            </li>
            <li>
              <Link to='/brochure' class="mr-4 hover:underline md:mr-6 ">
                Brochure
              </Link>
            </li>
            <li>
              <Link to='/disclimer' class="mr-4 hover:underline md:mr-6">
                Disclimer
              </Link>
            </li> 
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©
          <a href="https://orchidnirvana3.netlify.app/" class="hover:underline">
            Orchid Nirvana 3.0™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
