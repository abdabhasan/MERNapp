import styled from "styled-components";

const FormField = ({
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
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        accept={accept}
        checked={checked}
        aria-label={label}
        {...(required && { required: true })}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 2px solid var(--clr-primary-5);
    border-radius: 5px;
    outline: none;
    box-shadow: var(--light-shadow);
  }

  @media screen and (max-width: 768px) {
    input {
      min-width: 50%;
    }
  }
`;

export default FormField;
