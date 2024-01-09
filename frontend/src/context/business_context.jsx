import { createContext, useContext, useState } from "react";

const BusinessContext = createContext();

const initialBusinessData = {
  businessName: "",
  businessType: "",
  ownerFirstName: "",
  ownerLastName: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  street: "",
  image: "",
  bio: "some bio",
  subscribe: false,
};

export const BusinessProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(initialBusinessData);

  return (
    <BusinessContext.Provider
      value={{ initialBusinessData, businessData, setBusinessData }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => useContext(BusinessContext);
