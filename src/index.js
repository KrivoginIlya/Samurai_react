import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, {
  addPost,
  updateText,
  addMessage,
  subscriber,
} from "./Redux/state.js";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateText={updateText}
        addMessage={addMessage}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state);
subscriber(renderEntireTree); // передает функцию в state.js для обновления данных
