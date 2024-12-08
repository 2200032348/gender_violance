import React, { useState } from "react";

const Session = () => {
  const [formData, setFormData] = useState({
    name: "",
    sessionNo: "",
    details: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8082/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Session added:", data);
        setMessage("Session added successfully!");
        setFormData({ name: "", sessionNo: "", details: "" }); // Clear the form
      } else {
        setMessage("Error adding session");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error connecting to the server");
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em 2em",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        {/* Left Side - Label */}
        <h2 style={{ margin: 0, color: "#f39c12" }}>COUNSELLOR PORTAL</h2>

        {/* Right Side - Navigation Links */}
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
              href="/session"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Session Details
            </a>
          </li>
          <li>
            <a
              href="/datacase"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Victim Cases
            </a>
          </li>
          <li>
            <a
              href="/assigncase"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Assign Case
            </a>
          </li>
          <li>
            <a
              href="/mail"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Send Mail
            </a>
          </li>
          <li>
            <a
              href="/"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
        style={{
          paddingTop: "100px", // To account for the fixed navbar
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "2em",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Session Details Of Victim</h1>
        <h2 style={{ textAlign: "center" }}>Add Session</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>Session No:</label>
            <input
              type="text"
              name="sessionNo"
              value={formData.sessionNo}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5em" }}>Details:</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "5px",
                height: "100px",
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
            Add Session
          </button>
        </form>
        {message && <p style={{ marginTop: "1em", textAlign: "center" }}>{message}</p>}
      </div>
    </div>
  );
};

export default Session;
