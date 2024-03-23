import { create } from "zustand";

type PostTypeStoreState = {
  postListType: "default" | "album";
};

type PostTypeStoreActions = {
  changePostType: () => void;
};

export const usePostTypeStore = create<
  PostTypeStoreState & PostTypeStoreActions
>((set) => ({
  postListType: "default",
  changePostType: () =>
    set((state) => {
      return {
        postListType: state.postListType === "default" ? "album" : "default",
      };
    }),
}));
