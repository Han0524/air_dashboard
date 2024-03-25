import axiosInstance from './axiosInstance';

const requestURL = "/api/nodeInfo";

export const fetchNodes = async () => {
    const response = await axiosInstance.get(requestURL);
    return response.data;
};

export const createNode = async (nodeAddress,location,latitude,longitude) => {
  const requestBody = {
    nodeAddress,
    location,
    latitude,
    longitude,
  };
  const response = await axiosInstance.post(requestURL, requestBody);
  return response.data;
};

export const updateNode = async (id,latitude,longitude) => { 
  const requestBody = {
    latitude,
    longitude,
    id,
  };
  const response = await axiosInstance.put(`${requestURL}/${id}`, requestBody);
  return response.data;
};

export const deleteNode = async (id) => {
  const response = await axiosInstance.delete(`${requestURL}/${id}`);

  return response.data;
};
