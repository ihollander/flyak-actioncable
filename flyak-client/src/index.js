import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";
import App from "./components/App";

ReactDOM.render(
  <ActionCableProvider url={process.env.REACT_APP_WS_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ActionCableProvider>,
  document.getElementById("root")
);
