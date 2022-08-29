import React from "react";
import "./App.css";
import Header from "./Component/Header/Header.jsx";
import Nav from "./Component/NavBar/NavBar.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Footer from "./Component/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
