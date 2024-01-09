import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useShopsContext } from "../context/shops_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  LoadingSpinner,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../Components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleShopPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_shop_loading: loading,
    single_shop_error: error,
    single_shop: shop,
    fetchSingleShop,
  } = useShopsContext();

  useEffect(() => {
    fetchSingleShop(`${url}${id}`);
  }, []);

  // Error and Loading handling
  useEffect(() => {
    console.log(error);
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <>
        <h2>there was an error</h2>
      </>
    );
  }

  const { _id, businessName, bio, image } = shop;

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/shop-local" className="btn">
          back to shops list
        </Link>
        <div className="shop-center">
          {/* <ProductImages images={images} /> */}
          <section className="content">
            <h2>{businessName}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <p className="desc">{bio}</p>
            {/* <p className="info">
              <span>Available :</span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p> */}
            {/* <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleShopPage;
