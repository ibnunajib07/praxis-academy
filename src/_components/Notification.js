import { notification } from "antd";

export const openNotification = (type, message, description) => {
    notification[type]({
        placement: "bottomRight",
        message,
        description
    });
};