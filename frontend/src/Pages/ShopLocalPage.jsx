import { FeaturedShops, Title } from "../Components";
import ShopsContainer from "../Components/Containers/ShopsContainer";

const ShopLocalPage = () => {
  return (
    <>
      <Title name="shop local" />
      <FeaturedShops />
      <ShopsContainer />
    </>
  );
};

export default ShopLocalPage;
