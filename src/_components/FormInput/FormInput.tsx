import { forwardRef } from "react";
import { FormInputProps } from "./FormInput.types";
import { changeLabelNameToText } from "./FormInput.utils";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ labelName, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-y-2">
        <label
          htmlFor={labelName}
          className="text-sm font-medium text-gray-700"
        >
          {changeLabelNameToText(labelName)}
        </label>
        <input
          ref={ref}
          id={labelName}
          className={`text-14-400-14 text-black py-[0.8rem] border-b-[0.1rem] border-solid ${
            error ? "border-red" : "border-grey-300"
          } focus:border-primary`}
          {...props}
        />
        <p className="text-12-400-14 text-red h-[1.4rem] pt-[0.2rem]">
          {error}
        </p>
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
