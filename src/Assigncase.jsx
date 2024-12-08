import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignCase = () => {
  const [legalAdvisors, setLegalAdvisors] = useState([]);
  const [caseDetails, setCaseDetails] = useState({
    caseName: "",
    description: "",
    victimName: "", // Added victimName
  });
  const [selectedAdvisor, setSelectedAdvisor] = useState("");

  useEffect(() => {
    const fetchLegalAdvisors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/api/cases/legaladvisors"
        );
        setLegalAdvisors(response.data);
      } catch (error) {
        console.error("Error fetching legal advisors:", error);
      }
    };

    fetchLegalAdvisors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails({ ...caseDetails, [name]: value });
  };

  const handleAssign = async () => {
    if (!selectedAdvisor) {
      alert("Please select a legal advisor.");
      return;
    }

    const caseDetailsWithVictim = {
      ...caseDetails,
      victimName: caseDetails.victimName, // Ensure victimName is included
    };

    try {
      const response = await axios.post(
        `http://localhost:8082/api/cases/assign/${selectedAdvisor}`,
        caseDetailsWithVictim // Send the updated case details
      );
      alert("Case assigned successfully!");
    } catch (error) {
      console.error("Error assigning case:", error);
      alert("Failed to assign case.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
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
          width: "100%",  // Ensures navbar covers full width of the page
          zIndex: "1000",
        }}
      >
        {/* COUNSELLOR PORTAL Label */}
        <h2 style={{ margin: "0", color: "#f39c12", fontSize: "1.5em" }}>
          COUNSELLOR PORTAL
        </h2>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5em",
            margin: "0",
            padding: "0",
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

      {/* Banner */}
      <div
        style={{
          backgroundColor: "#f39c12",
          color: "#fff",
          textAlign: "center",
          padding: "2em 1em",
          marginTop: "60px",
        }}
      >
        <h1 style={{ margin: "0" }}>Assign a Legal Advisor to a Case</h1>
        <p>Efficiently manage cases and ensure victims receive timely assistance.</p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "2em", maxWidth: "800px", margin: "auto" }}>
        <h2 style={{ color: "#2c3e50" }}>Assign Case</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <div>
            <label>Case Name:</label>
            <input
              type="text"
              name="caseName"
              value={caseDetails.caseName}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={caseDetails.description}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                minHeight: "80px",
              }}
            />
          </div>
          <div>
            <label>Victim Name and Email:</label>
            <input
              type="text"
              name="victimName"
              value={caseDetails.victimName}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
            />
          </div>
          <div>
            <label>Select Legal Advisor:</label>
            <select
              onChange={(e) => setSelectedAdvisor(e.target.value)}
              value={selectedAdvisor}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              <option value="">-- Select --</option>
              {legalAdvisors.length > 0 ? (
                legalAdvisors.map((advisor) => (
                  <option key={advisor.id} value={advisor.id}>
                    {advisor.username} - {advisor.experience} years
                  </option>
                ))
              ) : (
                <option disabled>No legal advisors available</option>
              )}
            </select>
          </div>
          <button
            type="button"
            onClick={handleAssign}
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Assign Case
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignCase;
