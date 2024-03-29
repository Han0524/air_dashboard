import axiosInstance from './axiosInstance';

const requestURL = "/api/rawData/day";

export const fetchRawData = async () => {
    const requestBody = {
        date: "2024-01-08",
    }
    const response = await axiosInstance.post(requestURL, requestBody);

    console.log(response);
    return response.data;
};