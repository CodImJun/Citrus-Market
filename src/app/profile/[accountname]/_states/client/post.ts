import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type UsePostTypeState = {
  postType: "list" | "album";
};

type UsePostTypeAction = {
  setPostListType: () => void;
  setPostAlbumType: () => void;
};

export const usePostTypeStore = create<UsePostTypeState & UsePostTypeAction>()(
  immer((set) => ({
    postType: "list",
    setPostListType: () =>
      set((state) => {
        state.postType = "list";
      }),
    setPostAlbumType: () =>
      set((state) => {
        state.postType = "album";
      }),
  }))
);
