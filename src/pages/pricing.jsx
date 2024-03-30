import React from "react";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div>
      <section class="bg-[url('/src/Images/subscription_bg.jpg')] text-white body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-8xl text-10xl font-medium title-font mb-2 text-white drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]">
              Choose Your Plan
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-4xl text-gray-500">
              Unlock endless possibilities
            </p>
          </div>
          <div class="justify-center space-x-7 flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-4 hover:shadow-lg hover:shadow-teal-300 hover:border-teal-300">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  BASIC
                </h2>
                <h1 class="text-5xl text-teal-300 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹299</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-teal-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mobile Only
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-teal-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Video Quality 360p
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-teal-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Good audio Quality
                </p>
                <p class="flex items-center text-white mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-teal-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  One device at a time
                </p>
                <Link to="/payment1">
                <button class="justify-center flex items-center mt-auto text-white bg-teal-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-400 rounded-full" onClick={() => localStorage.setItem("amount1", 299)}>
                  Buy Now
                </button>
                </Link>
                <p class="text-center text-lg text-white mt-3">
                  Pocket Friendly Plan!
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-4 hover:shadow-lg hover:shadow-cyan-300 hover:border-cyan-300">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  PREMIUM
                </h2>
                <h1 class="text-5xl text-cyan-400 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹699</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mobile & Tablet
                </p>
                <p class="flex items-center text-white mb-2 ">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-600 text-white rounded-full flex-shrink-0 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Video Quality 480p
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Better Audio Quality
                </p>
                <p class="flex items-center text-white mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Two devices at a time
                </p>
                <button class="justify-center flex items-center mt-auto text-white bg-cyan-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-cyan-400 rounded-full" onClick={() => localStorage.setItem("amount1", 699)}>
                  Buy Now
                </button>
                <p class="text-center text-lg text-white mt-3">
                  Most Popular Plan!
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-4 hover:shadow-lg hover:shadow-pink-300 hover:border-pink-300">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  ENTERPRISE
                </h2>
                <h1 class="text-5xl text-pink-400 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹999</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /mo
                  </span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Any device
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Video Quality 720p
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Best Audio Quality
                </p>
                <p class="flex items-center text-white mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-600 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Four devices at a time
                </p>
                <button class="justify-center flex items-center mt-auto text-white bg-pink-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-400 rounded-full" onClick={() => localStorage.setItem("amount1", 999)}>
                  Buy Now
                </button>
                <p class="text-center text-lg text-white mt-3">
                  Most Recommended Plan!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-2xl text-white hover:underline m-9">
            <h3>Terms and Conditions | Privacy Policy | FAQ </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
