import axios from "axios";

import { openNotification } from "../_components";

import channelList from "../Pages/ContentApproval/_channelData.json";

export const handleApproveContent = async (
    contentID, 
    setIsLoading, 
    setIsModalApprovalOpen, 
    getAllOrder,
    selectedChannel,
    selectedStatus,
    setDataTable,
    ) => {
    setIsLoading(true);
    const { refreshToken } = JSON.parse(localStorage.getItem("userCredentials"));

    const payload = {
        id: contentID
    };
    
    try {
        const getAccessToken = await axios.get(`${process.env.REACT_APP_BASE_PATH}/accessToken`, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        const response = await axios.put(`${process.env.REACT_APP_BASE_PATH}/order/approve`, payload, {
            headers: {
                Authorization: `Bearer ${getAccessToken.data.data.accessToken}`
            }
        });

        await getAllOrder();
        setTimeout(() => {
            const dataOrder = JSON.parse(localStorage.getItem("allOrdersList"));
            openNotification("success", "Sukses", response.data.message);
            if (selectedStatus !== undefined) {
                setDataTable(dataOrder.filter((data) => data.status === selectedStatus));
                setIsLoading(false);
                setIsModalApprovalOpen(false);
            } else {
                const getValue = channelList.filter((data) => data.name === selectedChannel)[0].value;
                setDataTable(dataOrder.filter((data) => data.platform === getValue));
                setIsLoading(false);
                setIsModalApprovalOpen(false);
            }
        }, 500);
    } catch (error) {
        setIsLoading(false);
        openNotification("error", "Gagal", error.response.data.message);
        // console.log(error);
    }
};

export const handleRejectContent = async (
    contentID, 
    setIsLoading, 
    setIsModalApprovalOpen, 
    getAllOrder,
    selectedChannel,
    selectedStatus,
    setDataTable,
    ) => {
    setIsLoading(true);
    const { refreshToken } = JSON.parse(localStorage.getItem("userCredentials"));

    const payload = {
        id: contentID
    };
    
    try {
        const getAccessToken = await axios.get(`${process.env.REACT_APP_BASE_PATH}/accessToken`, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        const response = await axios.put(`${process.env.REACT_APP_BASE_PATH}/order/reject`, payload, {
            headers: {
                Authorization: `Bearer ${getAccessToken.data.data.accessToken}`
            }
        });

        await getAllOrder();
        setTimeout(() => {
            const dataOrder = JSON.parse(localStorage.getItem("allOrdersList"));
            openNotification("success", "Sukses", response.data.message);
            if (selectedStatus !== undefined) {
                setDataTable(dataOrder.filter((data) => data.status === selectedStatus));
                setIsLoading(false);
                setIsModalApprovalOpen(false);
            } else {
                const getValue = channelList.filter((data) => data.name === selectedChannel)[0].value;
                setDataTable(dataOrder.filter((data) => data.platform === getValue));
                setIsLoading(false);
                setIsModalApprovalOpen(false);
            }
        }, 500);
    } catch (error) {
        setIsLoading(false);
        openNotification("error", "Gagal", error.response.data.message);
        // console.log(error.response);
    }
};