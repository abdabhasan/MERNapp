import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/sidebar_context";
import { BusinessProvider } from "./context/business_context";
import { ProductsToAvoidProvider } from "./context/products_to_avoid_context.jsx";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductsProvider>
        <FilterProvider>
          <BusinessProvider>
            <ProductsToAvoidProvider>
              <App />
            </ProductsToAvoidProvider>
          </BusinessProvider>
        </FilterProvider>
      </ProductsProvider>
    </SidebarProvider>
  </React.StrictMode>
);
