import React from 'react';
import './Trailindex.css';
import empowerImage from './images/empower.jpg';
import ProtectImage from './images/Protect.jpg';
import SupportImage from './images/Support.jpg';
import logo from './images/logo.png'; // Import the logo image

function Trailindex() {
  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-image" />
          GENDER VIOLENCE RESPONSE MECHANISM
        </div>
        <ul className="navbar-links">
          <li><a href="./">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./index">Login</a></li>
          <li><a href="./register">Sign Up</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header" id="home">
        <div className="header-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo-imagess" />
          <h1>GENDER VIOLENCE RESPONSE MECHANISM</h1>
        </div>
        <p>Address domestic violence with targeted solutions</p>
        <button className="get-started">Get Started</button>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Stop Domestic Violence</h2>
        <div className="cards">
          <div className="card">
            <img src={empowerImage} alt="Empower" className="card-image" />
            <p>Empower</p>
          </div>
          <div className="card">
            <img src={ProtectImage} alt="Protect" className="card-image" />
            <p>Protect</p>
          </div>
          <div className="card">
            <img src={SupportImage} alt="Support" className="card-image" />
            <p>Support</p>
          </div>
        </div>

        <section className="info-section" id="about">
          <h3>Understanding Gender-Based Domestic Violence</h3>
          <p>
            Domestic violence is a severe issue that affects individuals regardless of their gender.
            However, women and children are disproportionately affected. Gender-responsive solutions
            are essential to addressing the root causes of violence and empowering victims through
            support and legal mechanisms.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <p>Latest Version: 0.7.23 | Great ★★★★★ Trustpilot</p>
      </footer>
    </div>
  );
}

export default Trailindex;
