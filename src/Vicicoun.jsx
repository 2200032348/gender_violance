import React, { useState } from "react";
import axios from "axios";

const Vicicoun = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
    address: "",
    demographics: "",
    caseDetails: "",
    emergencyContact: "",
    incidentDate: "",
  });

  const [proofPhoto, setProofPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProofPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (proofPhoto) {
      data.append("proofPhoto", proofPhoto);
    }

    try {
      const response = await axios.post(
        "http://localhost:8082/api/victim-details/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Data submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", fontSize: "14px" }}>
      {/* Top Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          padding: "0.5em 1em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <h2 style={{ fontSize: "1.2em", color: "#f39c12", margin: 0 }}>Victim Portal</h2>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "1em",
            fontSize: "0.9em",
          }}
        >
          <li>
            <a href="/victimindex" style={{ color: "white", textDecoration: "none" }}>
              Legal Rights
            </a>
          </li>
          <li>
            <a href="/vicicoun" style={{ color: "white", textDecoration: "none" }}>
              Connect For Help
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </li>
          <li>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <div style={{ padding: "1em", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50", fontSize: "1.5em" }}>
          Victim Details Form
        </h1>

        {/* Static Text */}
        <section
          style={{
            backgroundColor: "#fff",
            padding: "1em",
            borderRadius: "8px",
            marginBottom: "1em",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontSize: "0.9em",
          }}
        >
          <p>
            If you or someone you know has been a victim of a crime, please use this form to submit
            details. Our team is here to help and will ensure your information remains confidential.
          </p>
        </section>

        {/* Victim Details Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fff",
            padding: "1.5em",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontSize: "0.9em",
          }}
        >
          {[
            { label: "Name and Email", name: "name", placeholder: "Enter your name and email" },
            { label: "Phone Number", name: "phoneNumber", placeholder: "Enter your phone number" },
            { label: "Gender", name: "gender", placeholder: "Enter your gender" },
            { label: "Address", name: "address", placeholder: "Enter your address", type: "textarea" },
            { label: "Demographics", name: "demographics", placeholder: "Enter demographics" },
            { label: "Case Details", name: "caseDetails", placeholder: "Enter case details", type: "textarea" },
            { label: "Emergency Contact", name: "emergencyContact", placeholder: "Enter emergency contact" },
            { label: "Incident Date", name: "incidentDate", placeholder: "dd-mm-yyyy", type: "date" },
          ].map(({ label, name, placeholder, type }) => (
            <div style={{ marginBottom: "1em" }} key={name}>
              <label style={{ display: "block", marginBottom: "0.3em", fontWeight: "bold" }}>
                {label}:
              </label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.7em",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    height: "70px",
                  }}
                ></textarea>
              ) : (
                <input
                  type={type || "text"}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.7em",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            </div>
          ))}
          <div style={{ marginBottom: "1em" }}>
            <label style={{ display: "block", marginBottom: "0.3em", fontWeight: "bold" }}>
              Upload Proof Photo:
            </label>
            <input
              type="file"
              name="proofPhoto"
              onChange={handleFileChange}
              style={{
                padding: "0.7em",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#2c3e50",
              color: "#fff",
              padding: "0.7em",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.9em",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vicicoun;
