import * as Yup from "yup";

const professionalValidationSchema = Yup.object().shape({
  profession: Yup.string()
    .required("Profession is required")
    .min(3, "Profession Name must be at least 3 characters")
    .max(50, "Profession Name Name must be at most 50 characters"),
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "First Name must be at least 3 characters")
    .max(25, "First Name must be at most 25 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Last Name must be at least 3 characters")
    .max(25, "Last Name must be at most 25 characters"),
  type: Yup.string()
    .required("Profession Type is required")
    .min(3, "Profession Type must be at least 3 characters")
    .max(25, "Profession Type must be at most 15 characters"),
  yearsInProfession: Yup.number()
    .required("Years In Profession is required")
    .min(0, "Years In Profession must be at least 0")
    .max(60, "Years In Profession must be at most 60")
    .integer("Years In Profession must be an integer"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid phone number"),
  termsAccepted: Yup.boolean()
    .required("You must agree to the terms and conditions")
    .oneOf([true], "You must agree to the terms and conditions"),
  bg: Yup.mixed()
    .required("The image is required")
    .test(
      "fileSize",
      "The maximum image size is 5MB",
      (value) => value && value.size <= 5242880 // 5MB in byte
    ),
});

export default professionalValidationSchema;
