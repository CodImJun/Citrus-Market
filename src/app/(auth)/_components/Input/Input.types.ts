import { Dispatch, SetStateAction } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: LabelType;
  error?: string;
  setError?: () => void;
}

export type LabelType =
  | "email"
  | "password"
  | "username"
  | "accountname"
  | "introduce";
