import React from 'react';

import './index.css';

import HeroSection from './components/ommon/Herosection';
import ProfileEdit from './components/ommon/Profileedit'; // Import the ProfileEdit component


function App() {
  return (
    <div className="relative width-full">
      <div className="mx-auto overflow-hidden">
       
        <HeroSection />
      </div>
      <div>
  <React.StrictMode>
    <ProfileEdit />
  </React.StrictMode>

</div>
    </div>
  );
}

export default App;