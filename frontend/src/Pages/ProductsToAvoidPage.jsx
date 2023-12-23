import styled from "styled-components";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

const ProductsToAvoidPage = () => {
  return (
    <Wrapper className="page-100 products-to-avoid">
      <section className="container">
        <h2 className="title">products to avoid</h2>
        <div className="desc">
          <h5 className="custom">
            Considering purchasing something, but not sure if you should?
          </h5>
          <h5>
            Use to search box to find out if it's on the list of products to
            avoid.
          </h5>
          <br />
          <p>
            You can also find the reasons for avoiding certain products and
            companies by visiting the following site :
            <a href="https://boycott.thewitness.news/browse/1"> The Witness.</a>
          </p>
        </div>
        {/* <Link
          href="https://img1.wsimg.com/blobby/go/e8c203fc-8c49-4d99-9270-badde08d2f65/Products%20to%20Avoid-278a355.pdf"
          target="_blank"
          className="btn"
        >
          View Full Document
        </Link> */}
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
    text-align: center;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .custom {
      font-size: 1.05rem;
    }
    p {
      font-size: 0.75rem;
      line-height: 1.5rem;
      a {
        color: var(--clr-black);
        text-decoration: underline;
        &:hover {
          color: var(--clr-primary-5);
          background-color: var(--clr-black);
          transition: var(--transition);
        }
      }
    }
  }
  .title {
    text-align: center;
    padding-top: 1.5rem;
    margin-bottom: 1.25rem;
    line-height: 1.25;
    color: var(--clr-primary-5);
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
    h5 {
      font-size: 0.75rem;
      margin: 0.5rem 1rem;
    }
  }
`;
