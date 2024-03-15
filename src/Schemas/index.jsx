import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicSchema = yup.object().shape({
  email: yup.string().email("Please Enter a Valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const AdvancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be 3 characters")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["developer", "designer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of services"),
});
