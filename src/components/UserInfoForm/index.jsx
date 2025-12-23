import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників

function UserInfoForm() {
  const userInitialValues = { firstName: "" };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              type="string"
              name="firstName"
              value={formikProps.values.firstName}
              onChange={formikProps.handleChange}
              placeholder="Name"
              autoFocus
            />
            {formikProps.errors.firstName && formikProps.touched.firstName && (
              <div>{formikProps.errors.firstName}</div>
            )}
            <button type="submit">Save</button>
            <button type="reset" disabled={!formikProps.dirty}>
              Cancel
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
