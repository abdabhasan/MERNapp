import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="Muslim Local" />
        {/* Logo */}
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 140px;
    margin-left: -15px;
  }
`;
