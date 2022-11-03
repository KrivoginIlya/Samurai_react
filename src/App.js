import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Nav from "./Component/NavBar/NavBar.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Dialogs from "./Component/Dialogs/Dialogs.jsx";
import News from "./Component/News/News.jsx";
import Messages from "./Component/Dialogs/Messages/Messages.jsx";

const App = (props) => {
  const path = "/message";
  return (
    <div className="app_wrapper">
      <Header />
      <Nav friends={props.state.navBar.friends} />
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              textarea={props.state.updateText}
              updateText={props.updateText}
            />
          }
        />
        <Route
          path={path}
          element={
            <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              updateText={props.updateText}
            />
          }
        />
        <Route
          path="message2"
          element={
            <Messages
              addMessage={props.addMessage}
              message={props.state.dialogsPage.messages}
              updateText={props.updateText}
              textarea={props.state.updateText}
            />
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Dialogs />} />
        <Route path="/seting" element={<Dialogs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
