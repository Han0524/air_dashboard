import { create } from 'zustand';

const useNodeInfoStore = create((set) => ({
    nodes: [],
    setNodes: (nodes) => set({ nodes }),
    // battery, location, nodeAddress, latitude, longitude
    node: {},
    setNode: (newNode) => set({ node: newNode }),

}));

export default useNodeInfoStore;