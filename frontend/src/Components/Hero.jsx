import styled from "styled-components";
import NavigateBtn from "./Btns/NavigateBtn";

const bgImage = import.meta.env.VITE_HERO_BACKGROUND;

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-bg"></div>
        <h1 className="hero-title">The Marketplace for Muslims</h1>
        <div className="btns">
          <NavigateBtn to="shop-local" text="shop local" />
          <NavigateBtn to="about" text="about us" />
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
        background-color: rgba(0, 0, 0, 0.5);
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
