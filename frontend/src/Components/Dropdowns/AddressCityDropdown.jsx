import { useEffect } from "react";
import { useBusinessContext } from "../../context/business_context";
import styled from "styled-components";

const AddressCityDropdown = ({ cities }) => {
  const { businessData, setBusinessData } = useBusinessContext();

  const handleChange = (e) => {
    const newCity = e.target.value;
    setBusinessData((prevData) => ({ ...prevData, city: newCity }));
  };

  useEffect(() => {
    setBusinessData((prevData) => ({ ...prevData, city: "" }));
  }, [businessData.state]);

  return (
    <Wrapper>
      <label htmlFor="city">City:</label>
      <select
        id="city"
        name="city"
        onChange={handleChange}
        value={businessData.city}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default AddressCityDropdown;

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
    input {
      min-width: 50%;
    }
    option {
      font-size: 10px;
    }
  }
`;
