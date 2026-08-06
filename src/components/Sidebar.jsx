import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuStyle = (path) => ({
    display: "block",
    padding: "12px 18px",
    margin: "8px 10px",
    borderRadius: "6px",
    textDecoration: "none",
    color: location.pathname === path ? "#1976d2" : "#333",
    backgroundColor: location.pathname === path ? "#e3f2fd" : "transparent",
    fontWeight: location.pathname === path ? "bold" : "normal",
    transition: "0.3s"
  });

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #ddd",
        position: "fixed",
        left: 0,
        top: 0,
        overflowY: "auto",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#1976d2",
          color: "white"
        }}
      >
        <h2 style={{ margin: 0 }}>🏥 HMS</h2>
        <small>Admin Panel</small>
      </div>

      <nav style={{ marginTop: "15px" }}>
        <Link to="/dashboard" style={menuStyle("/dashboard")}>
          📊 Dashboard
        </Link>

        <Link to="/patients" style={menuStyle("/patients")}>
          👨‍⚕️ Patients
        </Link>

        <Link to="/doctors" style={menuStyle("/doctors")}>
          🩺 Doctors
        </Link>

        <Link to="/appointments" style={menuStyle("/appointments")}>
          📅 Appointments
        </Link>

        <Link to="/billing" style={menuStyle("/billing")}>
          💳 Billing
        </Link>

        <Link to="/pharmacy" style={menuStyle("/pharmacy")}>
          💊 Pharmacy
        </Link>

        <Link to="/laboratory" style={menuStyle("/laboratory")}>
          🧪 Laboratory
        </Link>

        <Link to="/" style={menuStyle("/")}>
          🚪 Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
