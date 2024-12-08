import React from "react";
import "./TileInterface.css";

const TileInterface = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className="tile-interface">
      {/* Header */}
      <header className="header">
        WHO ARE YOU
      </header>

      {/* Tiles Section */}
      <section className="tiles-section">
        {/* Admin Tile */}
        <div className="tile" onClick={() => handleNavigation("./admin")}>
          <h2>Admin</h2>
          <p>Manage users and oversee the system</p>
        </div>

        {/* Counselor Tile */}
        <div className="tile" onClick={() => handleNavigation("/counlogin")}>
          <h2>Councillor</h2>
          <p>Guide users in rebuilding their lives</p>
        </div>

        {/* User Tile */}
        <div className="tile" onClick={() => handleNavigation("/login")}>
          <h2>User</h2>
          <p>Find hope and restart your life with support</p>
        </div>

        {/* Legal Advisor Tile */}
        <div className="tile" onClick={() => handleNavigation("/legaladvisor")}>
          <h2>Legal Advisor</h2>
          <p>Provide legal guidance to users</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 GENDER VIOLENCE RESPONSE MECHANISM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TileInterface;
