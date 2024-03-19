export type FormInputProps = {
  labelName:
    | "image"
    | "email"
    | "password"
    | "username"
    | "accountname"
    | "introduce";
  error?: string;
} & React.ComponentProps<"input">;
