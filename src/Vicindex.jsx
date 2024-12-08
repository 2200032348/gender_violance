import React, { useEffect, useState } from "react";

const Vicindex = () => {
  const [legalRights, setLegalRights] = useState([]);

  // Fetch legal rights from the database
  useEffect(() => {
    fetch("http://localhost:8082/api/legal-rights")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch legal rights");
        }
        return response.json();
      })
      .then((data) => setLegalRights(data))
      .catch((error) => console.error("Error fetching legal rights:", error));
  }, []);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      {/* Top Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#2c3e50",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.3em 0.8em", // Reduced padding
          height: "2.5em", // Decreased height
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", // Subtle shadow
          zIndex: 1000,
        }}
      >
        <h2 style={{ fontSize: "1em", color: "#f39c12", margin: 0 }}>Victim Portal</h2>
        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "1em" }}>
          <li>
            <a href="/victimindex" style={{ color: "white", textDecoration: "none", fontSize: "0.8em" }}>
              Legal Rights
            </a>
          </li>
          <li>
            <a href="/vicicoun" style={{ color: "white", textDecoration: "none", fontSize: "0.8em" }}>
              Connect For Help
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: "white", textDecoration: "none", fontSize: "0.8em" }}>
              About
            </a>
          </li>
          <li>
            <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "0.8em" }}>
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main
        style={{
          marginTop: "3em", // Adjusted for smaller navbar
          padding: "1em", // Reduced padding
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "1em" }}>
          <h1 style={{ fontSize: "1.8em", color: "#2c3e50" }}>Welcome to the Victim Portal</h1>
          <p style={{ fontSize: "1em", color: "#555" }}>
            Your guide to understanding your legal rights and accessing the support you deserve.
          </p>
        </header>

        {/* Static Informational Section */}
        <section
          style={{
            backgroundColor: "#f39c12",
            color: "#fff",
            padding: "1.5em", // Reduced padding
            borderRadius: "6px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            marginBottom: "1.5em",
          }}
        >
          <h2 style={{ fontSize: "1.5em", marginBottom: "0.8em" }}>Why This Portal?</h2>
          <p style={{ fontSize: "0.9em", lineHeight: "1.4" }}>
            This portal is designed to empower victims by providing accurate information about their rights,
            connecting them to resources, and ensuring they feel supported every step of the way.
          </p>
        </section>

        {/* Legal Rights Section */}
        <section
          id="legal-rights"
          style={{
            backgroundColor: "#2c3e50",
            color: "#fff",
            padding: "1.5em",
            borderRadius: "6px",
            marginBottom: "1.5em",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "1.6em",
              color: "#f39c12",
              marginBottom: "0.8em",
              borderBottom: "2px solid #f39c12",
              display: "inline-block",
              paddingBottom: "0.4em",
            }}
          >
            Legal Rights
          </h2>
          {legalRights.length > 0 ? (
            <ol style={{ paddingLeft: "1.2em", marginTop: "0.8em", textAlign: "left" }}>
              {legalRights.map((right) => (
                <li
                  key={right.id}
                  style={{
                    marginBottom: "0.8em",
                    fontSize: "1em",
                    lineHeight: "1.4",
                  }}
                >
                  <strong style={{ color: "#f39c12" }}>{right.title}:</strong> {right.description}
                </li>
              ))}
            </ol>
          ) : (
            <p style={{ fontSize: "1em", color: "#bbb", marginTop: "0.8em" }}>
              Loading legal rights...
            </p>
          )}
        </section>

        {/* Contact Information Section */}
        <section
          style={{
            backgroundColor: "#fff",
            color: "#2c3e50",
            padding: "1.5em",
            borderRadius: "6px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5em", marginBottom: "0.8em" }}>Need Help?</h2>
          <p style={{ fontSize: "0.9em", lineHeight: "1.4" }}>
            If you’re feeling overwhelmed or need immediate assistance, please don’t hesitate to contact
            our support team.
          </p>
          <button
            style={{
              backgroundColor: "#f39c12",
              border: "none",
              color: "#fff",
              padding: "0.6em 1.5em",
              fontSize: "1em",
              cursor: "pointer",
              borderRadius: "4px",
              marginTop: "0.8em",
            }}
          >
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
};

export default Vicindex;
