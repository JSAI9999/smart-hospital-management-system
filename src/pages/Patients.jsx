import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Patients = () => {

    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/patients");
            setPatients(response.data);
        } catch (error) {
            console.log("Backend not connected. Showing dummy data.");

            setPatients([
                {
                    id: 1,
                    name: "John Smith",
                    age: 35,
                    gender: "Male",
                    disease: "Fever"
                },
                {
                    id: 2,
                    name: "Mary Johnson",
                    age: 28,
                    gender: "Female",
                    disease: "Diabetes"
                },
                {
                    id: 3,
                    name: "Robert Brown",
                    age: 47,
                    gender: "Male",
                    disease: "Heart Disease"
                }
            ]);
        }
    };

    const deletePatient = (id) => {
        alert("Delete Patient ID : " + id);
    };

    const editPatient = (id) => {
        alert("Edit Patient ID : " + id);
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

                <h2>Patient Management</h2>

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
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}
                    >
                        Add Patient
                    </button>

                </div>

                <table
                    border="1"
                    cellPadding="10"
                    cellSpacing="0"
                    width="100%"
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
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Disease</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            patients
                                .filter((patient) =>
                                    patient.name.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((patient) => (

                                    <tr key={patient.id}>

                                        <td>{patient.id}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.disease}</td>

                                        <td>

                                            <button
                                                onClick={() => editPatient(patient.id)}
                                                style={{
                                                    marginRight: "10px",
                                                    background: "green",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "7px 15px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => deletePatient(patient.id)}
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

export default Patients;
