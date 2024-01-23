import { useState } from "react";
import styled from "styled-components";
import { useBusinessContext } from "../../context/business_context";

import FormField from "./FormField";
import SubmitBtn from "../Btns/SubmitBtn";
import Checkbox from "../Btns/Checkbox";
import AddressAutocomplete from "./AddressAutocomplete.jsx";
import LoadingSpinner from "../LoadingSpinner";
import TypesDropdown from "../Dropdowns/TypesDropdown";

const AddBusinessForm = () => {
  const { businessData, handleChange, handleSubmit, isLoading } =
    useBusinessContext();

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

          {/* checkboxes */}
          <>
            <Checkbox
              name="subscribeMailinglist"
              value={businessData.termsAccepted}
              handleChange={handleChange}
              labelText="Subscribe to our mailing list"
            />
            <Checkbox
              name="termsAccepted"
              value={businessData.termsAccepted}
              required
              handleChange={handleChange}
              labelText="I acknowledge that this platform is intended exclusively for the
              promotion of Muslim-owned businesses and professionals.
              Submissions that do not meet this criteria will be removed."
            />
          </>

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
    }
    @media screen and (max-width: 768px) {
      max-width: 70vw;
    }
  }
`;
