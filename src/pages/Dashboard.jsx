import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";

const Dashboard = () => {
  const { user, events, addEvent, deleteEvent } = useContext(AppContext);

  // Formik for the "Add Event" section at the top
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      description: "",
      location: "",
    },
    onSubmit: (values, { resetForm }) => {
      addEvent(values);
      resetForm(); // Clears form after adding
    },
  });

  return (
    <Container>
      <h2 className="mb-4" style={{ color: "#ff85a2" }}>
        Welcome, Sweetie! ✨
      </h2>

      <Row>
        {/* LEFT SIDE: Add Event Form */}
        <Col lg={4} className="mb-4">
          <Card
            className="p-4 border-0 shadow-sm sticky-top"
            style={{ top: "100px", borderRadius: "20px" }}
          >
            <h4 style={{ color: "#ff85a2" }}>Add New Event</h4>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label className="small">Event Name</Form.Label>
                <Form.Control
                  size="sm"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="small">Date & Time</Form.Label>
                <div className="d-flex gap-1">
                  <Form.Control
                    size="sm"
                    type="date"
                    name="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    required
                  />
                  <Form.Control
                    size="sm"
                    type="time"
                    name="time"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="small">Location</Form.Label>
                <Form.Control
                  size="sm"
                  name="location"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small">Description</Form.Label>
                <Form.Control
                  size="sm"
                  as="textarea"
                  rows={2}
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </Form.Group>
              <Button type="submit" className="w-100 btn-pink">
                Add Event 🌸
              </Button>
            </Form>
          </Card>
        </Col>

        {/* RIGHT SIDE: List of Events */}
        <Col lg={8}>
          <h4 className="mb-3 text-muted">Your Schedule</h4>
          <Row>
            {events.map((event) => (
              <Col md={6} key={event.id} className="mb-3">
                <Card className="border-0 shadow-sm h-100 rounded-4">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <h6 style={{ color: "#ff85a2" }}>{event.name}</h6>
                      <span className="badge bg-light text-dark small">
                        {event.date}
                      </span>
                    </div>
                    <p className="small text-muted mb-2">{event.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="small">📍 {event.location}</span>
                      <Button
                        variant="link"
                        className="text-danger p-0 small"
                        onClick={() => deleteEvent(event.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {events.length === 0 && (
              <p className="text-center mt-5">
                No events yet. Add one on the left! ✨
              </p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
