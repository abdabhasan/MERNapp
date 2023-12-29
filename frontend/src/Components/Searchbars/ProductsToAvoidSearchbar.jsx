import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const ProductsToAvoidSearchbar = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products-to-avoid`);
        const jsonData = response.data.companies;
        console.log(jsonData);
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );

    // Ensure filtered is always an array
    const filteredArray = Array.isArray(filtered) ? filtered : [];
    setFilteredData(filteredArray);
  };

  return (
    <Wrapper className="form-control searchbar">
      <div>
        <input
          type="text"
          placeholder="search a product"
          className="search-input search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default ProductsToAvoidSearchbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .search-input {
    display: block;
    min-width: 45vw;
    padding: 0.6rem;
    margin: 2rem 1rem 1.25rem;

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
