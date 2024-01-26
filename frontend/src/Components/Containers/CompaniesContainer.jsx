import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useProductsToAvoidContext } from "../../context/products_to_avoid_context";

const CompaniesContainer = () => {
  const { filteredData, setSearchQuery } = useProductsToAvoidContext();

  const componentRef = useRef();

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setSearchQuery("");
    }
  };

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
        padding: 0.15rem 0.5rem;
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
