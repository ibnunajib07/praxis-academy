import axios from "axios";

import { openNotification } from "../_components";

export const login = async (payload, navigate) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/auth/admin/login`, payload);
        localStorage.setItem("userCredentials", JSON.stringify(response.data.data));
        openNotification("success", "Sukses", response.data.message);
        navigate("/dashboard");
        // console.log(response.data);
    } catch (error) {
        openNotification("error", "Gagal", error.response.data.message);
    }
};

export const logOut = (navigate) => {
    localStorage.removeItem("userCredentials");
    navigate("/login");
};