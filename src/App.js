import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Nav from "./Component/NavBar/NavBar.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Dialogs from "./Component/Dialogs/Dialogs.jsx";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Dialogs />} />
        <Route path="/news" element={<Dialogs />} />
        <Route path="/music" element={<Dialogs />} />
        <Route path="/seting" element={<Dialogs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
