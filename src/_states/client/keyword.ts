import { create } from "zustand";

interface UseKeywordStore {
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
}

export const useKeywordStore = create<UseKeywordStore>((set) => ({
  keyword: "",
  onChangeKeyword: (keyword) => set({ keyword }),
}));
