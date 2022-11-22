import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Alert,
    Space, 
    Input, 
    Select,
    Button, 
    Divider, 
    Typography, 
} from "antd";

import { login } from "../_services";

const { Text } = Typography;

export const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [userCredentials, setUserCredentials] = useState(
        {
            userName: "",
            userPassword: "",
        }
    );
    const [confirmPassword, setConfirmPassword] = useState("");

    const AlertComponent = () => {
        switch (true) {
            case userCredentials.userName.length < 4 && userCredentials.userName.length > 0:
                return (
                    <Alert
                        type={"warning"}
                        message={"Username harus lebih dari 3 karakter"}
                        showIcon
                    />
                )
            case userCredentials.userPassword !== confirmPassword:
                return (
                    <Alert
                        type={"error"}
                        message={"Password dan konfirmasi password tidak sama"}
                        showIcon
                    />
                )
            default:
                return (
                    null
                );
        }
    };

    return (
        <>
        <div className="login-page-title">
            <Text style={{ marginBottom: 10, fontWeight: "bold", fontSize: "25px" }}>L O G I N</Text>
        </div>
        <Space direction="vertical" style={{ display: "flex" }}>
            <AlertComponent />
            <Input
                size="large"
                status={userCredentials.userName.length > 0 && userCredentials.userName.length < 4 ? "error" : ""}
                className="custom-input-field"
                placeholder="Username" 
                onChange={(e) => setUserCredentials({...userCredentials, userName: e.target.value})}
            />
            <Input.Password 
                size="large"
                status={userCredentials.userPassword.length > 0 && userCredentials.userPassword !== confirmPassword ? "error" : ""}
                className="custom-input-field"
                placeholder="Password"
                onChange={(e) => setUserCredentials({...userCredentials, userPassword: e.target.value})}
            />
            <Input.Password 
                size="large"
                status={userCredentials.userPassword.length > 0 && userCredentials.userPassword !== confirmPassword ? "error" : ""}
                className="custom-input-field"
                placeholder="Konfirmasi Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button 
                block
                type="primary" 
                shape="round" 
                size="medium"
                className="login-button" 
                disabled={
                    (userCredentials.userName.length <= 0 && userCredentials.userName.length < 4) ||
                    userCredentials.userPassword.length <= 0 && confirmPassword.length <= 0 || 
                    userCredentials.userPassword !== confirmPassword
                }
                onClick={() => {
                    login(userCredentials, navigate);
                    // userLogin(userCredentials, navigate);
                }}
            >
                L O G I N
            </Button>
        </Space>
        </>
    );
};