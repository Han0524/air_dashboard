import axiosInstance from './axiosInstance';

export const fetchNodeInfo = async () => {
    const requestURL = "/api/nodeInfo";

    console.log("🚀 ~ fetchNodeInfo: ", requestURL);

    const response = await axiosInstance.get(requestURL);

    return response.data;
};

export const createNodeInfo = async (nodeAddress,location,latitude,longitude) => {
  const requestURL = "/api/nodeInfo";

  const requestBody = {
    nodeAddress,
    location,
    latitude,
    longitude,
  };
    
  const response = await axiosInstance.post(requestURL, requestBody);
  
  return response.data;
};

export const updateNodeInfo = async (id,latitude,longitude) => { 

  const requestURL = "/api/nodeInfo";

  const requestBody = {
    latitude,
    longitude,
    id,
  };

  console.log("🚀 ~ updateNodeInfo ~ requestURL:", requestURL);
  console.log("🚀 ~ updateNodeInfo ~ requestBody:", requestBody);
    
  const response = await axiosInstance.put(requestURL, requestBody);
  
  return response.data;
};

export const deleteNodeInfo = async (id) => {
  console.log("🚀 ~ updateNodeInfo ~ requestURL:", `/api/nodeInfo/${id}`);
  const response = await axiosInstance.delete(`/api/nodeInfo/${id}`);

  return response.data;
};
