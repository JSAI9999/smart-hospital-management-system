import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Laboratory = () => {

    const [reports, setReports] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadReports();
    }, []);

    const loadReports = async () => {

        try {

            const response = await axios.get("http://localhost:8080/api/laboratory");
            setReports(response.data);

        } catch (error) {

            console.log("Backend unavailable. Loading sample laboratory reports.");

            setReports([
                {
                    id: 1,
                    patient: "John Smith",
                    test: "Complete Blood Count (CBC)",
                    doctor: "Dr. Rajesh Kumar",
                    date: "2026-08-05",
                    status: "Completed"
                },
                {
                    id: 2,
                    patient: "Mary Johnson",
                    test: "Blood Sugar",
                    doctor: "Dr. Priya Sharma",
                    date: "2026-08-06",
                    status: "Pending"
                },
                {
                    id: 3,
                    patient: "Robert Brown",
                    test: "Lipid Profile",
                    doctor: "Dr. David Wilson",
                    date: "2026-08-07",
                    status: "Completed"
                }
            ]);

        }

    };

    const editReport = (id) => {
        alert("Edit Report ID : " + id);
    };

    const deleteReport = (id) => {
        alert("Delete Report ID : " + id);
    };

    return (
        <>
            <Navbar />
            <Sidebar />

            <div
                style={{
                    marginLeft: "260px",
                    padding: "25px"
                }}
            >
                <h2>Laboratory Reports</h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search Patient..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: "300px",
                            padding: "10px"
                        }}
                    />

                    <button
                        style={{
                            background: "#1976d2",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Add Report
                    </button>
                </div>

                <table
                    width="100%"
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    style={{
                        background: "white"
                    }}
                >
                    <thead
                        style={{
                            background: "#1976d2",
                            color: "white"
                        }}
                    >
                        <tr>
                            <th>ID</th>
                            <th>Patient</th>
                            <th>Test</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            reports
                                .filter((report) =>
                                    report.patient
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((report) => (

                                    <tr key={report.id}>

                                        <td>{report.id}</td>
                                        <td>{report.patient}</td>
                                        <td>{report.test}</td>
                                        <td>{report.doctor}</td>
                                        <td>{report.date}</td>

                                        <td>
                                            <span
                                                style={{
                                                    color:
                                                        report.status === "Completed"
                                                            ? "green"
                                                            : "orange",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {report.status}
                                            </span>
                                        </td>

                                        <td>

                                            <button
                                                onClick={() => editReport(report.id)}
                                                style={{
                                                    background: "green",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "7px 15px",
                                                    marginRight: "10px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => deleteReport(report.id)}
                                                style={{
                                                    background: "red",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "7px 15px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))
                        }

                    </tbody>

                </table>

            </div>

        </>
    );

};

export default Laboratory;
