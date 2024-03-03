import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Apple Iphone 15 Pro Max", 202403001, "1 March 2024", "Approved"),
    createData("Samsung Galaxy S22 Ultra", 202403002, "1 March 2024", "Pending"),
    createData("Xiaomi S30 Plus", 202403003, "2 March 2024", "Approved"),
    createData("Oppo Galaxy 3310", 202403004, "2 March 2024", "On Delivery"),
    createData("Apple Macbook Pro M4", 202403005, "3 March 2024", "Delivered"),
    createData("Asus Vivobook Ryzen 5", 202403006, "4 March 2024", "Pending"),
    createData("Apple Ipad Pro Max M5", 202403007, "4 March 2024", "On Delivery"),
    createData("Strawberry", 202403008, "8 March 2024", "Delivered"),
];

const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else if (status === 'On Delivery') {
        return {
            background: '#fedd71',
            color: 'darkgoldenrod',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" style={{ cursor: 'pointer' }} className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
