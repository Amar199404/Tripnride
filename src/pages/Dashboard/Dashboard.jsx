import React from "react";
import { Typography } from "@mui/material";

const Dashboard = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Typography>
                Welcome to the TripnRide Admin Panel. Use the sidebar to navigate.
            </Typography>
        </div>
    )
}

export default Dashboard