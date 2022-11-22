import axios from "axios";

export const getAllOrder = async () => {
    console.log("GETTING ALL ORDER");
    const { refreshToken } = JSON.parse(localStorage.getItem("userCredentials"));
    
    const payload = {
        platform: "",
        status: ""
    };

    try {
        const getAccessToken = await axios.get(`${process.env.REACT_APP_BASE_PATH}/accessToken`, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/order/list`, payload, {
            headers: {
                Authorization: `Bearer ${getAccessToken.data.data.accessToken}`
            }
        });

        let allDataOrder = [];
        response.data.data.map((data) => {
            allDataOrder.push(
                {
                    id: data.id,
                    ...data.contents,
                    status: data.status,
                    platform: data.platform
                }
            )
        });

        localStorage.setItem("allOrdersList", JSON.stringify(allDataOrder));
        console.log("DONE");
    } catch (error) {
        console.log(error.response);
    }
};