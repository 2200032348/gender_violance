import React, { useEffect, useState } from "react";
import axios from "axios";

const Adminindex = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8082/allUsers");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch user details. Please try again later.");
        console.error("Error fetching user details:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", minHeight: "100vh" }}>
      {/* Navbar positioned on the right */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          height: "100px",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 2em",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "1.5em", color: "#f39c12", margin: "0 auto" }}>Admin Portal</h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "1.5em",
          }}
        >
          <li>
            <a href="/adminindex" style={{ color: "white", textDecoration: "none", fontSize: "1em" }}>
              User Details
            </a>
          </li>
          <li>
            <a href="/addcoun" style={{ color: "white", textDecoration: "none", fontSize: "1em" }}>
              Add Counsellor
            </a>
          </li>
          <li>
            <a href="/addlegalad" style={{ color: "white", textDecoration: "none", fontSize: "1em" }}>
              Add Legal Advisor
            </a>
          </li>
          <li>
            <a href="/addlegelri" style={{ color: "white", textDecoration: "none", fontSize: "1em" }}>
              Add Legal Rights
            </a>
          </li>
          <li>
            <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "1em" }}>
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main
        style={{
          marginTop: "100px", // Content starts below navbar
          padding: "2em",
          backgroundColor: "#f4f4f4",
          minHeight: "calc(100vh - 100px)",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 style={{ color: "#2c3e50", textAlign: "center" }}>User Details</h2>
        <section
          style={{
            marginTop: "1.5em",
            backgroundColor: "#fff",
            padding: "1em",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {error ? (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "1em",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
                  <th style={{ padding: "0.8em", borderBottom: "1px solid #ddd" }}>Email</th>
                  <th style={{ padding: "0.8em", borderBottom: "1px solid #ddd" }}>Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} style={{ backgroundColor: "#f9f9f9" }}>
                    <td style={{ padding: "0.8em", borderBottom: "1px solid #ddd" }}>{user.email}</td>
                    <td style={{ padding: "0.8em", borderBottom: "1px solid #ddd" }}>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
};

export default Adminindex;
