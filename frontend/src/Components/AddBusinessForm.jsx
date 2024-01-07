import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_ENDPOINT } from "../utils/constants";
import { toast } from "react-toastify";
import { useBusinessContext } from "../context/business_context";

import businessValidationSchema from "../validation/businessValidation";
import FormField from "./FormField";
import SubmitBtn from "./SubmitBtn";
import AddressFields from "./Address/AddressFields";
import LoadingSpinner from "./LoadingSpinner";
import TypesDropdown from "./TypesDropdown";

const AddBusinessForm = () => {
  const { businessData, setBusinessData, initialBusinessData } =
    useBusinessContext();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setBusinessData({ ...businessData, [e.target.name]: e.target.files });
    } else {
      setBusinessData({ ...businessData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await businessValidationSchema.validate(businessData, {
        abortEarly: false,
      });

      const formData = new FormData();
      for (const key in businessData) {
        if (key === "image") {
          formData.append(key, businessData[key][0]); // Assuming image is a FileList
        } else {
          formData.append(key, businessData[key]);
        }
      }

      const response = await axios.post(
        `${API_ENDPOINT}/businesses`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
            <AddressFields />
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
            {
              label: "Subscribe",
              type: "checkbox",
              name: "subscribe",
              className: "checkbox",
            },
          ])}
          {isLoading ? <LoadingSpinner /> : <SubmitBtn />}
          {}
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
        display: flex;
        flex-direction: row;
        label {
          margin: 0;
        }
        input {
          margin: 0 0.5rem;
        }
      }
    }
    @media screen and (max-width: 768px) {
      max-width: 70vw;
    }
  }
`;
