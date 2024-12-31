import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from "./Utils/ErrorBoundaries"; 

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ToastContainer />
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);

reportWebVitals();
