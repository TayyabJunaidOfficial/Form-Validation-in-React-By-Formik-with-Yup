import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { AdvancedSchema } from "../Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: "false" }}
      validationSchema={AdvancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter Your Username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please Select a Job"
          >
            <option value="">Please Select a Job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>

          <CustomCheckbox type="checkbox" name="acceptedTos" />

          {/* <Field type="email" name="name" placeholder="Email" /> */}
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
