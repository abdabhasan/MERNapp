import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useBusinessContext } from "./business_context";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const { updateBusinessAddress } = useBusinessContext();

  const [suggestions, setSuggestions] = useState([]);

  const handleAddressChange = async (e) => {
    updateBusinessAddress({ name: e.target.value });

    if (e.target.value.length > 2) {
      try {
        const response = await axios.get(
          `https://eu1.locationiq.com/v1/search.php`,
          {
            params: {
              key: import.meta.env.VITE_LOCATIONIQ_KEY,
              q: e.target.value,
              countrycodes: "us",
              format: "json",
            },
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // toast.error("Error fetching address suggestions. Please try again.");
      }
    }
  };

  const handleAddressSelect = (selectedAddress, lat, lon) => {
    updateBusinessAddress({ name: selectedAddress, lat, lon });
    setSuggestions([]);
  };

  return (
    <AddressContext.Provider
      value={{
        suggestions,
        setSuggestions,
        handleAddressChange,
        handleAddressSelect,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);
