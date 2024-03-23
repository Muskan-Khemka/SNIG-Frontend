import React from "react";
import backgroundImage from "../../Images/bgposter.jpg";
import "./home.css";
import HeroSection from "../../components/ommon/Herosection";
// const divStyle = {
//   backgroundImage: `url(${backgroundImage})`, // Set the background image using inline CSS
//   backgroundSize: "cover", // Optional: adjust background size as needed
//   backgroundRepeat: "no-repeat", // Optional: adjust background repeat as needed
//   backgroundPosition: "center", // Center the background image
//   height: "600px", // Set height
//   width: "1600px",
//   contrast: "50",
// };
const HomePage = () => {
  return (
    <div>
 
      <section
        className="text-gray-600 body-font bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "calc(100vh - 80px)",
          filter: "brightness(70%)",
        }}
      >
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div
            className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center rounded-md p-8 border border-gray-400"
            style={{
              background: "linear-gradient(to left top, #000000, #000840)",
              opacity: 0.83,
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h1
              className="title-font sm:text-6xl text-5xl mb-4 font-medium text-white"
              style={{
                fontSize: "calc(5vw + 1rem)",
                animation: "zoomInOut 5s infinite alternate, spaceInOut 5s infinite alternate", // Added spaceInOut animation
                animationTimingFunction: "ease-in-out", // Animation timing function
              }}
            >
              <span
                style={{
                  animation: "gradientChange 5s infinite alternate", // Gradient changing effect
                  transition: "color 1s", // Transition to black
                }}
              >
                Welcome
              </span>
            </h1>
            <p className="mb-4 leading-loose sm:text-2x1 text-base text-white">
              Embark on an adventure through a universe of captivating
              stories. Start exploring and find your perfect binge-worthy
              content now.
            </p>
            <div className="flex items-center w-full justify-center">
              <div className="relative mr-4 flex-1 text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-white font-bold"
                >
                  Search
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    placeholder="Type any movie, webseries or tv serial..."
                    className="w-full bg-gray-200 bg-opacity-25 rounded-l-lg focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button
                    className="bg-blue-500 text-white border-0 py-1 px-4 ml-1 focus:outline-none hover:bg-blue-600 rounded-r-lg"
                    style={{
                      boxShadow:
                        "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm mt-2 text-white mb-0 w-full">
              Happy watching ❤️
            </p>
          </div>
        </div>
      </section>

      <HeroSection />
    
    </div>
  );
};

export default HomePage;