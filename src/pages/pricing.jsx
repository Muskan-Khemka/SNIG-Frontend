// import React from "react";

// const Pricing = () => {
//   return (
//     <div>
//       <section className="text-white body-font bg-black opacity-90">
//         <div className=" px-5 py-24 mx-auto">
//           <div class="flex flex-col text-center w-full mb-20">
//             <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
//               Subscribe to watch all content on our website
//             </h1>
//           </div>
//           <div class="lg:w-2/3 w-full mx-auto overflow-auto">
//             <table class="table-auto w-full text-left whitespace-no-wrap">
//               <thead>
//                 <tr>
//                   <th class="space-y-3 px-4 py-3 title-font tracking-wider font-medium text-white text-sm  border border-gray-400 rounded-tl">
//                     <div className="text-lg mb-1 text-yellow-500">
//                       Access All Content
//                     </div>
//                     <div className="font-light">
//                       Movies, Originals and live sports
//                     </div>
//                   </th>
//                   <th class=" font-light space-y-3 text-center px-4 py-3 title-font tracking-wider font-medium text-white text-sm border border-gray-400 hover:bg-yellow-500">
//                     <div>Mobile Only</div>
//                     <div className="justify-center flex">
//                       <div className="text-lg font-bold">Rs 599</div>
//                       <div className="self-end"> (Yearly)</div>
//                     </div>
//                   </th>
//                   <th class="font-light text-center space-y-3 px-4 py-3 title-font tracking-wider font-medium text-white text-sm border border-gray-400  hover:bg-yellow-500">
//                     <div>LIV Premium</div>
//                     <div className="justify-center flex">
//                       <div className="text-lg font-bold">Rs 999</div>
//                       <div className="self-end"> (Yearly)</div>
//                     </div>
//                   </th>
//                   <th class="font-light text-center space-y-3 px-4 py-3 title-font tracking-wider text-white text-sm border border-gray-400  hover:bg-yellow-500">
//                     <div>LIV Premium</div>
//                     <div className="justify-center flex">
//                       <div className="text-lg font-bold">Rs 699</div>
//                       <div className="self-end"> (6 months)</div>
//                     </div>
//                   </th>
//                   <th class="font-light text-center space-y-3 w-auto title-font tracking-wider font-medium text-white text-sm rounded-tr rounded-br border border-gray-400  hover:bg-yellow-500">
//                     <div>LIV Premium</div>
//                     <div className="justify-center flex">
//                       <div className="text-lg font-bold">Rs 299</div>
//                       <div className="self-end"> (Monthly)</div>
//                     </div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="font-light">
//                   <td className="px-4 py-3 border border-gray-400">
//                     Number of logged in devices
//                   </td>
//                   <td className="text-center border border-gray-400">1</td>
//                   <td className="text-center border border-gray-400">5</td>
//                   <td className="text-center border border-gray-400">5</td>
//                   <td className="text-center border border-gray-400">5</td>
//                 </tr>
//                 <tr className="font-light">
//                   <td className="px-4 py-3 border border-gray-400">
//                     Watch on devices at same time
//                   </td>
//                   <td className="text-center border border-gray-400">1</td>
//                   <td className="text-center border border-gray-400">2</td>
//                   <td className="text-center border border-gray-400">2</td>
//                   <td className="text-center border border-gray-400">1</td>
//                 </tr>
//                 <tr className="font-light">
//                   <td className="px-4 py-3 border border-gray-400">
//                     Max Video Quality
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     HD(720p)
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     FULL HD (1080p)
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     FULL HD (1080p)
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     FULL HD (1080p)
//                   </td>
//                 </tr>
//                 <tr className="font-light">
//                   <td className="px-4 py-3 border border-gray-400">
//                     Max Audio Quality
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Stereo 2.1
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Stereo 2.1
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Stereo 2.1
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Stereo 2.1
//                   </td>
//                 </tr>
//                 <tr className="font-light">
//                   <td className="px-4 py-3 border border-gray-400">
//                     Advertisement
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Only on Sports, Liv Exclusive, Reality Shows(Live &
//                     Recorded) and Interactivity
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Only on Sports, Liv Exclusive, Reality Shows(Live &
//                     Recorded) and Interactivity
//                   </td>
//                   <td className="text-center border border-gray-400">
//                     Only on Sports, Liv Exclusive, Reality Shows(Live &
//                     Recorded) and Interactivity
//                   </td>
//                   <td className="text-center border border-gray-400 rounded-r-lg">
//                     Only on Sports, Liv Exclusive, Reality Shows(Live &
//                     Recorded) and Interactivity
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="items-center justify-center">
//               <div className="text-lg text-center mt-5 underline decoration-yellow-500 decoration-dotted">
//                 Select a promo code
//               </div>

//               <button className="mt-5 leading-10 w-full text-3xl object-center text-yellow-500 bg-white rounded-lg font-bold hover:bg-gray-500">
//                 Subscribe
//               </button>

//               <div className="text-lg text-center mt-5 hover:underline decoration-white-500 decoration">
//                 Terms & Conditions
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;

import React from "react";

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
                {/* <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span> */}
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
                <button class="justify-center flex items-center mt-auto text-white bg-teal-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-400 rounded-full">
                  Buy Now
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
                </button>
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
                {/* <p class="flex items-center text-white mb-6">
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
                  Mixtape chillwave tumeric
                </p> */}
                <button class="justify-center flex items-center mt-auto text-white bg-cyan-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-cyan-400 rounded-full">
                  Buy Now
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
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
                {/* <p class="flex items-center text-white mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
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
                  Mixtape chillwave tumeric
                </p> */}
                <button class="justify-center flex items-center mt-auto text-white bg-pink-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-400 rounded-full">
                  Buy Now
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg> */}
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
