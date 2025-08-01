import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import reduxcConfig from "./redux.js";
const store = reduxcConfig();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
