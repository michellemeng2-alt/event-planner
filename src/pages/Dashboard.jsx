import React, { useContext, useState } from "react"; // Added useState
import { AppContext } from "../AppContext";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap"; // Added Modal
import { useFormik } from "formik";

const Dashboard = () => {
  //  Pull updateEvent from Context
  const { user, events, addEvent, deleteEvent, updateEvent } = useContext(AppContext);

  // State for Modal and the event currently being edited
  const [showEdit, setShowEdit] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  // Formik for "Add Event"
  const formik = useFormik({
    initialValues: { name: "", date: "", time: "", description: "", location: "" },
    onSubmit: (values, { resetForm }) => {
      addEvent(values);
      resetForm();
    },
  });

  // Formik for "Update Event" (inside Modal)
  const editFormik = useFormik({
    enableReinitialize: true, 
    initialValues: currentEvent || { name: "", date: "", time: "", description: "", location: "" },
    onSubmit: (values) => {
      updateEvent(values);
      setShowEdit(false);
    },
  });

  const handleEditClick = (event) => {
    setCurrentEvent(event);
    setShowEdit(true);
  };

  return (
    <Container>
      <h2 className="mb-4" style={{ color: "#ff85a2" }}>Welcome, Sweetie! ✨</h2>

      <Row>
        {/* LEFT SIDE: Add Event Form */}
        <Col lg={4} className="mb-4">
          <Card className="p-4 border-0 shadow-sm sticky-top" style={{ top: "100px", borderRadius: "20px" }}>
            <h4 style={{ color: "#ff85a2" }}>Add New Event</h4>
            <Form onSubmit={formik.handleSubmit}>
                {/* ... your existing add form controls ... */}
                <Form.Group className="mb-2">
                    <Form.Label className="small">Event Name</Form.Label>
                    <Form.Control size="sm" name="name" onChange={formik.handleChange} value={formik.values.name} required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="small">Date & Time</Form.Label>
                    <div className="d-flex gap-1">
                        <Form.Control size="sm" type="date" name="date" onChange={formik.handleChange} value={formik.values.date} required />
                        <Form.Control size="sm" type="time" name="time" onChange={formik.handleChange} value={formik.values.time} />
                    </div>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label className="small">Location</Form.Label>
                    <Form.Control size="sm" name="location" onChange={formik.handleChange} value={formik.values.location} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="small">Description</Form.Label>
                    <Form.Control size="sm" as="textarea" rows={2} name="description" onChange={formik.handleChange} value={formik.values.description} />
                </Form.Group>
              <Button type="submit" className="w-100 btn-pink">Add Event 🌸</Button>
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
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <h6 style={{ color: "#ff85a2" }}>{event.name}</h6>
                      <span className="badge bg-light text-dark small">{event.date}</span>
                    </div>
                    <p className="small text-muted mb-2">{event.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="small">📍 {event.location}</span>
                      <div>
                        {/* 4. Added Edit Button */}
                        <Button variant="link" className="text-primary p-0 small me-2" onClick={() => handleEditClick(event)}>
                          Edit
                        </Button>
                        <Button variant="link" className="text-danger p-0 small" onClick={() => deleteEvent(event.id)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* EDIT MODAL */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#ff85a2" }}>Edit Event 🌸</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editFormik.handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Event Name</Form.Label>
              <Form.Control name="name" onChange={editFormik.handleChange} value={editFormik.values.name} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" onChange={editFormik.handleChange} value={editFormik.values.date} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" onChange={editFormik.handleChange} value={editFormik.values.description} />
            </Form.Group>
            <Button type="submit" className="w-100 btn-pink">Update Event ✨</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Dashboard;
