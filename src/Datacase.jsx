import React, { useEffect, useState } from "react";
import axios from "axios";

const VictimDetailsList = () => {
  const [victimDetails, setVictimDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVictimDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/victim-details/all");
        setVictimDetails(response.data);
      } catch (err) {
        setError("Failed to fetch victim details");
      } finally {
        setLoading(false);
      }
    };

    fetchVictimDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
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
        {/* Title */}
        <h2 style={{ margin: 0, color: "#f39c12" }}>COUNSELLOR PORTAL</h2>

        {/* Navigation Links */}
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
              href="/mail"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Send Mail
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
              href="/"
              style={{ color: "white", textDecoration: "none", fontSize: "1em" }}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={{ padding: "80px 20px", color: "black", width: "100%" }}>
        <h2>Victim Details</h2>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name and Email Id</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Demographics</th>
              <th>Case Details</th>
              <th>Emergency Contact</th>
              <th>Incident Date</th>
              <th>Proof Photo</th>
            </tr>
          </thead>
          <tbody>
            {victimDetails.map((victim) => (
              <tr key={victim.id}>
                <td style={{ color: "red" }}>{victim.id}</td>
                <td style={{ color: "red" }}>{victim.name}</td>
                <td style={{ color: "red" }}>{victim.phoneNumber}</td>
                <td style={{ color: "red" }}>{victim.gender}</td>
                <td style={{ color: "red" }}>{victim.address}</td>
                <td style={{ color: "red" }}>{victim.demographics || "N/A"}</td>
                <td style={{ color: "red" }}>{victim.caseDetails || "N/A"}</td>
                <td style={{ color: "red" }}>{victim.emergencyContact}</td>
                <td style={{ color: "red" }}>{victim.incidentDate}</td>
                <td>
                  <a
                    href={`http://localhost:8082/${victim.proofPhotoPath}`} // Ensure the path is correct
                    target="_blank"
                    rel="noopener noreferrer"
                    download={victim.proofPhotoPath.split('/').pop()} // Download the file with its original name
                  >
                    Download Photo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VictimDetailsList;
