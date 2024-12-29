import React from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { Dashboard, People, DirectionsCar, Settings } from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    TripnRide Admin
                </Typography>
            </Toolbar>
            <List>
                <ListItem disablePadding>
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to="/admin/users" style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to="/admin/trips" style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DirectionsCar />
                            </ListItemIcon>
                            <ListItemText primary="Trips" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to="/admin/settings" style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
