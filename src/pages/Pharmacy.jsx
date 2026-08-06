import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Pharmacy = () => {

    const [medicines, setMedicines] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadMedicines();
    }, []);

    const loadMedicines = async () => {

        try {

            const response = await axios.get("http://localhost:8080/api/pharmacy");
            setMedicines(response.data);

        } catch (error) {

            console.log("Backend unavailable. Loading sample medicines.");

            setMedicines([
                {
                    id: 1,
                    name: "Paracetamol",
                    category: "Tablet",
                    quantity: 250,
                    price: 25,
                    manufacturer: "Cipla"
                },
                {
                    id: 2,
                    name: "Amoxicillin",
                    category: "Capsule",
                    quantity: 120,
                    price: 120,
                    manufacturer: "Sun Pharma"
                },
                {
                    id: 3,
                    name: "Cetirizine",
                    category: "Tablet",
                    quantity: 180,
                    price: 35,
                    manufacturer: "Dr. Reddy's"
                }
            ]);

        }

    };

    const editMedicine = (id) => {
        alert("Edit Medicine ID : " + id);
    };

    const deleteMedicine = (id) => {
        alert("Delete Medicine ID : " + id);
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

                <h2>Pharmacy Management</h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                    }}
                >

                    <input
                        type="text"
                        placeholder="Search Medicine..."
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
                        Add Medicine
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
                            <th>Medicine</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Manufacturer</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            medicines
                                .filter((medicine) =>
                                    medicine.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((medicine) => (

                                    <tr key={medicine.id}>

                                        <td>{medicine.id}</td>
                                        <td>{medicine.name}</td>
                                        <td>{medicine.category}</td>
                                        <td>{medicine.quantity}</td>
                                        <td>₹ {medicine.price}</td>
                                        <td>{medicine.manufacturer}</td>

                                        <td>

                                            <button
                                                onClick={() => editMedicine(medicine.id)}
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
                                                onClick={() => deleteMedicine(medicine.id)}
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

export default Pharmacy;
