import styled from "styled-components";
import { businessTypes } from "../../utils/constants";

const TypesDropdown = ({ label, name, value, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}:</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Select Type</option>
        {businessTypes.map((business) => (
          <option key={business} value={business}>
            {business}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default TypesDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  select {
    margin-bottom: 1rem !important;
    padding: 0.5rem !important;
    background-color: var(--clr-white) !important;

    border: 2px solid var(--clr-primary-5) !important;
    border-radius: 5px !important;
    outline: none !important;
    box-shadow: var(--light-shadow) !important;
  }
  @media screen and (max-width: 768px) {
    option {
      font-size: 10px !important;
    }
  }
`;
