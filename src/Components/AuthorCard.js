import React, { useState } from "react";

const AuthorCard = function ({isActive, setIsActive}) {
  

 
  function handleActive(e) {
    e.preventDefault();
    setIsActive({
      active: true,
      name: e.target.id
    })
  }
  return (
    <>
      {/* <!-- Replace with your content -->

            <!-- Work --> */}
      <div
        id="intro"
        class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4"
      >
        <div id="avatar" class="flex justify-center py-2">
          <img
            class="w-40"
            src="https://api.multiavatar.com/JB.svg "
            alt="JB image"
          />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">
            Big Logic
          </h1>
          <small class="text-center block text-md text-gray-800">
            1XBet pro player
          </small>
          <p class="text-justify text-lg text-gray-800">
            I'm a junior front end web developer base in West Africa - Liberia.
            I am still yet a student but I have great passion for designs and
            programming.
          </p>
          <div id="hero-nav" className="p-6 w-full mx-auto">
            <ul className="flex items-center justify-center gap-4">
              <li className="border p-2 rounded-lg border-[#B2B2B2]">
                <a
                  href="#education"
                  id="education"
                  className={`${
                    isActive.active &&
                    isActive.name === "education" &&
                    `font-bold`
                  }  font-lato text-xl`}
                  onClick={handleActive}
                >
                  Education
                </a>
              </li>
              <li className="border p-2 rounded-lg border-[#B2B2B2]">
                <a
                  href="#work"
                  id="work"
                  className={`${
                    isActive.active &&
                    isActive.name === "work" &&
                    `font-bold`
                  }  font-lato text-xl`}
                  onClick={handleActive}
                >
                  Work
                </a>
              </li>
              <li className="border p-2 rounded-lg border-[#B2B2B2]">
                <a
                  href="#hobbie"
                  id="hobbie"
                  className={`${
                    isActive.active &&
                    isActive.name === "hobbie" &&
                    `font-bold`
                  }  font-lato text-xl`}
                  onClick={handleActive}
                >
                  Hobbies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
