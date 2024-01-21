import { createContext, useContext, useState } from "react";

const BusinessContext = createContext();

const initialBusinessData = {
  businessName: "",
  businessType: "",
  ownerFirstName: "",
  ownerLastName: "",
  email: "",
  phone: "",
  address: {
    name: "",
    lat: 0,
    lon: 0,
  },
  image: "",
  termsAccepted: false,
  bio: "some bio",
  links: {
    link1: "",
    link2: "",
    link3: "",
    link4: "",
  },
};

export const BusinessProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(initialBusinessData);

  const updateBusinessAddress = (newAddress) => {
    setBusinessData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        ...newAddress,
      },
    }));
  };

  return (
    <BusinessContext.Provider
      value={{
        initialBusinessData,
        businessData,
        setBusinessData,
        updateBusinessAddress,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => useContext(BusinessContext);
