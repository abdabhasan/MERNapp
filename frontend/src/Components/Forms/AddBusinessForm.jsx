import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_ENDPOINT } from "../../utils/constants";
import { toast } from "react-toastify";
import { useBusinessContext } from "../../context/business_context";

import businessValidationSchema from "../../validation/businessValidation";
import FormField from "./FormField";
import SubmitBtn from "../Btns/SubmitBtn";
import AddressAutocomplete from "./AddressAutocomplete.jsx";
import LoadingSpinner from "../LoadingSpinner";
import TypesDropdown from "../Dropdowns/TypesDropdown";
import { useUser } from "../../context/user_context";

const AddBusinessForm = () => {
  const { businessData, setBusinessData, initialBusinessData } =
    useBusinessContext();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, checkSession } = useUser();
  const [file, setFile] = useState(null);

  useEffect(() => {
    checkSession();
  }, [isAuthenticated]);

  const renderFields = (fields) => {
    return fields.map(({ name, className, label, type, required, accept }) => (
      <FormField
        key={name}
        className={className}
        label={label}
        type={type}
        name={name}
        required={required}
        accept={accept}
        value={businessData[name]}
        onChange={handleChange}
      />
    ));
  };

  const clearBusinessData = () => {
    setBusinessData(initialBusinessData);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split("."); // Split the name by dots to get nested keys

    setBusinessData((businessData) => {
      let data = { ...businessData }; // Copy the current state
      let lastKeyIndex = keys.length - 1;

      // Iterate through the keys and update the nested state
      keys.forEach((key, index) => {
        if (index === lastKeyIndex) {
          data[key] = value; // Set the value for the last key
        } else {
          if (!data[key]) data[key] = {}; // Initialize nested object if necessary
          data = data[key]; // Drill down into the nested state
        }
      });

      return data;
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setBusinessData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // can not submit if not authenticated
    if (!checkSession()) {
      toast.error("Please login to add a business");
      return;
    }

    // Check if the agreement checkbox is checked
    if (!businessData.termsAccepted) {
      toast.error("You must agree to the terms to submit the form.");
      return;
    }

    // const formData = new FormData();
    // // Append the file
    // formData.append("image", file);
    // Object.keys(businessData).forEach((key) => {
    //   formData.append(key, businessData[key]);
    // });

    const formData = new FormData();
    formData.append("image", file);

    Object.keys(businessData).forEach((key) => {
      if (typeof businessData[key] === "object" && businessData[key] !== null) {
        // Convert the nested object to a JSON string
        formData.append(key, JSON.stringify(businessData[key]));
      } else {
        // Append regular data as is
        formData.append(key, businessData[key]);
      }
    });

    try {
      setIsLoading(true);

      // validation
      await businessValidationSchema.validate(businessData, {
        abortEarly: false,
      });

      const response = await axios.post(
        `${API_ENDPOINT}/businesses`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
      console.error("Error Adding Business:", error.message);

      toast.error(
        "An error occurred while Adding the business. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {renderFields([
            {
              label: "Business Name",
              type: "text",
              name: "businessName",
              required: true,
            },
          ])}
          {/* types of business */}
          <TypesDropdown
            label="Business Type"
            name="businessType"
            onChange={handleChange}
          />
          {renderFields([
            {
              label: "Owner First Name",
              type: "text",
              name: "ownerFirstName",
              required: true,
            },
            {
              label: "Owner Last Name",
              type: "text",
              name: "ownerLastName",
              required: true,
            },
            {
              label: "Email",
              type: "email",
              name: "email",
              required: true,
            },
            {
              label: "Phone",
              type: "tel",
              name: "phone",
              required: true,
            },
          ])}
          {/* address fields */}
          <>
            <AddressAutocomplete />
          </>
          {/* img and subcrb fields */}
          {renderFields([
            {
              label: "Upload Image",
              type: "file",
              name: "image",
              required: true,
              accept: "image/*",
            },
          ])}
          <div className="checkbox">
            <input
              id="termsAccepted"
              type="checkbox"
              name="termsAccepted"
              value={businessData.termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="termsAccepted">
              I acknowledge that this platform is intended exclusively for the
              promotion of Muslim-owned businesses and professionals.
              Submissions that do not meet this criteria will be removed.
            </label>
          </div>
          {isLoading ? <LoadingSpinner /> : <SubmitBtn />}
        </form>
      </div>
    </Wrapper>
  );
};

export default AddBusinessForm;

const Wrapper = styled.section`
  margin-bottom: 5rem;
  .container {
    max-width: 50vw;
    margin: 0 auto;
    .form {
      display: flex;
      flex-direction: column;

      .checkbox {
        display: grid;
        grid-template-columns: 12px auto;
        align-items: center;
        gap: 1rem;
        label {
          margin: 0;
          font-size: 0.65rem;
        }
        input {
          margin: 0 0.5rem;
          width: 12px;
          height: 12px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      max-width: 70vw;
    }
  }
`;
