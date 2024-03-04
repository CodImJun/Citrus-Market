import { forwardRef } from "react";
import { InputProps } from "./Input.types";
import { variantToLabel } from "./Input.utils";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ labelName, type = "text", value, error, setError, ...props }, ref) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange && props.onChange(e);
      setError && setError();
    };

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onFocus && props.onFocus(e);
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onBlur && props.onBlur(e);
    };

    return (
      <div className="flex flex-col gap-y-[0.2rem]">
        <label htmlFor={labelName} className="text-12-500-15 text-grey-700">
          {variantToLabel(labelName)}
        </label>
        <input
          ref={ref}
          type={type}
          id={labelName}
          className={`text-14-400-14 text-black py-[0.8rem] border-b-[0.1rem] border-solid border-grey-300 focus:border-primary`}
          value={value}
          {...props}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />

        <p
          aria-label="에러"
          className={`text-12-400-14 text-red h-[1.4rem] pt-[0.2rem]`}
        >
          {error}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input";
