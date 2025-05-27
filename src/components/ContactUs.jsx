import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormCheck } from "react-bootstrap";

function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Container className="isolate bg-white px-8  sm:py-32 lg:px-8 position-relative py-2">
      <div
        aria-hidden="true"
        className="position-absolute inset-x-0  -z-10 overflow-hidden blur-3xl sm:-top-80"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          background: "linear-gradient(to top right, #ff80b5, #9089fc)",
          opacity: 0.3,
          left: "50%",
          width: "144.5rem",
          maxWidth: "none",
          transform: "translateX(-50%) rotate(30deg)",
          aspectRatio: "1155/678",
        }}
      />

      <div className="mx-auto text-center mb-5" style={{ maxWidth: "42rem" }}>
        <h2 className="text-4xl font-semibold mb-3 text-gray-900">
          Contact sales
        </h2>
        <p className="text-lg text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <Form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <Row className="g-3 mb-4">
          {/* First Name */}
          <Col sm={6}>
            <Form.Group controlId="first-name">
              <Form.Label className="fw-semibold">First name</Form.Label>
              <Form.Control
                type="text"
                autoComplete="given-name"
                className="rounded-md bg-white px-3.5 py-2"
              />
            </Form.Group>
          </Col>

          {/* Last Name */}
          <Col sm={6}>
            <Form.Group controlId="last-name">
              <Form.Label className="fw-semibold">Last name</Form.Label>
              <Form.Control
                type="text"
                autoComplete="family-name"
                className="rounded-md bg-white px-3.5 py-2"
              />
            </Form.Group>
          </Col>

          {/* Company */}
          <Col sm={12}>
            <Form.Group controlId="company">
              <Form.Label className="fw-semibold">Company</Form.Label>
              <Form.Control
                type="text"
                autoComplete="organization"
                className="rounded-md bg-white px-3.5 py-2"
              />
            </Form.Group>
          </Col>

          {/* Email */}
          <Col sm={12}>
            <Form.Group controlId="email">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                type="email"
                autoComplete="email"
                className="rounded-md bg-white px-3.5 py-2"
              />
            </Form.Group>
          </Col>

          {/* Phone Number */}
          <Col sm={12}>
            <Form.Group controlId="phone-number">
              <Form.Label className="fw-semibold">Phone number</Form.Label>
              <div className="d-flex rounded-md bg-white border border-gray-300 focus-within:border-indigo-600 focus-within:border-2">
                <Form.Control
                  type="text"
                  placeholder="123-456-7890"
                  className="rounded-end-md py-2 px-3.5 border-0"
                />
              </div>
            </Form.Group>
          </Col>

          {/* Message */}
          <Col sm={12}>
            <Form.Group controlId="message">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                className="rounded-md bg-white px-3.5 py-2"
              />
            </Form.Group>
          </Col>

          {/* Agreement Switch */}
          <Col sm={12}>
            <FormCheck
              type="switch"
              id="agreement"
              label={
                <>
                  By selecting this, you agree to our{" "}
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

        <Button variant="primary" type="submit" className="w-100 py-2.5 mt-10">
          Let's talk
        </Button>
      </Form>
    </Container>
  );
}

export default ContactUs;
