import React from "react";
import { useNavigate } from "react-router-dom";
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
  ArrowUpRight
} from "react-bootstrap-icons";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 pt-12 pb-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="uppercase font-bold mb-4 flex items-center gap-3 text-indigo-700">
              <img
                src="/images/ee1.PNG"
                alt="InstaMD Logo"
                // width="50"
                className=" bg-white p-1"
              />
              {/* <img
                src="/images/instamd_logo.PNG"
                alt="InstaMD Text Logo"
                className="w-12 h-12 rounded-full bg-white p-1 border border-indigo-200"
              /> */}
              {/* <span>Let's Connect</span> */}
            </h5>
            <p className="text-gray-600 mb-4">
              Connecting together with top medical professionals through
              innovative telehealth solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200">
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106888510&keywords=instamd%20technology%20private%20limited"
                className="bg-indigo-100 text-indigo-700 p-2 rounded-full hover:bg-indigo-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="uppercase font-bold mb-4 text-indigo-700">Quick Links</h5>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/speakers", label: "speakers" },
                { path: "/events", label: "Events" },
                { path: "/contact", label: "Contact" },
              ].map((item, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div
                    onClick={() => handleNavigate(item.path)}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
                  >
                    <ArrowRight
                      size={12}
                      className="text-indigo-400 group-hover:translate-x-1 transition-transform"
                    />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="uppercase font-bold mb-4 text-indigo-700">Services</h5>
            <ul className="space-y-2">
              {[
                "Online Consultation",
                "Health Checkups",
                "Emergency Care",
                "Medicine Delivery",
                "Lab Tests",
              ].map((service, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div
                    onClick={() => handleNavigate("/services")}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
                  >
                    <ArrowRight
                      size={12}
                      className="text-indigo-400 group-hover:translate-x-1 transition-transform"
                    />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h5 className="uppercase font-bold mb-4 text-indigo-700">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                  <GeoAltFill size={16} />
                </div>
                <span className="text-gray-600">Indore MP, India</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                  <TelephoneFill size={16} />
                </div>
                <span className="text-gray-600">9619014245</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-indigo-100 text-indigo-700 p-2 rounded-full mt-1">
                  <EnvelopeFill size={16} />
                </div>
                <span className="text-gray-600">support@instamd.com</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-gray-200 pt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center gap-2">
                <HeartFill size={14} />
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="md:flex justify-between text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Desinged and Developed By InstaMD. All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <span
              onClick={() => handleNavigate("/privacy")}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              Privacy Policy
            </span>
            <span
              onClick={() => handleNavigate("/terms")}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              Terms of Service
            </span>
            <span
              onClick={() => handleNavigate("/faq")}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              FAQ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
