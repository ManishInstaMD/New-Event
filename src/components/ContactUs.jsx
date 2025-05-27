import { useState } from "react";
import { Container, Row, Col, Form, FormCheck, Button } from "react-bootstrap";

function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Container
      fluid
      className="px-4 py-5 contact-section"
      style={{
        backgroundImage: "url('/images/bg6.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="text-center mb-5 mx-auto fade-in-up"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="display-5 fw-bold text-white mb-3">
          Contact Us <span className="text-warning">#PitchPoint</span>
        </h2>
        <p className="lead text-light">
          Interested in our events or have questions? We’d love to hear from
          you! Send us a message and our team will be in touch soon.
        </p>
      </div>

      <Form
        className="mx-auto bg-white shadow-lg rounded-4 p-4 p-sm-5 form-animate"
        style={{ maxWidth: "720px" }}
      >
        <Row className="g-4">
          <Col sm={6}>
            <Form.Group controlId="first-name">
              <Form.Label className="fw-semibold">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group controlId="last-name">
              <Form.Label className="fw-semibold">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <Form.Group controlId="company">
              <Form.Label className="fw-semibold">Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <Form.Group controlId="email">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <Form.Group controlId="phone-number">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234567890"
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <Form.Group controlId="message">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message..."
                className="field-focus"
              />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <FormCheck
              type="switch"
              id="agreement"
              label={
                <>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="fw-semibold text-decoration-underline text-primary"
                  >
                    privacy policy
                  </a>
                  .
                </>
              }
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="d-flex align-items-center gap-3"
            />
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="mt-4 w-100 py-2 fw-semibold submit-btn"
          disabled={!agreed}
        >
          Let's Talk
        </Button>
      </Form>
      <style>
        {`
          /* Section Animation */
.contact-section {
  position: relative;
  backdrop-filter: blur(2px);
}

/* Fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

/* Form animation */
.form-animate {
  opacity: 0;
  transform: scale(0.95);
  animation: fadeInForm 0.8s ease-out 0.3s forwards;
}

@keyframes fadeInForm {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Input focus effect */
.field-focus:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  transition: all 0.3s ease-in-out;
}

/* Submit button animation */
.submit-btn {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

          `}
      </style>
    </Container>
  );
}

export default ContactUs;
