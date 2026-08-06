import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#1976d2",
        color: "#fff",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>🏥 Healthcare Management System</h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/patients"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Patients
        </Link>

        <Link
          to="/doctors"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Doctors
        </Link>

        <Link
          to="/appointments"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Appointments
        </Link>

        <Link
          to="/billing"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Billing
        </Link>

        <button
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => alert("Logout Successful")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
