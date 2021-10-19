import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./shared/App";
<<<<<<< HEAD
=======
import { Provider } from "react-redux";
>>>>>>> 1504f8d21007f48abfd9274ba4d1b083b2418b0c
import store from "./redux/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
