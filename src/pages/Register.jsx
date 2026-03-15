import React, { useContext } from "react";
import { useFormik } from "formik";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

const validate = (values) => {
  const errors = {};

  // First Name: Max 15 chars
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  // Surname: Max 20 chars
  if (!values.surname) {
    errors.surname = "Required";
  } else if (values.surname.length > 20) {
    errors.surname = "Must be 20 characters or less";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Password: 8+ chars, Uppercase, Lowercase, Number, Special Char
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!values.password) {
    errors.password = "Required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Password must be 8+ characters with uppercase, lowercase, number, and special character";
  }

  // Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

const RegistrationForm = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Registration Successful:", values);
      // Save to my cloud (context) and redirect to dashboard
      login({ firstName: values.firstName, email: values.email });
      alert("Registration submitted! Welcome 🌸");
      navigate("/dashboard");
    },
  });

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="p-4 border-0 shadow-sm rounded-4"
        style={{ maxWidth: "600px", width: "100%", background: "#fff" }}
      >
        <h1 className="text-center mb-4 fw-bold" style={{ color: "#ff85a2" }}>
          Create an Account 🌸
        </h1>

        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-bold small">First Name</Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                className="rounded-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-bold small">Surname</Form.Label>
              <Form.Control
                id="surname"
                type="text"
                className="rounded-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
                isInvalid={formik.touched.surname && !!formik.errors.surname}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.surname}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold small">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              className="rounded-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-bold small">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                className="rounded-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-bold small">
                Confirm Password
              </Form.Label>
              <Form.Control
                id="confirmPassword"
                type="password"
                className="rounded-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                isInvalid={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Button type="submit" className="w-100 btn-pink mt-3 mb-3">
            Register ✨
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
