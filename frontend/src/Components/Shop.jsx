import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = ({
  image,
  _id,
  businessName,
  ownerFirstName,
  businessType,
  city,
  state,
  email,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src="https://deih43ym53wif.cloudfront.net/large_shutterstock_212292862.jpg_c15c6a1832.jpg"
          alt={businessName}
        />
        <Link to={`/shops/${_id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{businessName}</h5>
        <p>{ownerFirstName}</p>
        <p>{businessType}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{ownerFirstName}</p>
        <p>{email}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    h5 {
      margin-bottom: 0;
      font-weight: 400;
    }
  }
`;
export default Shop;
