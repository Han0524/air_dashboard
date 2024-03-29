import { create } from 'zustand';

const useNodeInfoStore = create((set) => ({
    nodes: [],
    setNodes: (data) => set({ nodes:data }),
    // battery, location, nodeAddress, latitude, longitude
    node: {},
    setNode: (data) => set({ node: data }),

}));

export default useNodeInfoStore;