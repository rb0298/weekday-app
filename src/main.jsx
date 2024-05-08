import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./cards/Cards.jsx";
import "./index.css";
import AllFilters from "./filter/AllFilters.jsx";
import store from "./store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="app">
        <AllFilters />
        <Cards />
      </div>
    </Provider>
  </React.StrictMode>
);
