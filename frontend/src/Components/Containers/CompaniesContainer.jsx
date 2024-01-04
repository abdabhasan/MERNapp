import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useProductsToAvoidContext } from "../../context/products_to_avoid_context";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const PRODUCTS_TO_AVOID_ENDPOINT = "/products-to-avoid";

const CompaniesContainer = () => {
  const {
    setIsLoading,
    setData,
    filteredData,
    setIsCompaniesContainerOpen,
    setSearchQuery,
    searchQuery,
  } = useProductsToAvoidContext();

  const componentRef = useRef();

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsCompaniesContainerOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${API_URL}${PRODUCTS_TO_AVOID_ENDPOINT}`
        );
        const jsonData = response.data.companies;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with error status:",
            error.response.status
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={componentRef}>
      <div className="companies">
        <ul>
          {filteredData.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
        {filteredData.length === 0 && <p>No products found</p>}
      </div>
    </Wrapper>
  );
};

export default CompaniesContainer;

const Wrapper = styled.section`
  .companies {
    min-width: 90vw;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    background-color: var(--clr-white);
    box-shadow: var(--light-shadow);

    max-height: 300px;
    overflow-y: auto;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      text-align: start;
      li {
        margin-bottom: 0.25rem;
        padding: 0.25rem;
        cursor: pointer;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
    p {
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    .companies {
      min-width: 45vw;
    }
  }
`;
