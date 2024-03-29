import axiosInstance from './axiosInstance';

const requestURL = "/api/errData/day";

export const fetchErrors = async () => {
    const requestBody = {
      date: "2024-02-06",
    }

    const response = await axiosInstance.post(requestURL, requestBody);

    console.log(response);
    return response.data;
};


