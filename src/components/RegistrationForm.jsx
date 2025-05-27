import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    division: "",
    designation: "",
    state: "",
    city: "",
    mobile: "",
    email: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async () => {
    if (submitting) return;
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://event-nine-xi.vercel.app/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Registration successful! 🎉", { autoClose: 5000 });
        setFormData({
          name: "",
          companyName: "",
          division: "",
          designation: "",
          state: "",
          city: "",
          mobile: "",
          email: "",
        });
         navigate("/liveEvents");
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
     <div className="container-fluid min-vh-100 d-flex p-0">
  {/* Left image/illustration section */}
  <div
    className="d-none d-md-flex flex-column justify-content-center align-items-center col-md-6 p-5 text-white"
    style={{
      background: 'linear-gradient(to bottom right, #dce8ff, #a6c9ff)',
      backgroundImage: 'url("/images/bg3.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '1rem', padding: '2rem' }}>
      <h2 className="fw-bold text-dark">Open Your World of Relaxation & Discovery</h2>
      <p className="text-muted mt-3">Join us for an enriching event experience.</p>
    </div>
  </div>

  {/* Right form section */}
  <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
    <div className="w-100" style={{ maxWidth: "500px" }}>
      <h4 className="mb-4  text-center" style={{ fontSize: "1.5rem" , fontWeight: "bold", color: "#8FBBCE"}}>Register for the Event</h4>
      <form>
        {[ 
          { name: "name", label: "Your Name" },
          { name: "companyName", label: "Company Name" },
          { name: "division", label: "Division" },
          { name: "designation", label: "Designation" },
          { name: "city", label: "City" },
          { name: "mobile", label: "Mobile Number" },
          { name: "email", label: "Email Address", type: "email" },
        ].map(({ name, label, type = "text" }) => (
          <div className="mb-3" key={name}>
            {/* <label className="form-label">{label}*</label> */}
            <input
              name={name}
              className="form-control rounded-3 shadow-sm"
              placeholder={label}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="mb-3">
          {/* <label className="form-label">State*</label> */}
          <select
            name="state"
            className="form-select rounded-3 shadow-sm"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {[
              "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
              "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
              "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
              "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
              "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
              "Chandigarh", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
            ].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="d-grid mt-3">
          <button
            type="button"
            className="btn btn-primary fw-bold rounded-3 shadow-sm"
            onClick={handleRegister}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default RegistrationForm;
