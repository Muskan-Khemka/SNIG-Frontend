import React, { useState } from "react";
import ProfileDropdown from "../../dropdown";
import { Link } from "react-router-dom"; 
import '../header/header.css'


            const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <header className="header-fixed text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0"> {/* Use Link component for routing */}
            <div>
              <a
                href="https://www.flaticon.com/authors/mayor-icons"
                title="Mayor Icons"
              ></a>
              <a href="https://www.flaticon.com/" title="Flaticon"></a>
            </div> 

            <span className="ml-3 text-xl font-bold tracking-wide bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
              TMDB
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Movies</a>
            <a className="mr-5 hover:text-white">TV Shows</a>
            <a className="mr-5 hover:text-white">New & popular</a>
            <a className="mr-5 hover:text-white">More</a>
          </nav>
          <Link to="/pricing" style={{ color: ' #34deeb' }} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover"> {/* Use Link for subscription button */}
            SUBSCRIBE
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <button
            style={{ color: " #34deeb" }}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover"
          >
            LOGIN
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button
  style={{ color: '#34eba4', padding: '0 20px' }} 
  className="inline-flex items-center bg-gray-800 border-0 py-1 px-6 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover"
>
  <ProfileDropdown />
</button>
        </div>
      </header>
    </div>
  );
};

export default Header;