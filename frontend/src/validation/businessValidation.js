import * as Yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const businessValidationSchema = Yup.object().shape({
  businessName: Yup.string()
    .required("Business Name is required")
    .min(3, "Business Name must be at least 3 characters")
    .max(50, "Business Name Name must be at most 50 characters"),
  ownerFirstName: Yup.string()
    .required("Owner First Name is required")
    .min(3, "Owner First Name must be at least 3 characters")
    .max(25, "Owner First Name must be at most 25 characters"),
  ownerLastName: Yup.string()
    .required("Owner Last Name is required")
    .min(3, "Owner Last Name must be at least 3 characters")
    .max(25, "Owner Last Name must be at most 25 characters"),
  businessType: Yup.string()
    .required("Business Type is required")
    .min(3, "Business Type must be at least 3 characters")
    .max(25, "Business Type must be at most 15 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
});

export default businessValidationSchema;
