import { create } from "zustand";

interface loadingStore {
  isLoading: boolean;
  setLoadingTrue: () => void;
  setLoadingFalse: () => void;
}

const useLoading = create<loadingStore>((set) => ({
  isLoading: false,
  setLoadingTrue: () => set({ isLoading: true }),
  setLoadingFalse: () => set({ isLoading: false }),
}));

export default useLoading;
