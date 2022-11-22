import axios from "axios";

export const corporateRegistration = (formData, setFormData, channelDeals, setChannelDeals) => {
    const payload = {
        ...formData,
        channelDeals
    }
    console.table(payload);
    // console.table(channelDeals);
};