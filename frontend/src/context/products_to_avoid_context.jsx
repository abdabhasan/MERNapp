import { createContext, useContext, useState } from "react";

const ProductsToAvoidContext = createContext();

export const ProductsToAvoidProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <ProductsToAvoidContext.Provider
      value={{ data, setData, filteredData, setFilteredData }}
    >
      {children}
    </ProductsToAvoidContext.Provider>
  );
};

export const useProductsToAvoidContext = () => {
  return useContext(ProductsToAvoidContext);
};
