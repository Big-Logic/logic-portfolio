import React from "react";

const HobbieCard = function () {
  return (
    <>
      <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 border-dashed px-4 py-4">Hobbies</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Kwagei Group
          </summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Kwagei Group
          </summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      </div>
    </>
  );
};

export default HobbieCard;
