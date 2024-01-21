import { useAddressContext } from "../../context/address_context";
import { useBusinessContext } from "../../context/business_context";
import styled from "styled-components";

const AddressAutocomplete = () => {
  const { handleAddressChange, handleAddressSelect, suggestions } =
    useAddressContext();
  const {
    businessData: { address },
  } = useBusinessContext();

  return (
    <Wrapper>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        value={address.name}
        onChange={handleAddressChange}
      />
      {address.name.length > 2 && (
        <ul
          className={`${
            suggestions.length === 0 ? "display-none" : "display-block"
          }`}
        >
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() =>
                handleAddressSelect(item.display_name, item.lat, item.lon)
              }
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default AddressAutocomplete;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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

  ul {
    position: absolute;
    max-height: 200px;
    overflow-y: scroll;
    top: 4.25rem;
    z-index: 999999;

    margin-bottom: 1rem;
    background-color: var(--clr-white);

    border: 2px solid var(--clr-primary-5);
    border-radius: 5px;
    outline: none;
    box-shadow: var(--light-shadow);
  }

  .display-none {
    display: none;
  }

  .display-block {
    display: block;
  }

  li {
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-grey-9);
    }
  }

  @media screen and (max-width: 768px) {
    input {
      min-width: 50%;
    }
    li {
      font-size: 10px;
    }
  }
`;
