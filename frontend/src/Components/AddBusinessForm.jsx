import { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBusinessForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    phone: "",
    businessType: "",
    city: "",
    state: "",
    image: null,
    subscribe: false,
  });

  const resetFormData = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      businessName: "",
      ownerFirstName: "",
      ownerLastName: "",
      email: "",
      phone: "",
      businessType: "",
      city: "",
      state: "",
      image: null,
      subscribe: false,
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/add-business",
        formData,
        { withCredentials: true }
      );

      toast.success("Business Submitted");
      console.log(response.data);
      resetFormData();
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <FormField
            label="Business Name"
            type="text"
            name="businessName"
            required={true}
            value={formData.businessName}
            onChange={handleChange}
          />
          <FormField
            label="Owner First Name"
            type="text"
            name="ownerFirstName"
            required={true}
            value={formData.ownerFirstName}
            onChange={handleChange}
          />
          <FormField
            label="Owner Last Name"
            type="text"
            name="ownerLastName"
            required={true}
            value={formData.ownerLastName}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            required={true}
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Phone (optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormField
            label="Business Type"
            type="text"
            name="businessType"
            required={true}
            value={formData.businessType}
            onChange={handleChange}
          />
          <FormField
            label="City"
            type="text"
            name="city"
            required={true}
            value={formData.city}
            onChange={handleChange}
          />
          <FormField
            label="State"
            type="text"
            name="state"
            required={true}
            value={formData.state}
            onChange={handleChange}
          />

          <FormField
            label="Upload Image"
            type="file"
            name="image"
            required={true}
            accept="image/*"
            onChange={handleChange}
          />
          <FormField
            label="Subscribe"
            type="checkbox"
            name="subscribe"
            className="checkbox"
            value={formData.subscribe}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </Wrapper>
  );
};

export default AddBusinessForm;

const Wrapper = styled.section`
  margin-bottom: 5rem;
  .container {
    max-width: 50vw;
    margin: 0 auto;
    .form {
      display: flex;
      flex-direction: column;

      .checkbox {
        display: flex;
        flex-direction: row;
        label {
          margin: 0;
        }
        input {
          margin: 0 0.5rem;
        }
      }
      button {
        margin-top: 1rem;
        padding: 0.5rem;
      }
    }
  }
`;
