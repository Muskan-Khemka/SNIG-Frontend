import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated imports
import "./index.css";
import HomePage from "./pages/home/index";
import ProfileEdit from "./components/ommon/Profileedit"; // Corrected import path
import Header from "./components/ommon/header";
import Footer from "./components/ommon/footer";
import Moviepage from "./pages/MoviesPage/Moviepage";
import Pricing from "./pages/pricing";
import Moviesgrid from "./pages/MoviesGrid/Moviesgrid";
import Playbackvedio from "./pages/playbackvedio/Playbackvedio";
import Login from "./components/Login";
import Signup from "./components/signup";
import Payment1 from "./components/payment/Payment";
function App() {
  return (
    <Router>
      <div className="relative width-full flex flex-col min-h-screen">
        <Header />
        <div className="mx-auto w-full overflow-hidden flex-grow ">
          <Routes>
            {/* Use <Routes> instead of <Switch> */}
            <Route exact path="/" element={<HomePage />} />
            {/* Use 'element' prop instead of 'component' */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/moviesgrid" element={<Moviesgrid />} />
            <Route path="/moviepage" element={<Moviepage />} />
            <Route path="/profile" element={<ProfileEdit />} />
            <Route path="/playback" element={<Playbackvedio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment1" element={<Payment1 />} />
            {/* Add more routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
