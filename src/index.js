// Main entry point

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./containers/App";
// import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementsByTagName("body")[0]
);
