import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/PublicNavbar";
import EventWebinarPage from "./components/EventWebinarPage";
import EventDetails from "./components/EventDetails";
import RegistrationForm from "./components/RegistrationForm";
import  Speaker from './components/Speaker'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/speakers" element={<Speaker />} /> {/* Placeholder for speakers page */}
        <Route path="/events" element={<EventDetails />} />
        <Route path="/liveEvents" element={<EventWebinarPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
