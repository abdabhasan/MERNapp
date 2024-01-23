import { useBusinessContext } from "../../context/business_context";
import styled from "styled-components";

const Checkbox = ({
  name,
  value,
  labelText,
  required = false,
  handleChange,
}) => {
  return (
    <>
      <Wrapper className="checkbox">
        <input
          id={name}
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
          {...(required && { required: true })}
        />
        <label htmlFor={name}>{labelText}</label>
      </Wrapper>
    </>
  );
};

export default Checkbox;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 12px auto;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;

  label {
    margin: 0;
    font-size: 0.65rem;
  }
  input {
    margin: 0 0.5rem;
    width: 12px;
    height: 12px;
  }
`;
