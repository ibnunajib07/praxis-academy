import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
    MenuFoldOutlined,
    CopyrightOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { 
    Menu, 
    Image,
    Space, 
    Layout, 
    Button, 
    Typography,
} from 'antd';

import { sidebarItems, navbarItems, sidebarItemKeys, BreadCrumb } from "../Routes";

import { logOut } from "../_services";

import logoUnFold from "../Assets/images/iBoost-logo-fix.png";
import logoFold from "../Assets/images/iBoost-logo-fix-fold.png";
import "./pageLayout.css";

const { 
    Header, 
    Content, 
    Sider, 
    Footer 
} = Layout;
const { Text } = Typography;

export const PageLayout = () => {
    const navigate = useNavigate();
    const date = new Date();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['dashboard']);
    const [windowDimension, setWindowDiemnsion] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const currentMenuKeys = useMemo(() => {
        const splitPath = location.pathname.split("/");
        return splitPath[1];
    }, [location]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    
        if (sidebarItemKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const navbarNavigation = (e) => {
        switch (e.key) {
            case "setting":
                navigate("/setting");
                break;
            case "logout":
                logOut(navigate);
                break;
            default:
                break;
        }
    };

    const getSize = () => {
        setWindowDiemnsion({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', getSize);
        if (windowDimension.width < 1024 && collapsed === false) {
            setCollapsed(true);
        }
        else if (windowDimension.width > 1024 && collapsed === true) {
            setCollapsed(false);
        }
        return () => {
            window.removeEventListener('resize', getSize);
        };
    }, [windowDimension.width]);

    return (
        <>
        <Layout style={{ height: "100%" }}>
            <Sider width={230} style={{ backgroundColor: "white" }} trigger={null} collapsible collapsed={collapsed}>
                <div className={collapsed === false ? "logoUnfold" : "logoFold"} >
                    {
                        collapsed === false ? 
                        <Image width={90} height={25} src={logoUnFold} preview={false} />
                        :
                        <Image width={35} height={35} src={logoFold} preview={false} />
                    }
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={currentMenuKeys}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={sidebarItems}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "white" }}>
                    <Button 
                        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                    >
                        {
                            collapsed === true ? 
                            <>
                            <MenuUnfoldOutlined style={{ color: "black" }} />
                            </> 
                            : 
                            <>
                            <MenuFoldOutlined style={{ color: "black" }} />
                            </>
                        }
                    </Button>
                    <Menu 
                        theme="light"
                        mode="horizontal"
                        className="navbarMenu" 
                        triggerSubMenuAction={"click"}
                        items={navbarItems()}
                        onClick={(e) => {
                            navbarNavigation(e);
                        }} 
                    />
                </Header>
                <Content className="site-layout-container">
                    <BreadCrumb />
                    <Outlet />
                </Content>
                <Footer className="footer">
                    <Space direction="horizontal">
                        <Text>{date.getFullYear()}</Text>
                        <CopyrightOutlined />
                        <Text>iBoost</Text>
                    </Space>
                </Footer>
            </Layout>
        </Layout>
        </>
    );
};