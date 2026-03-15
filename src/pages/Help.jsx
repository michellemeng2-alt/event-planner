import React from "react";
import { Container, Accordion, Card, Row, Col } from "react-bootstrap";

const Help = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#ff85a2" }}>
          Help Center 🌸
        </h1>
        <p className="text-muted">
          Everything you need to know about using Event Planner
        </p>
      </div>

      <Row className="justify-content-center">
        <Col lg={8}>
          <Accordion
            defaultActiveKey="0"
            className="shadow-sm rounded-4 overflow-hidden"
          >
            {/* Navigation */}
            <Accordion.Item eventKey="0" className="border-0 border-bottom">
              <Accordion.Header>How to Navigate the App</Accordion.Header>
              <Accordion.Body>
                Navigating **Event Planner** is simple! Use the navigation bar
                at the top:
                <ul>
                  <li>
                    <strong>Home:</strong> Return to the landing page.
                  </li>
                  <li>
                    <strong>Register:</strong> Create your account to start
                    planning.
                  </li>
                  <li>
                    <strong>Dashboard:</strong> Access your personal event list
                    (only visible when logged in).
                  </li>
                  <li>
                    <strong>Help:</strong> You're here! Find guides and tips.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Registration */}
            <Accordion.Item eventKey="1" className="border-0 border-bottom">
              <Accordion.Header>How to Register an Account</Accordion.Header>
              <Accordion.Body>
                To get started, click the <strong>Register</strong> button in
                the navigation bar. Fill in your first name, surname, email, and
                a secure password. Our system ensures your password is strong by
                checking for uppercase letters, numbers, and special characters.
              </Accordion.Body>
            </Accordion.Item>

            {/* Events Logic */}
            <Accordion.Item eventKey="2" className="border-0 border-bottom">
              <Accordion.Header>
                Creating, Editing, and Deleting Events
              </Accordion.Header>
              <Accordion.Body>
                Once you are logged in, head to your <strong>Dashboard</strong>:
                <div className="mt-3">
                  <h6>✨ Create</h6>
                  <p>
                    Use the "Create Event" card on the left. Simply enter the
                    name and date, then click <strong>Add 🌸</strong>.
                  </p>

                  <h6>✏️ Edit</h6>
                  <p>
                    To update an event, use the <strong>Edit</strong> button on
                    the event card (available in the updateEvent feature) to
                    modify the details.
                  </p>

                  <h6>🗑️ Delete</h6>
                  <p>
                    If plans change, click the <strong>Remove</strong> button on
                    any event card to permanently delete it from your list.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Expert Tips */}
            <Accordion.Item eventKey="3" className="border-0">
              <Accordion.Header>
                Tips for Organising Events Effectively
              </Accordion.Header>
              <Accordion.Body>
                <p>Make your events magical with these professional tips:</p>
                <ol>
                  <li>
                    <strong>Plan Ahead:</strong> Create your event in the app at
                    least 2 weeks in advance.
                  </li>
                  <li>
                    <strong>Clear Descriptions:</strong> Use the description
                    field to note down key tasks like "Order Cake" or "Invite
                    Guests."
                  </li>
                  <li>
                    <strong>Check Your Dashboard:</strong> Log in regularly to
                    stay on top of your upcoming dates.
                  </li>
                  <li>
                    <strong>Batch Tasks:</strong> If you have multiple events,
                    try to handle similar tasks (like shopping) all at once.
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* Contact Support Card */}
          <Card className="mt-5 border-0 shadow-sm rounded-4 text-center p-4 bg-white">
            <h5 style={{ color: "#ff85a2" }}>Still need help?</h5>
            <p className="mb-0 text-muted">
              We're here to make your planning stress-free. Contact our support
              team at
              <br />
              <strong>support@eventplanner.com</strong>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Help;
