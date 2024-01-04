import styled from "styled-components";

import { useProductsToAvoidContext } from "../../context/products_to_avoid_context";
import CompaniesContainer from "../Containers/CompaniesContainer";

const ProductsToAvoidSearchbar = () => {
  const {
    data,
    setFilteredData,
    isCompaniesContainerOpen,
    setIsCompaniesContainerOpen,
    searchQuery,
    setSearchQuery,
  } = useProductsToAvoidContext();

  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  const handelChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  return (
    <Wrapper
      className="form-control searchbar"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="search a product"
        className="search-input search-bar"
        value={searchQuery}
        onChange={handelChange}
        onClick={() => setIsCompaniesContainerOpen(true)}
      />
      {isCompaniesContainerOpen && <CompaniesContainer />}
    </Wrapper>
  );
};

export default ProductsToAvoidSearchbar;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .search-input {
    display: block;
    text-align: start !important;
    min-width: 45vw;

    padding: 0.6rem;
    margin: 2rem 1.25rem 0;

    border: none;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
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

  button {
    padding: 0.3rem 2rem;
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
