import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/state.js";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store._getState()}
        // addPost={store.addPost.bind(store)}
        // updateText={store.updateText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store._getState());

store._subscriber(renderEntireTree); // передает функцию в state.js для обновления данных
