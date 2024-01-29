import styled from "styled-components";
import { useProfessionalContext } from "../../context/professional_context";

import FormField from "./FormField";
import SubmitBtn from "../Btns/SubmitBtn";
import Checkbox from "../Btns/Checkbox";
import ProfessionalAddressComponent from "./ProfessionalAddressComponent.jsx";
import LoadingSpinner from "../LoadingSpinner";
import TypesDropdown from "../Dropdowns/TypesDropdown";

const AddProfessionalForm = () => {
  const { professionalData, handleChange, handleSubmit, isLoading } =
    useProfessionalContext();

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
        value={professionalData[name]}
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
              label: "profession",
              type: "text",
              name: "profession",
              required: true,
            },
          ])}
          <TypesDropdown
            professional={true}
            label="profession type"
            name="type"
            value={professionalData.type}
            onChange={handleChange}
          />

          {renderFields([
            {
              label: "years in profession",
              type: "number",
              name: "yearsInProfession",
              required: true,
            },
            {
              label: "first name",
              type: "text",
              name: "firstName",
              required: true,
            },
            {
              label: "last name",
              type: "text",
              name: "lastName",
              required: true,
            },
            {
              label: "email",
              type: "email",
              name: "email",
              required: true,
            },
            {
              label: "Phone  ",
              type: "tel",
              name: "phone",
              required: true,
            },
          ])}
          {/* address fields */}
          <>
            <ProfessionalAddressComponent />
          </>
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
              value={professionalData.mailinglist}
              handleChange={handleChange}
              labelText="Subscribe to our mailing list"
            />
            <Checkbox
              name="termsAccepted"
              value={professionalData.termsAccepted}
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

export default AddProfessionalForm;

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
