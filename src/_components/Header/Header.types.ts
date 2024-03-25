import { ButtonHTMLAttributes } from "react";

export interface UploadHeaderProps {
  buttonDisabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
  uploadEvent?: () => void;
}

export interface ChatHeaderProps {
  chatName: string;
}
