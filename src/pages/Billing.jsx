import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Billing = () => {

    const [bills, setBills] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBills();
    }, []);

    const loadBills = async () => {

        try {

            const response = await axios.get("http://localhost:8080/api/bills");
            setBills(response.data);

        } catch (error) {

            console.log("Backend unavailable. Loading sample billing data.");

            setBills([
                {
                    id: 5001,
                    patient: "John Smith",
                    amount: 8500,
                    paymentDate: "2026-08-01",
                    paymentMethod: "UPI",
                    status: "Paid"
                },
                {
                    id: 5002,
                    patient: "Mary Johnson",
                    amount: 12400,
                    paymentDate: "2026-08-02",
                    paymentMethod: "Cash",
                    status: "Pending"
                },
                {
                    id: 5003,
                    patient: "Robert Brown",
                    amount: 6700,
                    paymentDate: "2026-08-03",
                    paymentMethod: "Credit Card",
                    status: "Paid"
                }
            ]);

        }

    };

    const editBill = (id) => {
        alert("Edit Bill : " + id);
    };

    const deleteBill = (id) => {
        alert("Delete Bill : " + id);
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

                <h2>Billing Management</h2>

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
                        Generate Bill
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
                            <th>Bill ID</th>
                            <th>Patient</th>
                            <th>Amount</th>
                            <th>Payment Date</th>
                            <th>Payment Method</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            bills
                                .filter((bill) =>
                                    bill.patient.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((bill) => (

                                    <tr key={bill.id}>

                                        <td>{bill.id}</td>
                                        <td>{bill.patient}</td>
                                        <td>₹ {bill.amount}</td>
                                        <td>{bill.paymentDate}</td>
                                        <td>{bill.paymentMethod}</td>

                                        <td>

                                            <span
                                                style={{
                                                    color:
                                                        bill.status === "Paid"
                                                            ? "green"
                                                            : "red",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {bill.status}
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                onClick={() => editBill(bill.id)}
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
                                                onClick={() => deleteBill(bill.id)}
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

export default Billing;
