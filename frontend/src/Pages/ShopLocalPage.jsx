import { FeaturedShops, Title } from "../Components";
import ShopsContainer from "../Components/Containers/ShopsContainer";
import styled from "styled-components";

const ShopLocalPage = () => {
  return (
    <Wrapper className="page-100">
      {/* <Title name="shop local" /> */}
      <Title name="coming soon!" />
      {/* <FeaturedShops />
      <ShopsContainer /> */}
    </Wrapper>
  );
};

export default ShopLocalPage;

const Wrapper = styled.div`
  background: url("");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
