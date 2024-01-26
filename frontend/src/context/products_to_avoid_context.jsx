import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

const ProductsToAvoidContext = createContext();
const PRODUCTS_TO_AVOID_ENDPOINT = "/products-to-avoid";

export const ProductsToAvoidProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${API_ENDPOINT}${PRODUCTS_TO_AVOID_ENDPOINT}`
      );
      setData(response.data.companies);
      return true;
    } catch (error) {
      console.error("Error fetching data:", error);

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductsToAvoidContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        isLoading,
        setIsLoading,
        searchQuery,
        setSearchQuery,
        fetchData,
      }}
    >
      {children}
    </ProductsToAvoidContext.Provider>
  );
};

export const useProductsToAvoidContext = () => {
  return useContext(ProductsToAvoidContext);
};
