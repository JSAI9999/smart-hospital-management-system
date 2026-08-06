import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadDoctors();
    }, []);

    const loadDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/doctors");
            setDoctors(response.data);
        } catch (error) {
            console.log("Backend not connected. Loading sample doctors.");

            setDoctors([
                {
                    id: 101,
                    name: "Dr. Rajesh Kumar",
                    specialization: "Cardiologist",
                    department: "Cardiology",
                    experience: 12,
                    contact: "9876543210"
                },
                {
                    id: 102,
                    name: "Dr. Priya Sharma",
                    specialization: "Neurologist",
                    department: "Neurology",
                    experience: 9,
                    contact: "9876501234"
                },
                {
                    id: 103,
                    name: "Dr. David Wilson",
                    specialization: "Orthopedic",
                    department: "Orthopedics",
                    experience: 15,
                    contact: "9988776655"
                }
            ]);
        }
    };

    const editDoctor = (id) => {
        alert("Edit Doctor ID : " + id);
    };

    const deleteDoctor = (id) => {
        alert("Delete Doctor ID : " + id);
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

                <h2>Doctor Management</h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                    }}
                >

                    <input
                        type="text"
                        placeholder="Search Doctor..."
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
                        Add Doctor
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
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Department</th>
                            <th>Experience</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            doctors
                                .filter((doctor) =>
                                    doctor.name.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((doctor) => (

                                    <tr key={doctor.id}>

                                        <td>{doctor.id}</td>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.specialization}</td>
                                        <td>{doctor.department}</td>
                                        <td>{doctor.experience} Years</td>
                                        <td>{doctor.contact}</td>

                                        <td>

                                            <button
                                                onClick={() => editDoctor(doctor.id)}
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
                                                onClick={() => deleteDoctor(doctor.id)}
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

export default Doctors;
