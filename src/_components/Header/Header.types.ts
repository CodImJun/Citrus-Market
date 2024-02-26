import { ButtonHTMLAttributes } from "react";

export interface UploadHeaderProps {
  buttonDisabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
}

export interface ChatHeaderProps {
  chatName: string;
}
