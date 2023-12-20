import styled from "styled-components";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-bg"></div>
        <h1 className="hero-title">
          Uniting Faith and Commerce
          <br />
          The Marketplace for Muslims
        </h1>
        <div className="hero-searchbar">
          <Searchbar placeholder="search..." />
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
      background-image: url("https://img.freepik.com/free-photo/illuminated-ancient-corridor-leads-modern-spirituality-generated-by-ai_188544-13359.jpg?w=1380&t=st=1702301586~exp=1702302186~hmac=10b7aabaf66ebc37ddfaaca482608bd532f5d3bf0f7908c08a88aaba4b04bc50");
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
    padding-top: 15%;
    line-height: 1.25;
    color: var(--clr-primary-5);
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
