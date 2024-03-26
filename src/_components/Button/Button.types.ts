type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  w: `w-${string}`;
  children: React.PropsWithChildren;
  active?: boolean;
};

type ButtonActiveProps = ButtonBaseProps & {
  size: "M" | "S";
};

type ButtonInactiveProps = ButtonBaseProps & {
  size: "L" | "MS";
};

export type ButtonProps = ButtonActiveProps | ButtonInactiveProps;
