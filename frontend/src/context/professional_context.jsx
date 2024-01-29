import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../utils/constants";
import professionalValidationSchema from "../validation/professionalValidation";
import { ValidationError } from "yup";
import { useUser } from "../context/user_context";

const PROFESSIONALS_ENDPOINT = "/professionals";

const ProfessionalContext = createContext();

const initialProfessionalData = {
  profession: "",
  type: "",
  firstName: "",
  lastName: "",
  yearsInProfession: "",
  email: "",
  phone: "",
  address: "",
  bg: "",
  termsAccepted: false,
  mailinglist: false,
  bio: "some bio",
  instagram: "",
  facebook: "",
  website: "",
  otherLink: "",
};

export const ProfessionalProvider = ({ children }) => {
  const [professionalData, setProfessionalData] = useState(
    initialProfessionalData
  );
  const [isLoading, setIsLoading] = useState(false);

  const { checkUserSession } = useUser();

  const clearProfessionalData = () => {
    setProfessionalData(initialProfessionalData);
  };

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    // For boolean values like checkboxes
    if (type === "checkbox") {
      setProfessionalData({
        ...professionalData,
        [name]: checked,
      });
    } else if (type === "file") {
      // For file inputs, store the file object
      const selectedImage = event.target.files[0];
      setProfessionalData({
        ...professionalData,
        bg: selectedImage,
      });
    } else {
      // For other types of inputs
      setProfessionalData({
        ...professionalData,
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
        toast.error("Please log in to add a professional");
        setIsLoading(false);
        return;
      }

      // validation
      await professionalValidationSchema.validate(professionalData);

      const formData = new FormData();

      // Append setProfessionalData fields to formData
      Object.keys(professionalData).forEach((key) => {
        formData.append(key, professionalData[key]);
      });

      const response = await axios.post(
        `${API_ENDPOINT}${PROFESSIONALS_ENDPOINT}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Professional Submitted");
        console.log(response.data);
        // clear fields
        clearProfessionalData();
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
        console.error("Error Adding Professional:", error.message);
        toast.error(
          "An error occurred while Adding the Professional. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProfessionalContext.Provider
      value={{
        handleChange,
        handleSubmit,
        isLoading,
        professionalData,
        setProfessionalData,
      }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};

export const useProfessionalContext = () => useContext(ProfessionalContext);
