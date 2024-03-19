import React from 'react';
import Slider from 'react-slick';
import TypingEffect from 'react-typing-effect'; // Import the package

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Reduced autoplay speed for faster slide transitions
  };

  return (
    <section className="hero-section">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Slider {...settings}>
            <div>
              <img className="object-cover object-center rounded" alt="hero" src="https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/50386826.jpg" />
            </div>
            <div>
              <img className="object-cover object-center rounded" alt="hero" src="https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/05/31155832/YJHD.png" />
            </div>
            <div>
              <img className="object-cover object-center rounded" alt="hero" src="https://images.hindustantimes.com/img/2022/02/02/1600x900/Gangubai_1643785236716_1643785261330.jpeg" />
            </div>
            <div>
              <img className="object-cover object-center rounded" alt="hero" src="https://i0.wp.com/varunshrivastava.in/wp-content/uploads/2016/05/3-idiots-music-album-cover.jpg?fit=956%2C714&ssl=1" />
            </div>
            <div>
              <img className="object-cover object-center rounded" alt="hero" src="https://static.zoomnews.com/thumb/msid-100078439,width-1280,height-720,resizemode-75/100078439.jpg" />
            </div>
          </Slider>
        </div>
        <div className="flex flex-col md:flex-grow md:pl-24 md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-bold text-5xl mb-4 text-gray-900">Movie-Searcher</h1>
          <h2 className="title-font font-semibold text-4xl mb-8 text-blue-800">
            <TypingEffect text="Searching made easy"
              speed={100}
              eraseSpeed={100}
              typingDelay={500}
              eraseDelay={5000}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h2>
                    {text.split('').map((char, i) => {
                      return (
                        <span key={i}>{char}</span>
                      );
                    })}
                  </h2>
                );
              }}
            />
          </h2>
          <p className="mb-12 leading-relaxed text-lg">Your go-to place to search movies, anytime anywhere!</p>
          <div className="flex justify-center mt-8">
            <button className="inline-flex text-white bg-blue-800 border-0 py-3 px-10 focus:outline-none hover:bg-blue-900 rounded-full text-lg animate-bounce">Search here</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;