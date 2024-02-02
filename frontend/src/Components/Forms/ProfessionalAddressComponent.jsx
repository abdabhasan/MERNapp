import { useProfessionalContext } from "../../context/professional_context";
import AddressAutocomplete from "./AddressAutocomplete.jsx";
import { AddressProvider } from "../../context/address_context";

const ProfessionalAddressComponent = () => {
  const { professionalData, setProfessionalData } = useProfessionalContext();

  return (
    <AddressProvider data={professionalData} setData={setProfessionalData}>
      <AddressAutocomplete data={professionalData} professional={true} />
    </AddressProvider>
  );
};

export default ProfessionalAddressComponent;
