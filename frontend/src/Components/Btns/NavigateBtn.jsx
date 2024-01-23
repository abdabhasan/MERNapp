import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigateBtn = ({ to, text }) => {
  return (
    <Wrapper>
      <Link to={`/${to}`}>
        <button className="btn">{text}</button>
      </Link>
    </Wrapper>
  );
};

export default NavigateBtn;

const Wrapper = styled.div`
  width: 100%;
  button {
    margin-bottom: 1rem;
    display: block;
    padding: 0.35rem 2.75rem;
    width: 100%;
  }
`;
