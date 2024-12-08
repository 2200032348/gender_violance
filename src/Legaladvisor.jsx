import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css';  // Assuming you have a custom CSS file

const Legaladvisor = () => {
  const [password, setPasswordValue] = useState("");
  const [username, setUsernameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const navigate = useNavigate(); // Initialize useNavigate

  // Handlers for user input
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:8082/api/legaladvisors/login", data);

      if (response.data === "Invalid username or password") { // Adapt this check based on the actual response format
        setErrorMessage("Invalid username or password");
      } else {
        alert("Login Successful");
        navigate("/displayhealth"); // Correct path used here
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  // Redirect to Register page
  const redirectToRegister = () => {
    navigate("/register"); // Use navigate instead of window.location.href
  };

  return (
    <div>
      <h1>Legal Advisor Login</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: "100%", 
              padding: "1em", 
              fontSize: "1em", 
              marginBottom: "1em", 
              borderRadius: "5px", 
              border: "1px solid #ccc"
            }}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: "100%", 
              padding: "1em", 
              fontSize: "1em", 
              marginBottom: "1em", 
              borderRadius: "5px", 
              border: "1px solid #ccc"
            }}
          />
          <br />
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message */}
          <br />
          <button type="submit" style={{
            padding: "1em 2em", 
            fontSize: "1.2em", 
            backgroundColor: "#2c3e50", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer"
          }}>Login</button>
        </form>
        <button onClick={redirectToRegister} style={{
          padding: "1em 2em", 
          fontSize: "1.2em", 
          backgroundColor: "#3498db", 
          color: "#fff", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer", 
          marginTop: "20px"
        }}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Legaladvisor;
