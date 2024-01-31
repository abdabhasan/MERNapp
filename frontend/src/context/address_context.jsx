import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { useBusinessContext } from "./business_context";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

const AddressContext = createContext();

export const AddressProvider = ({ children, data, setData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const { businessData, setBusinessData } = useBusinessContext();
  const wrapperRef = useRef(null);

  const handleSelectSuggestion = (description, placeId) => {
    setData({ ...data, address: description });
    setSuggestions([]);
  };

  const handleSearch = useCallback(() => {
    if (data.address.length > 1) {
      axios
        .get(`${API_ENDPOINT}/places/autocomplete`, {
          params: { address: data.address },
        })
        .then((response) => {
          setSuggestions(response.data.predictions);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [data.address]);

  const handleChange = (e) => {
    clearTimeout(debounceTimeout);
    setData({ ...data, address: e.target.value });
    setDebounceTimeout(setTimeout(() => handleSearch(), 500));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AddressContext.Provider
      value={{
        handleSelectSuggestion,
        handleChange,
        setSuggestions,
        suggestions,
        wrapperRef,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);
