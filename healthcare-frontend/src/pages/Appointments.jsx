import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/appointments");
            setAppointments(response.data);
        } catch (error) {

            console.log("Backend unavailable. Loading sample appointments.");

            setAppointments([
                {
                    id: 1001,
                    patient: "John Smith",
                    doctor: "Dr. Rajesh Kumar",
                    department: "Cardiology",
                    date: "2026-08-10",
                    time: "10:30 AM",
                    status: "Confirmed"
                },
                {
                    id: 1002,
                    patient: "Mary Johnson",
                    doctor: "Dr. Priya Sharma",
                    department: "Neurology",
                    date: "2026-08-11",
                    time: "02:00 PM",
                    status: "Pending"
                },
                {
                    id: 1003,
                    patient: "Robert Brown",
                    doctor: "Dr. David Wilson",
                    department: "Orthopedics",
                    date: "2026-08-12",
                    time: "11:15 AM",
                    status: "Completed"
                }
            ]);
        }
    };

    const editAppointment = (id) => {
        alert("Edit Appointment ID : " + id);
    };

    const deleteAppointment = (id) => {
        alert("Delete Appointment ID : " + id);
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
                <h2>Appointment Management</h2>

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
                        Schedule Appointment
                    </button>

                </div>

                <table
                    width="100%"
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    style={{ background: "white" }}
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
                            <th>Doctor</th>
                            <th>Department</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {appointments
                            .filter((appointment) =>
                                appointment.patient
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((appointment) => (

                                <tr key={appointment.id}>

                                    <td>{appointment.id}</td>
                                    <td>{appointment.patient}</td>
                                    <td>{appointment.doctor}</td>
                                    <td>{appointment.department}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.status}</td>

                                    <td>

                                        <button
                                            onClick={() => editAppointment(appointment.id)}
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
                                            onClick={() => deleteAppointment(appointment.id)}
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

                            ))}

                    </tbody>

                </table>

            </div>

        </>
    );

};

export default Appointments;
