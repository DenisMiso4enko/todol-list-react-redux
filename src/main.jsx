import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "../src/redux/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":filter" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
