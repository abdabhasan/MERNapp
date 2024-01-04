import styled from "styled-components";

const Title = ({ name }) => {
  return (
    <Wrapper className="title">
      <div className="title">
        <h2>{name}</h2>
        <div className="underline"></div>
      </div>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem 0 2.5rem;

  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
`;
