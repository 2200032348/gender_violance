import React from "react";
import { useNavigate } from "react-router-dom"; // Import the hook if using React Router

const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function if using React Router

  // Handle sign-out action
  const handleSignOut = () => {
    // Add your sign-out logic here (e.g., clearing tokens, redirecting, etc.)
    console.log("User signed out");

    // Navigate to the login page or home page after sign-out
    navigate("/"); // Replace with the actual route you want to redirect to
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2em",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2em",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}></a>
        {/* Sign Out button with onClick */}
        <button
          onClick={handleSignOut} // Handle the sign-out logic
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "3px",
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          SIGN OUT
        </button>
        <div>
          <span style={{ fontSize: "1.2em", fontWeight: "bold", marginRight: "0.5em" }}>
            ABOUT
          </span>
          <span
            style={{
              fontSize: "1.5em",
              color: "#555",
            }}
          >
            👤
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "2em", marginBottom: "1em", color: "#333" }}>VICTIM PORTAL</h1>
      <h2 style={{ fontSize: "1.5em", marginBottom: "1.5em", color: "#555" }}>ABOUT</h2>

      {/* Team Members Section */}
      <section style={{ marginBottom: "2em" }}>
        <h3 style={{ fontSize: "1.2em", marginBottom: "0.5em", color: "#333" }}>Team Members :</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2em", color: "red" }}>
          <li>
            Sarath Teja <span style={{ color: "black" }}>- The team lead</span>
          </li>
          <li>Karthikeya Maddula</li>
          <li>Yajjuvarapu Bindu Sagar</li>
        </ul>
      </section>

      {/* Project Section */}
      <section>
        <h3 style={{ fontSize: "1.2em", marginBottom: "0.5em", color: "#333" }}>Our Project :</h3>
        <p style={{ textAlign: "left", lineHeight: "1.8", color: "#555" }}>
          1. <strong>Admin:</strong> Manage content, user roles, and ensure data security. <br />
          2. <strong>Victim/Survivor:</strong> Access resources, seek help, and connect with support services. <br />
          3. <strong>Counsellor:</strong> Provide support, guidance, and monitor progress. <br />
          4. <strong>Legal Advisor:</strong> Offer legal advice, update legal resources, and assist with legal actions.
        </p>
      </section>
    </div>
  );
};

export default About;
