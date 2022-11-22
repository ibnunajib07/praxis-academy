import React, { useEffect, useMemo } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

import { promiseAll } from "../_services";

export const ProtectedRoutes = () => {
    const navigate = useNavigate();
    // const isUserExist = user();
    // const getUser = JSON.parse(localStorage.getItem("userCredentials"));
    // console.log("GET USER", getUser);

    const isUserExist = useMemo(async () => {
        const getUser = localStorage.getItem("userCredentials");
        if (!getUser) return false;
        return true;
    }, []);

    // const onActiveEvent = async () => {
    //     const getUser = JSON.parse(localStorage.getItem("userCredentials"));
    //     try {
    //         await tokenChecker(getUser.refreshToken);
    //         console.log("USER EXIST");
    //         return;
    //     } catch (error) {
    //         userLogOut(navigate);
    //     }
    // };

    // useIdleTimer({
    //     // timeout: 1000 * 60 * 15,
    //     timeout: 5000,
    //     onActive: onActiveEvent,
    //     debounce: 500
    // });

    useEffect(() => {
        promiseAll();
    }, []);

    return (
        isUserExist ? <Outlet /> : <Navigate to={"/login"} replace />
    );
};