import { createContext, useContext, useState } from "react";

const ProductsToAvoidContext = createContext();

export const ProductsToAvoidProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompaniesContainerOpen, setIsCompaniesContainerOpen] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ProductsToAvoidContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        isLoading,
        setIsLoading,
        setIsCompaniesContainerOpen,
        isCompaniesContainerOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductsToAvoidContext.Provider>
  );
};

export const useProductsToAvoidContext = () => {
  return useContext(ProductsToAvoidContext);
};
