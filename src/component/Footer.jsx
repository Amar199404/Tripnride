import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "primary.main",
                color: "white",
                py: 2,
                textAlign: "center",
                mt: "auto",
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} TripnRide. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">
                    Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="#" color="inherit" underline="hover">
                    Terms of Service
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;