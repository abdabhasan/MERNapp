import styled from "styled-components";
import Shop from "../Shop";

const GridView = ({ shops }) => {
  return (
    <Wrapper>
      <div className="shops-container">
        {shops.map((shop) => {
          return <Shop key={shop._id} {...shop} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .shops-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .shops-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .shops-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
