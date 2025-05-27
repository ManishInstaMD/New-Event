import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  EnvelopeFill,
  TelephoneFill,
  GeoAltFill,
  HeartFill,
  ArrowRight,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 pt-8 pb-6 border-t border-gray-300">
      <Container>
        <Row className="g-4 mb-4">
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h5 className="text-uppercase fw-bold mb-4 d-flex align-items-center gap-3 text-indigo-700">
                <img
                  src="/images/elogo.jfif"
                  alt="InstaMD Logo"
                  width="50"
                  className="rounded-circle bg-white p-1 border border-indigo-200"
                />
                <img
                  src="/images/instamd_logo.PNG"
                  alt="insamd logo"
                  className="w-12 h-12 rounded-circle bg-white p-1 border border-indigo-200"
                />
                <span>Let's Connect</span>
              </h5>
              <p className="text-gray-600 mb-4">
                Connecting together with top medical professionals through
                innovative telehealth solutions.
              </p>
              <div className="mt-4 social-icons flex gap-3">
                <a
                  href="#"
                  className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106888510&keywords=instamd%20technology%20private%20limited&origin=RICH_QUERY_SUGGESTION&position=2&searchId=1a96f746-3070-4ead-a3b4-00cab9b45bb2&sid=wky&spellCorrectionEnabled=false"
                  className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <h5 className="text-uppercase fw-bold mb-4 text-indigo-700">
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/speakers", label: "Doctors" },
                  { path: "/agenda", label: "Services" },
                  { path: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <li key={index} className="mb-2 group">
                    <Link
                      to={item.path}
                      className="text-gray-600 text-decoration-none hover:text-indigo-600 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight
                        size={12}
                        className="text-indigo-400 group-hover:translate-x-1 transition-transform"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={2} md={6} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <h5 className="text-uppercase fw-bold mb-4 text-indigo-700">
                Services
              </h5>
              <ul className="list-unstyled">
                {[
                  "Online Consultation",
                  "Health Checkups",
                  "Emergency Care",
                  "Medicine Delivery",
                  "Lab Tests",
                ].map((service, index) => (
                  <li key={index} className="mb-2 group">
                    <Link
                      to="#"
                      className="text-gray-600 text-decoration-none hover:text-indigo-600 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight
                        size={12}
                        className="text-indigo-400 group-hover:translate-x-1 transition-transform"
                      />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
              <h5 className="text-uppercase fw-bold mb-4 text-indigo-700">
                Contact Us
              </h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                    <GeoAltFill size={16} />
                  </div>
                  <span className="text-gray-600">Indore MP India</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                    <TelephoneFill size={16} />
                  </div>
                  <span className="text-gray-600">9619014245</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                    <EnvelopeFill size={16} />
                  </div>
                  <span className="text-gray-600">support@instamd.com</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-gray-200">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                  <HeartFill size={14} />
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="text-gray-600 mb-0 text-sm">
              &copy; {new Date().getFullYear()} InstaMD Technology. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="flex gap-4 justify-center justify-md-end">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-indigo-600 text-decoration-none text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-indigo-600 text-decoration-none text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/faq"
                className="text-gray-600 hover:text-indigo-600 text-decoration-none text-sm transition-colors"
              >
                FAQ
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
