import styled from "styled-components";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

const ProductsToAvoidPage = () => {
  return (
    <Wrapper className="page-100 products-to-avoid">
      <section className="container">
        <h1 className="title">Companies / products to avoid</h1>
        <Link
          href="https://img1.wsimg.com/blobby/go/e8c203fc-8c49-4d99-9270-badde08d2f65/Products%20to%20Avoid-278a355.pdf"
          target="_blank"
          className="btn"
        >
          View Full Document
        </Link>
        {/* Search bar */}
        <Searchbar className="searchbar" placeholder="search a product" />
      </section>
    </Wrapper>
  );
};

export default ProductsToAvoidPage;

const Wrapper = styled.main`
  padding: 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .searchbar {
    input {
      border: 2px solid #d9c59b;
      border-radius: 5px;
      outline: none;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      min-width: 45vw;
    }
    &::placeholder {
      text-transform: capitalize;
    }
  }
  .title {
    text-align: center;
    padding-top: 1.5rem;
    line-height: 1.25;
    color: var(--clr-primary-5);
  }
  .btn {
    margin: 0.25rem 0 1.25rem 0;
  }

  @media screen and (max-width: 992px) {
    .searchbar {
      input {
        min-width: 90vw;
      }
    }
    h1 {
      font-size: 1.75rem;
    }
    .btn {
      font-size: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }
  }
`;
