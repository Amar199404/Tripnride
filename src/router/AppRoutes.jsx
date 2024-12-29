import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../component/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Trips from "../pages/Trips/Trips";
import Setting from "../pages/Settings/Settings";
import Users from "../pages/Users/Users";
import Bookings from "../pages/Bookings/Bookings";

const Home = lazy(() => import("../pages/Home"));
const LogIn = lazy(() => import("../pages/Login/Login"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<LogIn />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="bookings" element={<Bookings />} />
                        <Route path="trips" element={<Trips />} />
                        <Route path="settings" element={<Setting />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
