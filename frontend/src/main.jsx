import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/sidebar_context";
import { BusinessProvider } from "./context/business_context";
import { ProfessionalProvider } from "./context/professional_context.jsx";
import { ProductsToAvoidProvider } from "./context/products_to_avoid_context.jsx";
// import { ShopsProvider } from "./context/shops_context.jsx";
// import { FilterProvider } from "./context/filter_context.jsx";
import { UserProvider } from "./context/user_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SidebarProvider>
        {/* <ShopsProvider> */}
        {/* <FilterProvider> */}
        <BusinessProvider>
          <ProfessionalProvider>
            <ProductsToAvoidProvider>
              <App />
            </ProductsToAvoidProvider>
          </ProfessionalProvider>
        </BusinessProvider>
        {/* </FilterProvider> */}
        {/* </ShopsProvider> */}
      </SidebarProvider>
    </UserProvider>
  </React.StrictMode>
);
