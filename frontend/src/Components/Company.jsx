import styled from "styled-components";

const Company = ({ name, productName }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <p>{name}</p>

          {productName && <p>{productName}</p>}
        </div>
      </header>
      <div className="content"></div>
    </Wrapper>
  );
};

export default Company;

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--light-shadow);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--clr-grey-10);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--clr-white);
    margin-right: 2rem;
  }
  .info {
    p {
      margin-bottom: 0;
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
`;
