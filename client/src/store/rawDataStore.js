import { create } from 'zustand';

const useRawDataStore = create((set) => ({
    rawData: [],
    setRawData: (data) => set({ rawData: data }),
    // ch2o, date, humidity, nodeAddress, pm10, pm25, temperature, timestamp, wind-direction, wind-speed

}));

export default useRawDataStore;