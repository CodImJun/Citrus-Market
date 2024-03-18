export type FormInputProps = {
  labelName: "email" | "password" | "username" | "accountname" | "introduce";
  error?: string;
} & React.ComponentProps<"input">;
