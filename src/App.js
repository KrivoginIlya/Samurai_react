import React from "react";
import "./App.css";
import Header from "./Component/Header.jsx";
import Nav from "./Component/nav_bar.jsx";
import Profile from "./Component/Profile.jsx";
import Footer from "./Component/footer.jsx";

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
