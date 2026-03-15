import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

const Home = () => {
  const { user, login } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  // --- LOGGED IN VIEW (DASHBOARD) ---
  if (user) {
    return (
      <Container>
        <div
          className="text-center p-5 mb-5 rounded-5"
          style={{
            background: "linear-gradient(135deg, #fff0f3 0%, #ffccd5 100%)",
            border: "2px dashed #ff85a2",
          }}
        >
          <h1 className="display-5 fw-bold" style={{ color: "#ff85a2" }}>
            Hi, {"Sweetie"}! ✨
          </h1>
          <p className="lead text-secondary">
            Welcome to your magical event space. What are we planning today? 🌸
            <hr />
            Please check the dashboard for your upcoming events. You can also
            create new events or delete existing ones. Let's make your day
            special! 🎉
          </p>
        </div>
      </Container>
    );
  }

  // --- LOGGED OUT VIEW (LOGIN) ---
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        className="p-4 border-0 shadow-sm"
        style={{ width: "400px", borderRadius: "20px" }}
      >
        <h3 className="text-center mb-4" style={{ color: "#ff85a2" }}>
          Login
        </h3>
        {/* --- LOGIN FORM I already did detail check when they register, so no need to validate here --- */}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <input
              name="email"
              className="form-control"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <input
              name="password"
              className="form-control"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Group>
          <Button type="submit" className="w-100 btn-pink">
            Enter Event Planner ✨
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Home;
