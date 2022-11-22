import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { AuthLayout } from "../Auth/AuthLayout";
import { Login } from "../Auth/Login";

import { ProtectedRoutes } from "./ProtectedRoutes";
import { PageLayout } from "../Pages/PageLayout";

import { ErrorPage } from "../Pages";

import { protectedRouteList } from "./RoutesRegistry";

export const MainRoutes = () => {
    return (
        <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<PublicRoutes />} >
                <Route path="/" element={<AuthLayout />} >
                    <Route index path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to={"/login"} replace />} />
                </Route>
            </Route>
            {/* END PUBLIC ROUTES */}

            {/* PROTECTED ROUTES */}
            <Route path="/" element={<ProtectedRoutes />} >
                <Route path="/" element={<PageLayout />} >
                    {
                        protectedRouteList.map((data, index) => {
                            if (data.children.length === 0) {
                                return (
                                    <Route key={index} {...data.isIndex === true ? index : null} path={data.path} element={data.element} />
                                )
                            }
                            else {
                                return (
                                    data.children.map((data, index) =>
                                        <Route key={index} path={data.path} element={data.element} />
                                    )
                                )
                            }
                        })
                    }
                </Route>
            </Route>
            {/* END PROTECTED ROUTES */}

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};