import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    featured_products: products,
    products_error: error,
  } = useProductsContext();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="section-center featured">
        {products.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding-top: 3rem;

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
