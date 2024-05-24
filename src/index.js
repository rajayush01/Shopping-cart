import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);