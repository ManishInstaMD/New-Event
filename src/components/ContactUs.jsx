import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormCheck,
  Button,
} from "react-bootstrap";

function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Container
      fluid
      className=" px-4 py-5 sm:py-16 md:px-6 lg:px-20"
      style={{
        backgroundImage: "url('/images/bg6.avif')",}}
    >
      <div className="text-center mb-5 mx-auto" style={{ maxWidth: "600px"}}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Contact Us '#PitchPoint'
        </h2>
        <p className="text-md sm:text-lg text-white">
          Interested in our events or have questions?
          We’d love to hear from you! Send us a message and our team will be in
          touch soon.
        </p>
      </div>

      <Form
        className="mx-auto bg-white shadow-md rounded-3 p-4 sm:p-5"
        style={{ maxWidth: "720px" }}
      >
        <Row className="g-4">
          {/* First Name */}
          <Col sm={6}>
            <Form.Group controlId="first-name">
              <Form.Label className="fw-semibold">First Name</Form.Label>
              <Form.Control type="text" placeholder="John" />
            </Form.Group>
          </Col>

          {/* Last Name */}
          <Col sm={6}>
            <Form.Group controlId="last-name">
              <Form.Label className="fw-semibold">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
          </Col>

          {/* Company */}
          <Col sm={12}>
            <Form.Group controlId="company">
              <Form.Label className="fw-semibold">Company</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>
          </Col>

          {/* Email */}
          <Col sm={12}>
            <Form.Group controlId="email">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="you@example.com" />
            </Form.Group>
          </Col>

          {/* Phone Number */}
          <Col sm={12}>
            <Form.Group controlId="phone-number">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control type="text" placeholder="1234567890" />
            </Form.Group>
          </Col>

          {/* Message */}
          <Col sm={12}>
            <Form.Group controlId="message">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message..." />
            </Form.Group>
          </Col>

          {/* Agreement */}
          <Col sm={12}>
            <FormCheck
              type="switch"
              id="agreement"
              label={
                <>
                  I agree to the{" "}
                  <a href="#" className="fw-semibold text-indigo-600">
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
          className="mt-4 w-100 py-2 fw-semibold"
          disabled={!agreed}
        >
          Let's Talk
        </Button>
      </Form>
    </Container>
  );
}

export default ContactUs;
