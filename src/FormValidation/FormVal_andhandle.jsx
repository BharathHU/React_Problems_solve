import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

const validateForm = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Enter the name"),

  age: Yup.number()
    .integer("Age must be integer")
    .required("Enter the age"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Enter the email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter the password"),

  cnfpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

function FormVal_andhandle() {
  const formStyle = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      background: "#f9f9f9",
      fontFamily: "Arial",
    },

    field: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },

    error: {
      color: "red",
      fontSize: "12px",
      marginBottom: "10px",
    },

    button: {
      width: "100%",
      padding: "10px",
      background: "blue",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={formStyle.container}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <Formik
        initialValues={{
          name: "",
          age: "",
          email: "",
          password: "",
          cnfpassword: "",
        }}
        validationSchema={validateForm}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("Form Submitted Successfully!");

          resetForm();
        }}
      >
        <Form>
          <Field
            name="name"
            placeholder="Name"
            style={formStyle.field}
          />
          <ErrorMessage
            name="name"
            component="div"
            style={formStyle.error}
          />

          <Field
            name="age"
            type="number"
            placeholder="Age"
            style={formStyle.field}
          />
          <ErrorMessage
            name="age"
            component="div"
            style={formStyle.error}
          />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            style={formStyle.field}
          />
          <ErrorMessage
            name="email"
            component="div"
            style={formStyle.error}
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            style={formStyle.field}
          />
          <ErrorMessage
            name="password"
            component="div"
            style={formStyle.error}
          />

          <Field
            name="cnfpassword"
            type="password"
            placeholder="Confirm Password"
            style={formStyle.field}
          />
          <ErrorMessage
            name="cnfpassword"
            component="div"
            style={formStyle.error}
          />

          <button type="submit" style={formStyle.button}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormVal_andhandle;
