import { useBusinessContext } from "../../context/business_context";
import styled from "styled-components";

const AddressStateDropdown = ({ selectedState, onStateChange, states }) => {
  const { setBusinessData } = useBusinessContext();

  const handleChange = (e) => {
    const newState = e.target.value;
    onStateChange(newState);
    setBusinessData((prevData) => ({ ...prevData, state: newState }));
  };

  return (
    <Wrapper>
      <label htmlFor="state">State</label>
      <select
        id="state"
        name="state"
        value={selectedState}
        onChange={handleChange}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default AddressStateDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  select {
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: var(--clr-white);

    border: 2px solid var(--clr-primary-5);
    border-radius: 5px;
    outline: none;
    box-shadow: var(--light-shadow);
  }
  @media screen and (max-width: 768px) {
    option {
      font-size: 1rem;
    }
  }
`;
