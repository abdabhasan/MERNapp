import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../utils/constants";
import businessValidationSchema from "../validation/businessValidation";
import { ValidationError } from "yup";
import { useUser } from "../context/user_context";

const BUSINESSES_ENDPOINT = "/businesses";

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
  bg: "",
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

  const { checkUserSession } = useUser();

  const clearBusinessData = () => {
    setBusinessData(initialBusinessData);
  };

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    // For boolean values like checkboxes
    if (type === "checkbox") {
      setBusinessData({
        ...businessData,
        [name]: checked,
      });
    } else if (type === "file") {
      // For file inputs, store the file object
      const selectedImage = event.target.files[0];
      setBusinessData({
        ...businessData,
        bg: selectedImage,
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

      // check user session
      const isAuthenticated = await checkUserSession();
      console.log("sessionData: ", isAuthenticated);
      if (!isAuthenticated) {
        toast.error("Please log in to add a business");
        setIsLoading(false);
        return;
      }

      // validation
      await businessValidationSchema.validate(businessData);

      const formData = new FormData();

      // Append businessData fields to formData
      Object.keys(businessData).forEach((key) => {
        formData.append(key, businessData[key]);
      });

      const response = await axios.post(
        `${API_ENDPOINT}${BUSINESSES_ENDPOINT}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
        toast.error(error.message);
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

  return (
    <BusinessContext.Provider
      value={{
        initialBusinessData,
        businessData,
        setBusinessData,
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
