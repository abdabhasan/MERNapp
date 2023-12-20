import styled from "styled-components";

const FormInput = ({
  label,
  type,
  name,
  required = false,
  value,
  onChange,
  accept,
  checked,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        accept={accept}
        checked={checked}
        {...(required && { required: true })}
      />
    </Wrapper>
  );
};

export default FormInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
  }
  input {
    margin-bottom: 1rem;
    padding: 0.5rem;

    border: 2px solid var(--clr-primary-5);
    border-radius: 5px;
    outline: none;
    box-shadow: var(--light-shadow);
  }
`;
