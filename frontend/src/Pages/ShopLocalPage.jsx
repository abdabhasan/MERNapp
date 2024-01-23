import { FeaturedShops, Title } from "../Components";
import ShopsContainer from "../Components/Containers/ShopsContainer";
import styled from "styled-components";

const ShopLocalPage = () => {
  return (
    <>
      <Wrapper className="page-100">
        <Title name="coming soon!" />
        {/* <Title name="shop local" /> */}
        {/* <FeaturedShops />
      <ShopsContainer /> */}
      </Wrapper>
    </>
  );
};

export default ShopLocalPage;

const Wrapper = styled.div`
  background: url("https://images.unsplash.com/photo-1705957231585-c092c8396c70?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
  }
`;
