import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store,{persistor} from "./Redux/reducers/allReducer";

import { PersistGate } from "redux-persist/integration/react"; //delay response while accessing data from loacal storage

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
