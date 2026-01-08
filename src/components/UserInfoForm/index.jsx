import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { USER_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas';

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників

function UserInfoForm () {
  const userInitialValues = { firstName: '' };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <label>
              <span>Name:</span>
              <Field
                type='string'
                name='firstName'
                placeholder='Name'
                autoFocus
              />

              <ErrorMessage name='firstName' component='div' />
            </label>

            <button type='submit'>Save</button>
            <button type='reset' disabled={!formikProps.dirty}>
              Cancel
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
