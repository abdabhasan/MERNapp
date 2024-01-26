import styled from "styled-components";
import ProductsToAvoidSearchbar from "../Components/Searchbars/ProductsToAvoidSearchbar";
import { Title } from "../Components";

const ProductsToAvoidPage = () => {
  return (
    <Wrapper className="page-100 products-to-avoid">
      <section className="container">
        <Title name="products to avoid" />
        <div className="desc">
          <h5>
            Check if a product/company is actively contributing to the
            occupation of Palestine.
          </h5>
          <br />
          <p>
            You can find the reasons for avoiding many products and companies by
            visiting:
            <a target="_blank" href="https://boycott.thewitness.news/browse/1">
              The Witness.
            </a>
          </p>
        </div>
        {/* Search bar */}
        <ProductsToAvoidSearchbar />
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
    max-width: 750px;
    h5 {
      text-transform: none;
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
