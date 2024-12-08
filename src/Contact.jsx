import React from "react";
import { Link } from "react-router-dom";
import "./Trailindex.css";
import logo from "./images/logo.png";

const HelpTable = () => {
  const data = [
    {
      category: "For Women in Distress",
      rows: [
        { name: "National Commission for Women Helpline", contact: "7827170170" },
        { name: "Central Social Welfare Board - Police Helpline", contact: "1091/1291, (011) 23317004" },
        { name: "Shakti Shalini", contact: "10920" },
        { name: "Shakti Shalini - Women's Shelter", contact: "(011) 24373736/24373737" },
        { name: "SAARTHAK", contact: "(011) 26853846/26524061" },
        { name: "All India Women's Conference", contact: "10921/(011) 23389680" },
        { name: "JAGORI", contact: "(011) 26692700, +918800996640" },
        { name: "Joint Women's Programme", contact: "(011) 24619821" },
        { name: "Sakshi - Violence Intervention Center", contact: "(0124) 2562336/5018873" },
        { name: "Saheli - A Women's Organization", contact: "(011) 24616485 (Saturdays)" },
      ],
    },
  ];

  return (
    <div className="help-table-container">
      {data.map((section, index) => (
        <section key={index} className="help-section">
          <h2 className="help-section-title">{section.category}</h2>
          <table className="help-table">
            <thead>
              <tr>
                <th>Help Available On</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "table-row-even" : "table-row-odd"}>
                  <td>{row.name}</td>
                  <td>{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
};

const Trailindex = () => {
  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Gender Violence Response Mechanism Logo" className="navbar-logo-image" />
          GENDER VIOLENCE RESPONSE MECHANISM
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/index">Login</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header" id="home">
        <div className="header-logo-container">
          <img src={logo} alt="Header Logo" className="header-logo-image" />
          <h1>GENDER VIOLENCE RESPONSE MECHANISM</h1>
        </div>
        <p>Address domestic violence with targeted solutions</p>
        <button className="get-started">Get Started</button>
      </header>

      {/* Help Table Section */}
      <HelpTable />
    </div>
  );
};

export default Trailindex;
