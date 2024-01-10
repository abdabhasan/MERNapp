import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";

const Shop = ({
  image,
  _id,
  businessName,
  businessType,
  city,
  state,
  phone,
  street,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={businessName} />
        <Link to={`/shops/${_id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{businessName}</h5>
        <p>{businessType}</p>
        <div className="underline"></div>
        <div className="info-row">
          <div className="address">
            <p>{street}</p>
            <p>
              {state}, {city}
            </p>
          </div>
          <div className="contact">
            <p>{phone}</p>
            <SocialMediaLinks
              facebook="https://facebook.com"
              instagram="https://instagram.com"
              website="https://instagram.com"
              other="https://instagram.com"
            />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--clr-white);
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
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: var(--radius);

    h5,
    p {
      text-align: center;
    }
    p {
      margin: 0;
    }
    .underline {
      width: 100%;
      height: 0.5px;
      background-color: var(--clr-black);
      margin: 0.5rem 0;
    }
    .info-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      margin-top: 1rem;
      p {
        margin: 0;
        text-align: start;
        font-size: 12px;
      }
      .contact {
        display: flex;
        flex-direction: column;
        text-align: end;
        p {
          text-align: end;
        }
      }
    }

    h5 {
      margin-bottom: 0;
      font-weight: 400;
    }
  }
`;
export default Shop;
