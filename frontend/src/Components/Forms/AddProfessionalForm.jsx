import { useState } from "react";
import styled from "styled-components";
import FormField from "./FormField";

const AddProfessionalForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    yearsInProfession: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Wrapper>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <FormField
            label="Title/Profession"
            type="text"
            name="title"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />
          <FormField
            label="First Name"
            type="text"
            name="firstName"
            required={true}
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Last Name"
            type="text"
            name="firstName"
            required={true}
            value={formData.lastName}
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
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
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
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        {/* 
        <SubscribeBox>
          <h2>Subscribe to our Newsletter</h2>
         Add subscription form elements here  
        </SubscribeBox>

        <ShareBox>
          <p>
            Share your experience with others. Click{" "}
            <ShareLink href="#">here</ShareLink> to share.
          </p>
        </ShareBox> */}
      </div>
    </Wrapper>
  );
};

export default AddProfessionalForm;

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
