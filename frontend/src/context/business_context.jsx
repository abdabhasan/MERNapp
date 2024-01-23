import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../utils/constants";
import businessValidationSchema from "../validation/businessValidation";
import { ValidationError } from "yup";

const BusinessContext = createContext();

const initialBusinessData = {
  businessName: "",
  businessType: "",
  ownerFirstName: "",
  ownerLastName: "",
  email: "",
  phone: "",
  address: "",
  lat: 0,
  lon: 0,
  image: "",
  termsAccepted: false,
  subscribeMailinglist: false,
  bio: "some bio",
  instagram: "",
  facebook: "",
  website: "",
  otherLink: "",
};

export const BusinessProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(initialBusinessData);
  const [isLoading, setIsLoading] = useState(false);

  const clearBusinessData = () => {
    setBusinessData(initialBusinessData);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // For boolean values like checkboxes
    if (type === "checkbox") {
      setBusinessData({
        ...businessData,
        [name]: checked,
      });
    } else {
      // For other types of inputs
      setBusinessData({
        ...businessData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // validation
      await businessValidationSchema.validate(businessData);

      const response = await axios.post(
        `${API_ENDPOINT}/businesses`,
        businessData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Business Submitted");
        console.log(response.data);
        // clear fields
        clearBusinessData();
        e.target.reset();
      } else {
        // Handle unexpected response status
        toast.error("Unexpected response status: " + response.status);
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        toast.error("Validation Error: " + error.message);
      } else {
        // Handle other types of errors
        console.error("Error Adding Business:", error.message);
        toast.error(
          "An error occurred while Adding the business. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

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
        handleChange,
        handleSubmit,
        isLoading,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => useContext(BusinessContext);
