import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const drawerWidth = 240;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>

            <Sidebar />

            <Box
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: `${drawerWidth}px`,
                }}
            >
                <Header />
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Outlet />
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default AdminLayout;
