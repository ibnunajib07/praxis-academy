import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const user = () => {
    console.log("CHECK USER IN PUBLIC ROUTES");
    const getUser = localStorage.getItem("userCredentials");
    if (!getUser) return false;
    return true;
};

export const PublicRoutes = () => {
    const isUserExist = user();

    return (
        isUserExist ? <Navigate to={"/dashboard"} replace /> : <Outlet />
    );
};