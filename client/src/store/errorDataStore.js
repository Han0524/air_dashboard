import { create } from 'zustand';

const useErrorDataStore = create((set) => ({
    errorData: [],
    setErrorData: (data) => set({ errorData : data }),
    // date, errorData, timestamp, id

}));

export default useErrorDataStore;