import React, { useState, useRef, useEffect } from "react";
import userImage from "./1177568.png";
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const imgRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        imgRef.current !== e.target
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <img
        ref={imgRef}
        onMouseEnter={() => setOpen(true)}
        onClick={handleIconClick}
        src={userImage}
        alt="user"
        style={{ margin: "auto", height: "3rem", width: "3rem" }}
        className="object-cover border-4 border-blue-800 rounded-full cursor-pointer"
      />
      <div
        ref={menuRef}
        className="absolute bg-gray-900 p-4 w-104 shadow-lg -left-14 top-full"
        style={{
          display: open ? "block" : "none",
          width: open ? "10rem" : "0", // Adjusted width
        }}
      >
        <ul>
          <li className="p-2 text-lg text-white cursor-pointer rounded hover:bg-blue-800">
            Signed in as @xyzee
          </li>
          <hr className="border-gray-700" />

          <li className="p-2 text-lg text-white cursor-pointer rounded hover:bg-blue-800">
            <Link to="/profile" onClick={handleMenuClick}>Edit Profile</Link>
          </li>
          {/* <li className="p-2 text-lg text-white cursor-pointer rounded hover:bg-blue-800">
            *Settings
          </li>
          <li className="p-2 text-lg text-white cursor-pointer rounded hover:bg-blue-800 mb-2.5">
            help
          </li> */}
          <hr className="border-gray-700" />

          <li className="font-medium flex items-center justify-between">
            <a
              href="#"
              className="flex items-center w-full transform transition-colors duration-200 rounded hover:bg-blue-800 px-4 py-2"
            >
              <div className="mr-3 text-red-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
              <span>LOGOUT</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
