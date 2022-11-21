import React from "react";

import NavBar from "../Components/NavBar";

import screen1 from './screen1.png'

const Projects = function () {
  return (
    <>
      <NavBar />

      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={screen1} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Phonebook</div>
            <p class="text-gray-700 text-base">
              This is my first project I built with react js. It's a phonebook
              app.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a
                href="https://stackblitz.com/edit/react-htrezi?file=src%2FApp.js"
                target="_blank"
              >
                View this project
              </a>
            </span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={screen1} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Phonebook</div>
            <p class="text-gray-700 text-base">
              This is my first project I built with react js. It's a phonebook
              app.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <a
                href="https://stackblitz.com/edit/react-htrezi?file=src%2FApp.js"
                target="_blank"
              >
                View this project
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
