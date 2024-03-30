import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "../../dropdown";
import logoImage from "../../../Images/logo234.png";
import '../header/header.css';

const Header = () => {
  return (
    <div>
      <header className="header-fixed text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <img src={logoImage} alt="Logo" className="h-12 w-15" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/Moviesgrid" className="mr-5 hover:text-white">Movies</Link>
            <a className="mr-5 hover:text-white">TV Shows</a>
            <a className="mr-5 hover:text-white">New & popular</a>
          </nav>
          <Link to="/" style={{ color: ' #34deeb' }} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover">
            DASHBOARD
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
          <Link to="/pricing" style={{ color: ' #34deeb' }} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover">
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
          <Link to="/login" style={{ color: ' #34deeb' }} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 mr-2 glow-on-hover">
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
          </Link>
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
