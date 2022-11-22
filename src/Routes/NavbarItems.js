import React from "react";
import { 
    SmileOutlined, 
    PoweroffOutlined,
    SettingOutlined
} from '@ant-design/icons';

export const navbarItems = () => {
    const { userTypeName } = JSON.parse(localStorage.getItem("userCredentials"));

    return [
        {
            key: "user-profile",
            label: userTypeName,
            icon: <SmileOutlined />,
            children: [
                {
                    key: "setting",
                    label: `Setting`,
                    icon: <SettingOutlined />
                },
                {
                    key: "logout",
                    label: "Log Out",
                    icon: <PoweroffOutlined />
                }
            ],
        },
    ]
};