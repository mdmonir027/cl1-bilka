import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//  context api
import DataLayer from "./Components/store/dataLayer";
import initialState from "./Components/store/initialState";
import reducer from "./Components/store/reducer";
// font awesome
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
