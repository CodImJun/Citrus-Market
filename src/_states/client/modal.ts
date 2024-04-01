import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ModalState = {
  isOpen: boolean;
  content: { text: string; onClick: () => void }[];
};

type ConfirmState = {
  isOpen: boolean;
  message: string;
  callback: () => void;
};

type UseModalStoreType = {
  modal: ModalState;
  openModal: (content: ModalState["content"]) => void;
  closeModal: () => void;

  confirm: ConfirmState;
  openConfirm: (message: string, callback: () => void) => void;
  closeConfirm: () => void;
};

const initialModalState = {
  isOpen: false,
  content: [],
};
const initialConfirmState = {
  isOpen: false,
  message: "",
  callback: () => {},
};

export const useModalStore = create<UseModalStoreType>()(
  immer((set, get) => ({
    modal: initialModalState,
    openModal: (content) => {
      set((state) => {
        state.modal.isOpen = true;
        state.modal.content = content;
      });
    },
    closeModal: () =>
      set((state) => {
        state.modal = initialModalState;
        state.confirm = initialConfirmState;
      }),

    confirm: initialConfirmState,
    openConfirm: (message, callback) => {
      set((state) => {
        state.confirm.isOpen = true;
        state.confirm.message = message;
        state.confirm.callback = callback;
      });
    },
    closeConfirm: () =>
      set((state) => {
        state.confirm = initialConfirmState;
      }),
  }))
);
