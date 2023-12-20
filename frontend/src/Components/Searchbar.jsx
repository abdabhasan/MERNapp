import styled from "styled-components";

const Searchbar = ({ text, placeholder }) => {
  const updateFilters = () => {
    console.log("update filters");
  };

  return (
    <Werapper className="form-control searchbar">
      <input
        type="text"
        name="text"
        placeholder={placeholder}
        className="search-input search-bar"
        // value={text}
        onChange={updateFilters}
      />
    </Werapper>
  );
};

export default Searchbar;

const Werapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .search-input {
    min-width: 45vw;
    padding: 0.6rem;
    margin: 2rem 1rem;

    border: none;
    border-radius: var(--radius);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    letter-spacing: var(--spacing);
    background: var(--clr-grey-10);
    border-color: var(--clr-primary-5);

    &:focus {
      outline: none;
      box-shadow: 0 0 10px var(--clr-primary-5);
    }
    &::placeholder {
      text-transform: capitalize;
    }
  }

  @media (max-width: 992px) {
    .search-input {
      min-width: 60vw;
    }
  }
  @media (max-width: 768px) {
    .search-input {
      min-width: 80vw;
    }
  }
`;
