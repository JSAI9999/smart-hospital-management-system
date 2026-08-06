import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                backgroundColor: "#1976d2",
                color: "#ffffff",
                textAlign: "center",
                padding: "15px",
                marginTop: "30px",
                borderTop: "1px solid #ddd"
            }}
        >
            <p style={{ margin: 0 }}>
                © {currentYear} Healthcare Management System
            </p>

            <p
                style={{
                    marginTop: "5px",
                    fontSize: "14px"
                }}
            >
                Built with React • Spring Boot • MySQL
            </p>
        </footer>
    );
};

export default Footer;
