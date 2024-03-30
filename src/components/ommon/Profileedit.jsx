import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null); // State to store selected profile photo

  const handleSaveChanges = () => {
    // Handle save changes logic
    console.log('Changes saved successfully');
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleDeleteAccount = () => {
    // Implement logic to delete the user's account
    console.log('Account deleted successfully');
  };

  const handleChangePassword = () => {
    // Implement logic to change the user's password
    console.log('Change password clicked');
  };

  const handleChangeSubscription = () => {
    // Implement logic to change user's subscription
    console.log('Change subscription clicked');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="card bg-gray-800 shadow-lg rounded-lg p-4 sm:p-8 max-w-3xl w-full">
        <div className="flex flex-col items-center mb-4">
          <div
            className="w-24 h-24 rounded-full overflow-hidden bg-gray-600 mb-2"
            style={{
              backgroundImage: profilePhoto ? `url(${URL.createObjectURL(profilePhoto)})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <label className="block mb-2 text-sm text-blue-400 cursor-pointer">
            Update Profile Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePhotoChange}
            />
          </label>
        </div>

        <div className="mb-2 sm:mb-4">
          <label className="block font-semibold mb-1 text-white text-xs sm:text-sm">Username</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white text-xs sm:text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-2 sm:mb-4">
          <label className="block font-semibold mb-1 text-white text-xs sm:text-sm">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white text-xs sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Subscription plan change section */}
        <div className="bg-ivory-200 rounded-lg border-dashed border border-gray-400 text-center py-2 sm:py-4 px-4 sm:px-6 mb-4 sm:mb-6">
          <h2 className="text-sm sm:text-base font-semibold text-white">Upgrade Your Subscription</h2>
          <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white">Unlock exclusive features and benefits!</p>
          {/* <Link to="/pricing" className="bg-sky-400 text-white-900 px-3 py-1 sm:px-4 sm:py-2 rounded mt-2 sm:mt-4 transition duration-300 hover:bg-sky-500 text-xs sm:text-sm w-80">
            Upgrade Now
          </Link> */}
          <button className="bg-sky-400 text-white-900 px-3 py-1 sm:px-4 sm:py-2 rounded mt-2 sm:mt-4 transition duration-300 hover:bg-sky-500 text-xs sm:text-sm w-80" onClick= {() => {handleChangeSubscription(); window.location.href = '/pricing'; }}>
            Upgrade Now
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-sky-500 text-white-700 px-3 py-1 sm:px-4 sm:py-2 rounded transition duration-300 hover:bg-sky-600 text-xs sm:text-sm w-full" onClick={handleChangePassword}>
            Change Password
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-sky-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded w-full transition duration-300 hover:bg-sky-700 text-xs sm:text-sm" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-sky-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded w-full transition duration-300 hover:bg-sky-800 text-xs sm:text-sm" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;