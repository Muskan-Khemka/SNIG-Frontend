import React, { useContext } from "react";
import Context from "../../context/context";

const Moviepage = () => {
  const { subscribed, setSubscribed } = useContext(Context);

  const handleButtonClick = () => {
    if (subscribed) {
      window.location.href = "../playback";
    } else {
      // Handle unsubscribed case, maybe display a message or prompt for subscription
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                2003 • 2h 33min
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Lord of Rings
              </h1>
              {/* Other content */}
              <button
                onClick={handleButtonClick}
                className="bg-indigo-500 inline-flex py-3 px-5 rounded focus:outline-none hover:bg-indigo-600 text-white"
              >
                {/* Change button text based on subscription */}
                {subscribed ? "Continue Watching" : "Subscribe to Watch"}
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-start hover:bg-gray-200 focus:outline-none mt-5">
                {/* Streaming service button */}
              </button>
              {/* Other content */}
            </div>
            <img
              alt="Movie poster"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.tallengestore.com/cdn/shop/products/LordOfTheRings-FellowshipOfTheRing-HollywoodMoviePoster_6f2b105a-a3ac-4f76-92ca-72ea90a3af5c_large.jpg?v=1630764638"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moviepage;
