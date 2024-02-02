import styled from "styled-components";
import { useAddressContext } from "../../context/address_context";

const AddressAutocomplete = ({ data, professional = false }) => {
  const { handleSelectSuggestion, handleChange, suggestions, wrapperRef } =
    useAddressContext();

  return (
    <Wrapper ref={wrapperRef}>
      <label htmlFor="address">{professional ? "Address (min. City/State)" : "Address" }</label>
      <input
        id="address"
        type="text"
        name="address"
        autoComplete="off"
        value={data.address}
        onChange={handleChange}
      />
      <ul
        className={`${
          suggestions.length === 0 ? "display-none" : "display-block"
        }`}
      >
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.place_id}
            onClick={() =>
              handleSelectSuggestion(
                suggestion.description,
                suggestion.place_id
              )
            }
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
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
    width: 100%;
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
    font-size: 0.75rem;

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
