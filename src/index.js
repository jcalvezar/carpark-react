import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
//import { StateProvider } from "./components/Store/store";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
