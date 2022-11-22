import React from "react";
import { 
    Button, 
    Divider, 
    Image,
    Space,
    Typography 
} from "antd";

import iboostLogo from "../../Assets/images/iBoost-logo-fix.png";
import "./_dashboard.css";

const { Text } = Typography;

export const Dashboard = () => {
    return (
        <div className="dashboard-page-container">
            <Space direction="vertical" align="center" style={{ display: "flex", width: "100%" }}>
                <Text style={{ fontSize: "25px" }}>Welcome to</Text>
                <Image 
                    width={400}
                    preview={false}
                    src={iboostLogo}
                />
                <Text style={{ fontSize: "20px" }}>Admin Page</Text>
            </Space>
        </div>
    );
};