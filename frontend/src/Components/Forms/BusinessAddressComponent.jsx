import { useBusinessContext } from "../../context/business_context";
import AddressAutocomplete from "./AddressAutocomplete.jsx";
import { AddressProvider } from "../../context/address_context";

const BusinessAddressComponent = () => {
  const { businessData, setBusinessData } = useBusinessContext();

  return (
    <AddressProvider data={businessData} setData={setBusinessData}>
      <AddressAutocomplete data={businessData} />
    </AddressProvider>
  );
};
export default BusinessAddressComponent;
