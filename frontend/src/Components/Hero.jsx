import styled from "styled-components";
import bgImage from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-bg"></div>
        <h1 className="hero-title">The Marketplace for Muslims</h1>
        <div className="btns">
          <Link to="/shop-local">
            <button className="btn custom"> shop local </button>
          </Link>
          <Link to="/about">
            <button className="btn">about us</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-container {
    position: relative;
    min-height: 95vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    .hero-bg {
      position: absolute;
      background: url(${bgImage});
      background-size: cover;
      background-position: center;

      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -999999;

      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(
          0,
          0,
          0,
          0.5
        ); /* Black overlay with 50% opacity */
      }
    }
  }

  .hero-title {
    text-align: center;
    padding-top: 10%;
    line-height: 1.25;
    color: var(--clr-primary-5);
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;
    a {
      width: 100%;
    }
    button {
      margin-bottom: 1rem;
      display: block;
      width: 100%;
    }
    .custom {
      padding-left: 2.85rem;
      padding-right: 2.85rem;
    }
  }

  @media (max-width: 992px) {
    .hero-title {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 576px) {
    .hero-title {
      font-size: 1rem;
    }
  }
`;

export default Hero;
