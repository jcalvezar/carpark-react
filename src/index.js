import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import { StateProvider } from "./components/Store/store";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Layout></Layout>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
