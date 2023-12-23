import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/sidebar_context";
import { BusinessProvider } from "./context/business_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <BusinessProvider>
        <App />
      </BusinessProvider>
    </SidebarProvider>
  </React.StrictMode>
);
