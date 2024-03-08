import { create } from "zustand";

type PostTypeState = {
  postListType: "default" | "album";
};

type PostTypeActions = {
  changePostType: () => void;
};

export const usePostType = create<PostTypeState & PostTypeActions>((set) => ({
  postListType: "default",
  changePostType: () =>
    set((state) => {
      return {
        postListType: state.postListType === "default" ? "album" : "default",
      };
    }),
}));
