import { allStates, citiesByState } from "../../utils/constants";
import AddressStateDropdown from "../Dropdowns/AddressStateDropdown";
import AddressCityDropdown from "../Dropdowns/AddressCityDropdown";
import FormField from "./FormField";
import { useBusinessContext } from "../../context/business_context";

const AddressFields = () => {
  const { businessData, setBusinessData } = useBusinessContext();

  const handleChange = (e) => {
    setBusinessData({ ...businessData, [e.target.name]: e.target.value });
  };

  const handleStateSelect = (value) => {
    console.log(citiesByState[businessData.state]);

    setBusinessData((prevData) => ({ ...prevData, state: value }));
  };

  const handleCitySelect = (e, value) => {
    setBusinessData((prevData) => ({ ...prevData, city: value }));
  };

  return (
    <>
      <AddressStateDropdown
        selectedState={businessData.state}
        onStateChange={handleStateSelect}
        states={allStates}
      />
      <AddressCityDropdown
        selectedCity={businessData.city}
        onCityChange={handleCitySelect}
        cities={citiesByState[businessData.state] || []}
      />
      <FormField
        label="Street"
        type="text"
        name="street"
        required={true}
        value={businessData.street}
        onChange={handleChange}
      />
    </>
  );
};

export default AddressFields;
