import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    // Open menu
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close menu
    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        navigate("/");
        handleProfileMenuClose();
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    TripnRide Admin Panel
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleProfileMenuClose}
                    >
                        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
