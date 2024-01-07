import { useShopsContext } from "../context/shops_context";
import styled from "styled-components";
import Error from "./Error";
import LoadingSpinner from "./LoadingSpinner";
import Shop from "./Shop";

const FeaturedShops = () => {
  const {
    shops_loading: loading,
    featured_shops: shops,
    shops_error: error,
  } = useShopsContext();

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="section-center featured">
        {shops.slice(0, 3).map((shop) => {
          return <Shop key={shop._id} {...shop} />;
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

export default FeaturedShops;
