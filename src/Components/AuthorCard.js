import React from "react";

const AuthorCard = function() {
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
              I'm a junior front end web developer base in West Africa -
              Liberia. I am still yet a student but I have great passion for
              designs and programming.
            </p>
          </div>
        </div>
      </>
    );
}

export default AuthorCard;