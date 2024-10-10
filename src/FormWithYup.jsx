import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
});

function FormWithYup() {
  return (
  
    <Formik
   
      initialValues={{ name: '', email: '', age: '' }}
      validationSchema={validationSchema} 
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2)); 
          setSubmitting(false); 
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <h1>Form With Yup</h1>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <Field type="number" name="age" />
            <ErrorMessage name="age" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormWithYup;
