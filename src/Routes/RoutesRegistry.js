import React from "react";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    SettingOutlined,
    CheckCircleOutlined,
    BookOutlined,
    FormOutlined,
    FundOutlined,
    TeamOutlined,
    UserOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faFileInvoice, faBuilding, faTableList } from "@fortawesome/free-solid-svg-icons";

import { 
    Dashboard,
    ContentApproval,
    CreateTemplate,
    ManageTemplate,
    PaymentApproval,
    FinancialAnalysis,
    AdminRegistration,
    Settings,
    CorporateRegistration,
    CorporateList,
    CorporateAnalytic
} from "../Pages";
import { NewPage } from "../Pages/NewPage/NewPage";

export const protectedRouteList = [
    {
        key: "dashboard",
        label: <Link to="/dashboard" >Dashboard</Link>,
        path: "/dashboard",
        isIndex: true,
        element: <Dashboard />,
        icon: <HomeOutlined />,
        children: [],
    },
    {
        key: "content_management",
        label: "Content",
        path: "/content_management",
        isIndex: false,
        element: null,
        icon: <BookOutlined />,
        children: [
            {
                key: "content_approval",
                label: <Link to="/content_management/content_approval" ><CheckCircleOutlined style={{ marginRight: "5px" }} />Approval Konten</Link>,
                path: "/content_management/content_approval",
                element: <ContentApproval />,
                icon: null,
                children: null
            },
            {
                key: "create_template",
                label: <Link to="/content_management/create_template" ><FormOutlined style={{ marginRight: "5px" }} />Buat Template</Link>,
                path: "/content_management/create_template",
                element: <CreateTemplate />,
                icon: null,
                children: null
            },
            {
                key: "manage_template",
                label: <Link to="/content_management/manage_template" ><SettingOutlined style={{ marginRight: "5px" }} />Kelola Template</Link>,
                path: "/content_management/manage_template",
                element: <ManageTemplate />,
                icon: null,
                children: null
            },
        ],
    },
    {
        key: "finance_management",
        label: "Keuangan",
        path: "/finance_management",
        isIndex: false,
        element: null,
        icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        children: [
            {
                key: "payment_approval",
                label: <Link to="/finance_management/payment_approval" ><FontAwesomeIcon icon={faFileInvoice} style={{ marginRight: "5px" }} />Approval Pembayaran</Link>,
                path: "/finance_management/payment_approval",
                element: <PaymentApproval />,
                icon: null,
                children: null
            },
            {
                key: "financial_analysis",
                label: <Link to="/finance_management/analysis" ><FundOutlined style={{ marginRight: "5px" }} />Analisis Keuangan</Link>,
                path: "/finance_management/analysis",
                element: <FinancialAnalysis />,
                icon: null,
                children: null
            },
        ],
    },
    {
        key: "user_management",
        label: "User",
        path: "/user_management",
        isIndex: false,
        element: null,
        icon: <TeamOutlined />,
        children: [
            {
                key: "admin_list",
                label: <Link to="/user_management/admin_list" ><UserOutlined style={{ marginRight: "5px" }} />Daftar Admin</Link>,
                path: "/user_management/admin_list",
                element: <AdminRegistration />,
                icon: null,
                children: null
            },
        ],
    },
    {
        key: "corporate_management",
        label: "Corporate",
        path: "/corporate_management",
        isIndex: false,
        element: null,
        icon: <FontAwesomeIcon icon={faBuilding} />,
        children: [
            {
                key: "corporate_registration",
                label: <Link to="/corporate_management/corporate_registration" ><FormOutlined style={{ marginRight: "5px" }} />Registrasi Corporate</Link>,
                path: "/corporate_management/corporate_registration",
                element: <CorporateRegistration />,
                icon: null,
                children: null
            },
            {
                key: "corporate_list",
                label: <Link to="/corporate_management/corporate_list" ><FontAwesomeIcon icon={faTableList} style={{ marginRight: "5px" }} />Daftar Corporate</Link>,
                path: "/corporate_management/corporate_list",
                element: <CorporateList />,
                icon: null,
                children: null
            },
            {
                key: "corporate_analysis",
                label: <Link to="/corporate_management/corporate_analysis" ><FundOutlined style={{ marginRight: "5px" }} />Analysis</Link>,
                path: "/corporate_management/corporate_analysis",
                element: <CorporateAnalytic />,
                icon: null,
                children: null
            },
        ],
    },
    {
        key: "setting",
        label: <Link to="/setting" >Setting</Link>,
        path: "/setting",
        isIndex: true,
        element: <Settings />,
        icon: <SettingOutlined />,
        children: [],
    },
    {
        key: "newpage",
        label: <Link to="/newpage" >New Page</Link>,
        path: "/newpage",
        isIndex: true,
        element: <NewPage />,
        icon: <GithubOutlined />,
        children: [],
    },
];

export const standAlonePageRouteList = [];