import React from "react";
import { 
    Image,
    Typography, 
} from "antd";
import { Outlet } from "react-router-dom";

import iboostLogo from "../Assets/images/iboost-logo-white.png";

import "./auth.css";

const { Text } = Typography;

export const AuthLayout = () => {
    return (
        <>
        <div className="auth-page-body">
            <div className="auth-page-body-left-side">
                <div className="auth-page-body-left-side-brand">
                    <Image
                        className="brand-logo"
                        src={iboostLogo}
                        preview={false}
                    />
                    <Text className="brand" style={{ color: "white" }}>Admin Page</Text>
                </div>
            </div>
            <div className="auth-page-body-right-side">
                <div className="login-form-container">
                    <Outlet />
                    {/* <Login /> */}
                </div>
            </div>
        </div>
        </>
    );
};