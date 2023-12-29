import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/sidebar_context";
import { BusinessProvider } from "./context/business_context";
import { ProductsToAvoidProvider } from "./context/products_to_avoid_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <BusinessProvider>
        <ProductsToAvoidProvider>
          <App />
        </ProductsToAvoidProvider>
      </BusinessProvider>
    </SidebarProvider>
  </React.StrictMode>
);
