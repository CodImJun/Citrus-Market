import { ButtonProps } from "./Button.types";

export const Button = ({ children, size, w, ...props }: ButtonProps) => {
  const isActive = "active" in props && props.active;

  const WIDTH_HEIGHT_RADIUS = {
    L: `${w} h-[4.4rem] rounded-[4.4rem]`,
    M: `${w} h-[3.4rem] rounded-[3rem]`,
    MS: `${w} h-[3.2rem] rounded-[3.2rem]`,
    S: `${w} h-[2.8rem] rounded-[2.6rem]`,
  };

  const BG_COLOR = () => {
    if ((size === "M" || size === "S") && isActive) {
      return "bg-white border-[0.1rem] border-solid border-grey-300";
    }
    if (props.disabled) return "bg-[#ffc7a7]";
    return "bg-primary";
  };

  const FONT = () => {
    let fontStyle = "text-center ";
    size === "S"
      ? (fontStyle += "text-12-400-15 ")
      : (fontStyle += "text-14-500-17.5 ");
    isActive ? (fontStyle += "text-grey-700") : (fontStyle += "text-white");
    return fontStyle;
  };

  return (
    <button
      className={`${WIDTH_HEIGHT_RADIUS[size]} ${BG_COLOR()} ${FONT()} ${
        props.className
      }`}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};
