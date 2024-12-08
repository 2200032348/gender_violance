import React, { useState } from "react";
import axios from "axios";

const Legalmail = () => {
  const [emailDetails, setEmailDetails] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      to: emailDetails.to,
      subject: emailDetails.subject,
      body: emailDetails.body,
    };

    try {
      const response = await axios.post("http://localhost:5151/api/email/send", emailData);
      setResponseMessage(response.data || "Email sent successfully.");
    } catch (error) {
      setResponseMessage("Failed to send email: " + error.message);
    }
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: 0, margin: 0 }}>
      {/* Top Navbar */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between", // Adjust to spread out the elements
          alignItems: "center",
          padding: "1em 2em",
          position: "fixed",
          top: 0,
          left: 0,
          width: "97%",
          zIndex: 1000,
        }}
      >
        {/* Left label for Counselor Portal */}
        <div>
          <span
            style={{
              color: "#f39c12",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            Legal Advisor Portal
          </span>
        </div>

        {/* Navigation links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5em",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/displayhealth"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Health Condition
            </a>
          </li>
          <li>
            <a
              href="/Legaladassigned"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Assigned Cases
            </a>
          </li>
          <li>
            <a
              href="/legalmail"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Send Mail
            </a>
          </li>
          <li>
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1em",
              }}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main
        style={{
          marginTop: "100px", // To account for the fixed navbar
          padding: "2em",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h2>Send Email</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5em", // Increased gap for better spacing
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>To:</label>
            <input
              type="email"
              name="to"
              value={emailDetails.to}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "1em", // Increased padding
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1.1em", // Larger text
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>Subject:</label>
            <input
              type="text"
              name="subject"
              value={emailDetails.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "1em", // Increased padding
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1.1em", // Larger text
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>Body:</label>
            <textarea
              name="body"
              value={emailDetails.body}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "1em", // Increased padding
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1.1em", // Larger text
                height: "150px", // Increased height for textarea
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#2c3e50",
              color: "#fff",
              padding: "0.7em 1em",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1em",
            }}
          >
            Send Email
          </button>
        </form>
        {responseMessage && (
          <p style={{ marginTop: "1em", textAlign: "center" }}>{responseMessage}</p>
        )}
      </main>
    </div>
  );
};

export default Legalmail;
